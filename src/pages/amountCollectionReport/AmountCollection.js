import React ,{useRef,useState} from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faHourglassHalf,
  faAnglesLeft,
  faFile, 
  faFileExport,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { CSVLink } from "react-csv";
import { ApiUrl } from "../../api/endPoints";
import { ApiClient } from "../../api/apiClient";
import moment from "moment";
import { useSelector } from "react-redux";
import NoRecordsFound from "../../components/NoRecordsFound";
import Loader from "react-animated-loader";



export default function AmountCollection(props) {
  const { PartnerID } = useSelector((state) => state.UserCart);



  const headers = [
    { label: "Order Status", key: "order_status" },
    { label: "Order No.", key: "order_id" },
    { label: "Payment Method.", key: "payment_method" },
    { label: "Amount Receive", key: "amount_receive" },
    { label: "Delivered Date", key: "delivered_date" },
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
    const partner = {
      partner_id: PartnerID,
      "role":"partner"
    };
    console.log("Clickkdedf");

    ApiClient.PostApi(ApiUrl.AmountCollections, partner).then((value) => {
      if (value !== null) {
        if (value.status === "success") {
          // console.log("value", value);
          console.log("value.amount_collections",value.amount_collections)
          setCsvData(value.amount_collections);

          // console.log("csvdata",csvData)
          console.log("csvdata_sku_code", csvData.sku_name);

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
    <>
    <div className="page-content">
      <div className="container">
        <div className="card-box mt-3">
          <div className="row">
            {/* <div className="col-md-8 col-xs-8"> */}
            <div className="col-md-8 col-xs-12">
              <h5>{props.Title ? props.Title : "Amount collection Report"}</h5>
            </div>
            
            {/* <div className="col-md-4 col-xs-4 text-right">
              <Link to={props.Link ? props.Link : "/Home"}>
                <button className="btn btn-with-icon ">
                  <FontAwesomeIcon icon={faAnglesLeft} /> &nbsp;Back
              
                </button>
              </Link>
            </div> */}
          </div>

          <hr />
          <div className="text-center">
            <br />
            <br />
            <FontAwesomeIcon
              icon={faFileExport}
              className="icon-2 coming-icon"
            /> <br /> 
               <div className="text-right">
              <CSVLink
                headers={headers}
                data={csvData}
                filename={"AmountCollectionReportPartnerCargillDelivery.csv"}
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
            <br />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
