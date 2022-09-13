import React, { useEffect, useState, Fragment } from "react";
import Accordion from "./Accordion";
import { ApiUrl } from "../../api/endPoints";
import { ApiClient } from "../../api/apiClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { useSelector } from "react-redux";
import NoRecordsFound from "../../components/NoRecordsFound";

const CATERGORY_NAME = {
  NEW_ORDERS: "New Orders",
  ACCEPTED_ORDERS: "Assigned Orders",
  PICKEDUP_ORDERS: "Pickedup Orders",
  INTRANSIT_ORDERS: "Intransit Orders",
  DELIVERED_ORDERS: "Delivered Orders",
};

export default function Managers(props) {
  const { PartnerID } = useSelector((state) => state.UserCart);
  const [currentState, setCurrentState] = useState(CATERGORY_NAME.NEW_ORDERS);

  const [CategoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const params = {
      partner_id: PartnerID,
    };

    ApiClient.PostApi(ApiUrl.OrdersList, params).then((value) => {
      if (value.status === "success") {
        var NewOrderData = [];
        var AcceptedOrderData = [];
        var PickedupOrderData = [];
        var IntransitOrderData = [];
        var DeliveredOrderData = [];

        const neworders = value.new_orders;
        if (neworders) {
          if (neworders.length > 0) {
            NewOrderData = neworders;
          }
        }

        const acceptedorders = value.accepted_orders;
        if (acceptedorders) {
          if (acceptedorders.length > 0) {
            AcceptedOrderData = acceptedorders;
          }
        }
        const pickeduporders = value.pickup_orders;
        if (pickeduporders) {
          if (pickeduporders.length > 0) {
            PickedupOrderData = pickeduporders;
          }
        }
        const intransitorders = value.out_for_delivered_orders;
        if (intransitorders) {
          if (intransitorders.length > 0) {
            IntransitOrderData = intransitorders;
          }
        }
        const deliveredorders = value.delivered_orders;
        if (deliveredorders) {
          if (deliveredorders.length > 0) {
            DeliveredOrderData = deliveredorders;
          }
        }

        const CategData = [
          { Name: CATERGORY_NAME.NEW_ORDERS, Data: NewOrderData },
          { Name: CATERGORY_NAME.ACCEPTED_ORDERS, Data: AcceptedOrderData },
          { Name: CATERGORY_NAME.PICKEDUP_ORDERS, Data: PickedupOrderData },
          { Name: CATERGORY_NAME.INTRANSIT_ORDERS, Data: IntransitOrderData },
          { Name: CATERGORY_NAME.DELIVERED_ORDERS, Data: DeliveredOrderData },
        ];

        setCategoryData(CategData);
      } else {
        // error or no record found
      }
    });
  }, []);
  return (
    <div className="page-content orders_accordian">
      <div className="container">
        <div className="row search-box mb-3">
          <h4 className="protitle mb-0">Orders</h4>
        </div>
        <div className="row mt-2">
          <div className="accordion">
            {CategoryData ? (
              <>
                {CategoryData.map((value, index) => {
                  return (
                    <Fragment key={index}>
                      <div className="accordion-item">
                        <div
                          className="accordion-title"
                          onClick={() => setCurrentState(value.Name)}
                        >
                          <div className="accordion-heading">{value.Name}</div>
                          <div className="accordion-icon">
                            {currentState === value.Name ? "-" : "+"}
                          </div>
                        </div>
                        <>
                          {currentState === value.Name && (
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
                                          City={order.billing_city}
                                          State={order.billing_state}
                                          PinCode={order.billing_pincode}
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
                          )}
                        </>
                      </div>
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
  );
}
