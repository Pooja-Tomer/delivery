import React, { useEffect, useState, Fragment } from "react";
import Accordion from "./Accordion";
import { ApiUrl } from "../../../api/endPoints";
import { ApiClient } from "../../../api/apiClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { useSelector } from "react-redux";
import NoRecordsFound from "../../../components/NoRecordsFound";
import Loader from 'react-animated-loader';


const CATERGORY_NAME = {
  ACCEPTED_ORDERS: "Assigned Orders",
};

export default function AssignOrders(props) {
  const { PartnerID } = useSelector((state) => state.UserCart);
  const [isLoading , setIsLoading]= useState(true); 
  const [CategoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const params = {
      partner_id: PartnerID,
    };

    ApiClient.PostApi(ApiUrl.OrdersList, params).then((value) => {
      if (value.status === "success") {
      setIsLoading(false);
        var AcceptedOrderData = [];
       const acceptedorders = value.accepted_orders;
        if (acceptedorders) {
          if (acceptedorders.length > 0) {
            AcceptedOrderData = acceptedorders;
          }
        }
     

        const CategData = [
          { Name: CATERGORY_NAME.ACCEPTED_ORDERS, Data: AcceptedOrderData },
        ];

        setCategoryData(CategData);
      } else {
        // error or no record found
setIsLoading(false);

      }
    });
  }, [PartnerID]);
  
  return (
    <div className="page-content">
    <div className="card-box"><div className="container p-0">
        <div className="row search-box ">
          <h4 className="protitle mb-0">Assigned Orders</h4>
          <div className="col-md-12">
          <hr />
          </div>
        </div>
        <div className="row">
        <div className="justify-content-center">
				{ isLoading ? 
				<Loader />
				: null} 
			</div>
          <div className="accordion">
            {CategoryData ? (
              <>
                {CategoryData.map((value, index) => {
                  return (
                    <Fragment key={index}>
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
                                  {value.Data.map((order) => {
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
                                          
                                          Name={order.billing_name}
                                          Village={order.billing_village}
                                          SubDistrict={order.billing_sub_district}
                                          District={order.billing_district}
                                          State={order.billing_state}
                                          PinCode={order.billing_pincode}
                                          RetailerName={order.retailer_name}
                                          RetailerAddress={order.retailer_address}
                                          RetailerDistrict={order.retailer_district}
                                          RetailerCity={order.retailer_city}
                                          RetailerState={order.retailer_state}
                                          RetailerPinCode={order.retailer_pincode}
                                          ProductDetails={order.product_details}
                                          Status={order.order_status}
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
                                      color="#ccc"
                                      style={{ fontSize: "40px" }}
                                    />
                                    <p className="subheading">
                                      No Orders Currently
                                    </p>
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
              </>
            ) : (
              <NoRecordsFound />
            )}
          </div>
        </div>
      </div>
    </div>
      
    </div>
  );
}
