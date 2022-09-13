import React, { useEffect, useState, Fragment,useRef } from "react";
// import Accordion from "./Accordion";
import Accordion from "../Accordion";
import { ApiUrl } from "../../../api/endPoints";
import { ApiClient } from "../../../api/apiClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle,faFile } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import Loader from 'react-animated-loader';
import { toast } from "react-hot-toast";
import { CSVLink } from "react-csv";


import moment from "moment";

const CATERGORY_NAME = {
  ACCEPTED_ORDERS: "Assigned Orders",
};

export default function AgentAssignOrders(props) {
  const { AgentID } = useSelector((state) => state.UserCart);
  const [CategoryData, setCategoryData] = useState([]);
  const [isLoading , setIsLoading]= useState(true);

  useEffect(() => {
    const params = {
      agent_id: AgentID,
    };

    ApiClient.PostApi(ApiUrl.PartnerOrders, params).then((value) => {
      if (value.status === "success") {
        var AcceptedOrderData = [];
        const acceptedorders = value.accepted_orders;
         if (acceptedorders) {
           if (acceptedorders.length > 0) {
             AcceptedOrderData = acceptedorders;
           }
         }
         setIsLoading(false);
 
         const CategData = [
           { Name: CATERGORY_NAME.ACCEPTED_ORDERS, Data: AcceptedOrderData },
         ];
 
         setCategoryData(CategData);
       } else {
         // error or no record found
 setIsLoading(false);
 
       }
     });
   }, [AgentID]);




     //CSV
  const headers = [
    { label: "Order Status", key: "order_status" },
    { label: "Order No.", key: "order_id" },
    { label: "Billing Name", key: "billing_name" },
    { label: "Billing Phone-no", key: "billing_phoneno" },
    { label: "Billing EmailID", key: "billing_emailid" },
    { label: "Billing Village", key: "billing_village" },
    { label: "Billing sub-district", key: "billing_sub_district" },
    { label: "Billing District", key: "billing_district" },
    { label: "Billing State", key: "billing_state" },
    { label: "Billing Locality", key: "billing_locality" },
    { label: "Billing Pincode", key: "billing_pincode" },
    { label: "Billing Location ", key: "billing_location" },
    { label: "Shipping Name", key: "shipping_name" },
    { label: "Shipping Phone-no", key: "shipping_phoneno" },
    { label: "Shipping EmailID", key: "shipping_emailid" },
    { label: "Shipping Village", key: "shipping_village" },
    { label: "Shipping sub-district", key: "shipping_sub_district" },
    { label: "Shipping District ", key: "shipping_district" },
    { label: "Shipping State", key: "shipping_state" },
    { label: "Shipping Locality", key: "shipping_locality" },
    { label: "Shipping Pincode", key: "shipping_pincode" },
    { label: "Retailer Name ", key: "retailer_name" },
    { label: "Retailer Company Name ", key: "retailer_companyname" },
    { label: "Retailer Zone Name ", key: "retailer_zonename" },
    { label: "Retailer EmailID ", key: "retailer_emailid" },
    { label: "Retailer GST No. ", key: "retailer_gstnumber" },
    { label: "Retailer PAN No. ", key: "retailer_panno" },
    { label: "Retailer Phone-no ", key: "retailer_phoneno" },
    { label: "Retailer Address ", key: "retailer_address" },
    { label: "Retailer City ", key: "retailer_city" },
    { label: "Retailer state ", key: "retailer_state" },
    { label: "Retailer District ", key: "retailer_district" },
    { label: "Retailer Pincode ", key: "retailer_pincode" },
    { label: "Retailer Jurisdiction ", key: "retailer_jurisdiction" },
    { label: "Retailer Sub-Zone ", key: "retailer_subzoneid" },
  ];



  const [csvData, setCsvData] = useState([]);
  const csvLinkEl = useRef(null);

  const downloadReport2 = () => {
    const agent = {
      agent_id: AgentID,
      // order_status:1
    };
    console.log("Clickkdedf");

    ApiClient.PostApi(ApiUrl.AgentOrdersCSV, agent).then((value) => {
      if (value !== null) {
        if (value.status === "success") {
          console.log("value", value);
          console.log("value.new_orders",value.accepted_orders)
          setCsvData(value.accepted_orders);

          

          setTimeout(() => {
            csvLinkEl.current.link.click();
          });
        } else {
          toast.error("Response not received from server.", {
            position: "top-right",
          });
        }
      } else {
        toast.error("Could not connect to server. Please retry.", {
          position: "bottom-left",
        });
      }
    });
  };
  return (
    <div className="page-content">
    <div className="card-box">
      <div className="container p-0">
        <div className="row search-box mb-3">
          <h4 className="protitle mb-0">Assigned Orders</h4>
          <div className="text-right">
              <CSVLink
                headers={headers}
                data={csvData}
                filename={"AgentAssignedOrdersCargillDelivery.csv"}
                ref={csvLinkEl}
              >
                <button
                  type="button"
                  className="btn btn-with-icon "
                  onClick={downloadReport2}
                  // onClick={()=>{
                  //           toast.success("Feature Coming Soon", {
                  //                         position: "top-right",
                  //                       });
                  //         }}
                >
                  <FontAwesomeIcon icon={faFile} />
                  &nbsp; Export CSV
                </button>
              </CSVLink>
            </div>
        </div>
        { isLoading ? 
				<Loader />
				: null} 
        <div className="row mt-2">
          <div className="accordion">
            {CategoryData.map((value, index) => {
              return (
                <Fragment key={index.toString()}>
                  {/* <div className="accordion-item">
                    <div
                      className="accordion-title"
                      onClick={() => setCurrentState(value.Name)}
                    >
                      <div className="accordion-heading">{value.Name}</div>
                      <div className="accordion-icon">
                        {currentState === value.Name ? "-" : "+"}
                      </div>
                    </div> */}
                    <>
                      {/* {currentState === value.Name && ( */}
                        <>
                          {value.Data.length > 0 ? (
                            <>
                              {value.Data.map((order,childindex) => {

                            

                                return (
                                  <Fragment key={order.order_id}>
                                    <Accordion
                                      CustomerId={order.customer_id}
                                      Address={order.billing_address}
                                      Title={order.title}
                                      OrderNo={order.order_id}
                                      Price={order.grand_total}
                                      Date={moment(order.order_date).format(
                                        "DD MMMM YYYY"
                                      )}
                     
                                      City={order.billing_city}
                                      State={order.billing_state}
                                      PinCode={order.billing_pincode}
                                      ProductDetails={order.product_details}
                                      Status={order.order_status}
                                      FarmerName={order.billing_name}
                                      RetailerName={order.retailer_name}
                                      RetailerAddress={order.retailer_address}
                                        RetailerCity={order.retailer_city}
                                        RetailerState={order.retailer_state}
                                        RetailerDistrict={order.retailer_district}
                                        RetailerPinCode={order.retailer_pincode}
                                      // AgentName={order.}
                                      // AgentPhoneNo={order.}
                                      // Ashish
                                      OnRefreshList={()=>{
                                          let newchildarray = [...value.Data]
                                          newchildarray.splice(childindex,1)
                                          let newparentarray = [...CategoryData]
                                          newparentarray[index]={
                                            ...newparentarray[index],
                                            "Data":newchildarray
                                          }
                                          setCategoryData(newparentarray)
                                        }}
                                    />
                                  </Fragment>
                                );
                              })}
                            </>
                          ) : (
                            <>
                              <center>
                                <br />
                                <FontAwesomeIcon
                                  icon={faExclamationTriangle}
                                  
                                  className="nofound_icon"
                                />
                                <h5> No Orders Currently </h5>
                                
                                <br />
                              </center>
                            </>
                          )}
                        </>
                      {/* )} */}
                    </>
                  {/* </div> */}
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
