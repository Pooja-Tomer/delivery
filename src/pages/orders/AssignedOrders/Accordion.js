import React, { useState, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndianRupee,
  faEye,
  faEyeSlash,
  faReorder,
  faCalendarAlt,
  faUserCheck,
  faMapMarkedAlt,
  faSortAmountUpAlt,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-responsive-modal";
import AssignOrder from "./assignOrder";
import ProductCard from "../../../components/productcard";
import { ApiClient } from "../../../api/apiClient";
import { ApiUrl } from "../../../api/endPoints";
import { toast } from "react-hot-toast";

export default function Accordion(props) {
  const [isMoreView, setIsMoreView] = useState(false);
  const [open, setOpen] = useState(false);
  const Status = props.Status;
  const onCloseModal = () => setOpen(false);
  
  function UpdateOrder(e) {
    e.preventDefault();
    const agent = { order_id: props.OrderNo, order_status: 2 };

    ApiClient.PostApi(ApiUrl.UpdateOrder, agent).then((value) => {
      // console.log("o/p" + JSON.stringify(value));
      if (value != null) {
        if (value.status === "success") {
          setOpen(true);
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
            title="Assign Order"
          >
            Assign
          </button>
          <button
            className="btn btn-with-icon mb-3 mr-2"
            onClick={() => setIsMoreView(!isMoreView)}
            title="View Products"
          >
            <FontAwesomeIcon icon={isMoreView ? faEyeSlash : faEye} /> View
          </button>
        </>
      );
      // } else if (Status == 2) {
      //   return (
      //     <>
      //       {" "}
      //       <button
      //         className="btn btn-with-icon mb-3 mr-2"
      //         onClick={() => setOpen(true)}
      //         title="Assign Order"
      //       >
      //         Select Agent
      //       </button>
      //       <button
      //         className="btn btn-with-icon mb-3 mr-2"
      //         onClick={() => setIsMoreView(!isMoreView)}
      //         title="View Products"
      //       >
      //         <FontAwesomeIcon icon={isMoreView ? faEyeSlash : faEye} /> View
      //       </button>
      //     </>
      //   );
    } else {
      return (
        <>
          {" "}
          <button
            className="btn btn-with-icon mb-3 mr-2"
            onClick={() => setIsMoreView(!isMoreView)}
            title="View Products"
          >
            <FontAwesomeIcon icon={isMoreView ? faEyeSlash : faEye} /> View
          </button>
        </>
      );
    }
  }

  return (
    <>
      <div className="bg-grey productcard">
        <div className="row">
          <div className="col-md-12">
          

            <p className="grey-color pl-2">
            <FontAwesomeIcon icon={faReorder} className="icon-grey " />
            &nbsp;<span className="order_var">Order No</span>
            <span className="text-black order_value ">
              : &nbsp;
              <div className="order_inner">
                <span className="pro_value_txt">{props.OrderNo}</span>
              </div>
            </span>
          </p>
          <p className="grey-color pl-2">
            <FontAwesomeIcon icon={faCalendarAlt} className="icon-grey " />
            &nbsp;<span className="order_var">Date</span>
            <span className="text-black order_value ">
              : &nbsp;
              <div className="order_inner">
                <span className="pro_value_txt">{props.Date}</span>
              </div>
            </span>
          </p>

          {/* <p className="grey-color pl-2">
            <FontAwesomeIcon icon={faUserCheck} className="icon-grey " />
            &nbsp;<span className="order_var">Customer Id</span>
            <span className="text-black order_value ">
              : &nbsp;
              <div className="order_inner">
                <span className="pro_value_txt"> {props.Name}-{props.CustomerId}</span>
              </div>
            </span>
          </p> */}

          
          <p className="grey-color pl-2">
            <FontAwesomeIcon icon={faSortAmountUpAlt} className="icon-grey " />
            &nbsp;<span className="order_var">Order Amount</span>
            <span className="text-black order_value ">
              : &nbsp;
              <FontAwesomeIcon icon={faIndianRupeeSign} />
              <div className="order_inner">
                <span className="pro_value_txt">{props.Price}</span>
              </div>
            </span>
          </p>
          <p className="grey-color pl-2">
          <FontAwesomeIcon icon={faSortAmountUpAlt} className="icon-grey " />
          &nbsp;<span className="order_var">Farmer Name</span>
          <span className="text-black order_value ">
            : &nbsp;
            <div className="order_inner">
              <span className="pro_value_txt">{props.Name}</span>
            </div>
          </span>
        </p>
            <p className="grey-color pl-2">
              <FontAwesomeIcon icon={faMapMarkedAlt} className="icon-grey " />
              &nbsp;<span className="order_var">Farmer address</span>
              <span className="text-black  ">
                <div className="">
                  <span className="">
                  {props.Address}, {props.Village}, {props.SubDistrict}, {props.District}, {props.State}, {props.PinCode}
                  </span>
                </div>
              </span>
            </p>
            <hr />

            <p className="grey-color pl-2">
          <FontAwesomeIcon icon={faSortAmountUpAlt} className="icon-grey " />
          &nbsp;<span className="order_var">Retailer Name</span>
          <span className="text-black order_value ">
            : &nbsp;
            <div className="order_inner">
              <span className="pro_value_txt">{props.RetailerName}</span>
            </div>
          </span>
        </p>
            <p className="grey-color pl-2">
              <FontAwesomeIcon icon={faMapMarkedAlt} className="icon-grey " />
              &nbsp;<span className="order_var">Retailer address</span>
              <span className="text-black  ">
                <div className="mb-3">
                  <span className="">
                  {props.RetailerAddress}, {props.RetailerDistrict}, {props.RetailerCity}, {props.RetailerState}, {props.RetailerPinCode}
                  </span>
                </div>
              </span>
            </p>
          </div>
          <div className="col-md-12 ">
          <hr className="m-0"/>
          </div>

          <div className="col-md-12 accordian_btn text-right mt-3">
            {/* {props.Status == 1 ? (
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
            )} */}
            <Button />
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
                    <div className="productcard grey-box view_product_detail">
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
      <Modal open={open} onClose={onCloseModal} center>
        {/* <h4> {props.OrderNo}</h4> */}
        <AssignOrder OrderID={props.OrderNo} Closemodal={onCloseModal} />
      </Modal>
    </>
  );
}
