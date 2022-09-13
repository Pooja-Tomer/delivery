import React, { useState, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndianRupee,
  // faCheck,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-responsive-modal";
import AssignOrder from "../pages/manager/assignOrder";
import ProductCard from "./productcard";
import { ApiClient } from "../api/apiClient";
import { ApiUrl } from "../api/endPoints";

import { toast } from "react-hot-toast";

export default function Accordion(props) {
  const [isMoreView, setIsMoreView] = useState(false);
  const [open, setOpen] = useState(false);
  const Status = props.Status;

  function UpdateOrder(e) {
    e.preventDefault();
    const agent = { order_id: props.OrderNo, order_status: 2 };

    ApiClient.PostApi(ApiUrl.UpdateOrder, agent).then((value) => {
      // console.log("o/p" + JSON.stringify(value));
      if (value != null) {
        if (value.status === "success") {
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
    if (Status == 1) {
      return (
        <>
          {" "}
          <button
            className="btn btn-with-icon mb-3 mr-2"
            onClick={UpdateOrder}
            title="Accept Order"
          >
            Accept
          </button>
        </>
      );
    } else if (Status == 2) {
      return (
        <>
          {" "}
          <button
            className="btn btn-with-icon mb-3 mr-2"
            onClick={() => setOpen(true)}
            title="Assign Order"
          >
            Assign
          </button>
        </>
      );
    } else {
    }
  }

  return (
    <>
      <div className="bg-grey productcard">
        <div className="row">
          <div className="col-md-8">
            <p className="text-black">
              Order No :&nbsp;
              <b className="text-bold">{props.OrderNo}</b>
            </p>

            <p className="text-bold">{props.Date}</p>
            <p className="text-bold">
              {props.Name}-{props.CustomerId}
            </p>
            <p className="text-black">
              {props.Address}, {props.City}, {props.State}, {props.PinCode}
            </p>
            <p className="text-black">
              Order Amount :&nbsp;
              <b className="text-bold">
                <FontAwesomeIcon icon={faIndianRupee} />
                &nbsp;
                {props.Price}
              </b>
            </p>
          </div>
          <div className="col-md-4 text-right mt-3">
            {props.Status == 1 ? (
              <>
                <button
                  className="btn btn-with-icon mb-3 mr-2"
                  onClick={UpdateOrder}
                  title="Accept Order"
                >
                  Accept
                </button>
              </>
            ) : (
              <>
                <button
                  className="btn btn-with-icon mb-3 mr-2"
                  onClick={() => setOpen(true)}
                  title="Assign Order"
                >
                  Assign
                </button>
              </>
            )}
            {/* <Button /> */}
            <button
              className="btn btn-with-icon mb-3 mr-2"
              onClick={() => setIsMoreView(!isMoreView)}
              title="View Products"
            >
              <FontAwesomeIcon icon={isMoreView ? faEyeSlash : faEye} /> View
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-12">
        <div className="row">
          {isMoreView && (
            <>
              {props.ProductDetails?.map((value) => {
                return (
                  <div className="col-md-12">
                    <div className="productcard ">
                      <Fragment key={value.sku_id}>
                        <ProductCard
                          image={value.image}
                          sku_name={value.sku_name}
                          sku_name_kannada={value.sku_name_kannada}
                          mrp={value.MRP}
                          Price={value.price}
                          Weight={value.weight}
                          Quantity={value.quantity}
                          TotalPrice={value.total_price}
                        />
                      </Fragment>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} center>
        {/* <h4> {props.OrderNo}</h4> */}
        <AssignOrder OrderID={props.OrderNo} />
      </Modal>
    </>
  );
}
