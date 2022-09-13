import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndianRupee,
  faCalendarAlt,
  faReorder,
  faUserCheck,
  faSortAmountUpAlt,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { ApiClient } from "../../api/apiClient";
import { ApiUrl } from "../../api/endPoints";
import { toast } from "react-hot-toast";

export default function Accordion(props) {
  const Status = props.Status;
  function UpdateOrder(e) {
    e.preventDefault();
    const agent = { order_id: props.OrderNo, order_status: 4 };

    ApiClient.PostApi(ApiUrl.UpdateOrder, agent).then((value) => {
      // console.log("o/p" + JSON.stringify(value));
      if (value != null) {
        if (value.status === "success") {
          // toast.success(value.message, {
          //   position: "top-right",
          // });
          window.location.reload();
        } else {
          toast.error("Response not received from server.", {
            position: "top-right",
          });
        }
      }
    });
  }
  function PickupOrder(e) {
    e.preventDefault();
    const agent = { order_id: props.OrderNo, order_status: 4 };
    ApiClient.PostApi(ApiUrl.UpdateOrder, agent).then((value) => {
      // console.log("o/p" + JSON.stringify(value));
      if (value != null) {
        if (value.status === "success") {
          // toast.success(value.message, {
          //   position: "top-right",
          // });
          window.location.reload();
        } else {
          toast.error("Response not received from server.", {
            position: "top-right",
          });
        }
      }
    });
  }
  function DeliverOrder(e) {
    e.preventDefault();
    const agent = { order_id: props.OrderNo, order_status: 5 };

    ApiClient.PostApi(ApiUrl.UpdateOrder, agent).then((value) => {
      // console.log("o/p" + JSON.stringify(value));
      if (value != null) {
        if (value.status === "success") {
          // toast.success(value.message, {
          //   position: "top-right",
          // });
          window.location.reload();
        } else {
          toast.error("Response not received from server.", {
            position: "top-right",
          });
        }
      }
    });
  }
  function ReturnesOrder(e) {
    e.preventDefault();
    const agent = { order_id: props.OrderNo, order_status: 2 };

    ApiClient.PostApi(ApiUrl.UpdateOrder, agent).then((value) => {
      // console.log("o/p" + JSON.stringify(value));
      if (value != null) {
        if (value.status === "success") {
          // toast.success(value.message, {
          //   position: "top-right",
          // });
          window.location.reload();
        } else {
          toast.error("Response not received from server.", {
            position: "top-right",
          });
        }
      }
    });
  }
  function Button() {
    if (Status == 2) {
      return (
        <>
          {" "}
          <button
            className="btn btn-with-icon mb-3 mr-2"
            onClick={UpdateOrder}
            title="Accept Order"
          >
            Picked Up
          </button>
        </>
      );
    } else if (Status == 3) {
      return (
        <>
          {" "}
          <button
            className="btn btn-with-icon mb-3 mr-2"
            onClick={PickupOrder}
            title="Pickup Order"
          >
            Pickup
          </button>
        </>
      );
    } else if (Status == 4) {
      return (
        <>
          {" "}
          <button
            className="btn btn-with-icon mb-3 mr-2"
            onClick={DeliverOrder}
            title="Deliver Order"
          >
            Delivered
          </button>
          <button
            className="btn btn-with-icon mb-3 mr-2"
            onClick={ReturnesOrder}
            title="Deliver Order"
          >
            Re-Schedule
          </button>
        </>
      );
    } else {
      return <></>;
    }
  }

  return (
    <>
      <div className="bg-grey productcard">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6">
                <p className="text-black">
                  <FontAwesomeIcon icon={faReorder} />
                  &nbsp; Order No :&nbsp;
                  <b className="text-bold">{props.OrderNo}</b>
                </p>
              </div>
              <div className="col-md-6">
                <p className="text-bold">
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  &nbsp; {props.Date}
                </p>
              </div>
            </div>

            <p className="text-bold">
              <FontAwesomeIcon icon={faUserCheck} />
              &nbsp; {props.Name}-{props.CustomerId}
            </p>
            <p className="text-black">
              <FontAwesomeIcon icon={faMapMarkedAlt} />
              &nbsp; {props.Address}, {props.City}, {props.State},{" "}
              {props.PinCode}
            </p>
            <p className="text-black">
              <FontAwesomeIcon icon={faSortAmountUpAlt} />
              &nbsp; Order Amount :&nbsp;
              <b className="text-bold">
                <FontAwesomeIcon icon={faIndianRupee} />
                &nbsp;
                {props.Price}
              </b>
            </p>
          </div>
          <div className="col-md-4 text-right mt-3">
            <Button />
          </div>
        </div>
      </div>
    </>
  );
}
