import React, { useState, Fragment, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import { InputBase } from "@mui/material";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { UpdateAgentID } from "../../../state/userCart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faReorder,
  faCalendarAlt,
  faMapMarkedAlt,
  faSortAmountUpAlt,
  faIndianRupeeSign,
  faCheck,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
// import { Modal } from "react-responsive-modal";
// import AssignOrder from "./assignOrder";
import ProductCard from "../../../components/productcard";
import { ApiClient } from "../../../api/apiClient";
import { ApiUrl } from "../../../api/endPoints";
import { toast } from "react-hot-toast";

export default function   Accordion(props) {
  const [isMoreView, setIsMoreView] = useState(false);
  const [open, setOpen] = useState(false);
  const { PartnerID } = useSelector((state) => state.UserCart);
  const [Agents, setAgents] = useState([]);
  const [AgentID, setAgentID] = useState("");
  const dispatch = useDispatch();
  const Status = props.Status;

  // const onCloseModal = () => setOpen(false);

  function UpdateOrder(e) {
    e.preventDefault();
    // props.Closemodal();

    const agent = {
      order_id: props.OrderNo,
      order_status: 3,
      agent_id: AgentID,
    };

    ApiClient.PostApi(ApiUrl.UpdateOrder, agent).then((value) => {
      // console.log("o/p" + JSON.stringify(value));
      if (value != null) {
        if (value.status === "success") {
          props.OnRefreshList();
          dispatch(UpdateAgentID(AgentID));

          // toast.success(value.message, {
          //   position: "top-right",
          // });
          setOpen(true);
        } else {
          toast.error("Response not received from server.", {
            position: "top-right",
          });
        }
      }
    });
  }
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    const params = {
      partner_id: PartnerID,
    };

    ApiClient.PostApi(ApiUrl.AllAgents, params).then((value) => {
      if (value != null) {
        if (value.status === "success") {
          setAgents(value.agents);
        } else {
          toast.error("Response not received from server.", {
            position: "top-right",
          });
        }
      }
    });
  }, [PartnerID]);

  function Modal2({ closeModal2 }) {
    // Assign orders
    //   function AssignAgent(e) {
    //   e.preventDefault();
    //   props.Closemodal();
    //   dispatch(UpdateAgentID(AgentID));
    //   const partner = {
    //     order_id: props.OrderID,
    //     agent_id: AgentID,
    //   };

    //   ApiClient.PostApi(ApiUrl.AssignOrder, partner).then((value) => {
    //     if (value != null) {
    //       if (value.status === "success") {
    //         // toast.success(value.message, {
    //         //   position: "top-right",
    //         // });
    //       } else {
    //         toast.error("Response not received from server.", {
    //           position: "top-right",
    //         });
    //       }
    //     }
    //   });
    // }

    return (
      <div className="modalBackground">
        <div className="modalContainer">
        <form onSubmit={UpdateOrder}>

          <div className="modalBody">
              <div className="form-group">
                {/* By Ashish 23/06/2022 */}

                <p className="text-green">Assigning this Order to Agent</p>
                {/* <br /> */}

                <Select
                  className="drop_input textarea_height mb-2"
                  value={AgentID}
                  defaultValue="none"
                  label="Select Agents"
                  required
                  input={<InputBase />}
                  onChange={(event) => {
                    setAgentID(event.target.value);
                  }}
                >
                  {Agents.map((option) => (
                    <MenuItem key={option.agent_id} value={option.agent_id}>
                      {option.agent_name}
                    </MenuItem>
                  ))}
                </Select>
                {/* tried select */}
              </div>
          </div>

          <div className="modalFooter d-flex justify-content-end">
            <button
              type="button"
              className="btn  btn-reject-outline"
              onClick={() => {
                closeModal2(false);
              }}
            >
              <FontAwesomeIcon icon={faTimesCircle} /> &nbsp;Cancel
            </button>
            <button
              // type="button"
              type="submit"
              className="btn btn-with-icon"
              // onClick={UpdateOrder}
            >
              <FontAwesomeIcon icon={faCheck} /> &nbsp;Continue
            </button>
          </div>
          </form>
        </div>
      </div>
    );
  }

  function Button() {
    if (Status === 1) {
      return (
        <>

        <button
            className="btn btn-reject-outline mb-3 mr-2"
            onClick={()=>{
                      toast.success("Feature Coming Soon", {
                                    position: "top-right",
                                  });
                    }}
            title="Cancel Products"
            type="button"
          >
            <FontAwesomeIcon icon={faTimesCircle} /> Cancel
          </button>
          {" "}
          <button
            className="btn btn-with-icon mb-3 mr-2"
            onClick={() => {
              setOpenModal(true);
            }}
            title="Assign Order"
          >
            {/*  */}
            Assign
          </button>
          {openModal && <Modal2 closeModal2={setOpenModal} />}
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
                  <span className="pro_value_txt">
                    {" "}
                    {props.Name}-{props.CustomerId}
                  </span>
                </div>
              </span>
            </p> */}

            <p className="grey-color pl-2">
              <FontAwesomeIcon
                icon={faSortAmountUpAlt}
                className="icon-grey "
              />
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
              <FontAwesomeIcon
                icon={faSortAmountUpAlt}
                className="icon-grey "
              />
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
                    {props.Address}, {props.Village}, {props.SubDistrict},{" "}
                    {props.District}, {props.State}, {props.PinCode}
                  </span>
                </div>
              </span>
            </p>
            <hr />
            <p className="grey-color pl-2">
              <FontAwesomeIcon
                icon={faSortAmountUpAlt}
                className="icon-grey "
              />
              &nbsp;<span className="order_var">Retailer Name</span>
              <span className="text-black order_value ">
                : &nbsp;
                <div className="order_inner">
                  <span className="pro_value_txt">{props.RetailerName}</span>
                </div>
              </span>
            </p>
            <p className="grey-color  pl-2">
              <FontAwesomeIcon icon={faMapMarkedAlt} className="icon-grey " />
              &nbsp;<span className="order_var">Retailer address</span>
              <span className="text-black  ">
                <div className="mb-3">
                  <span className="">
                    {props.RetailerAddress}, {props.RetailerDistrict},{" "}
                    {props.RetailerCity}, {props.RetailerState},{" "}
                    {props.RetailerPinCode}
                  </span>
                </div>
              </span>
            </p>
          </div>

          <div className="col-md-12 ">
            <hr className="m-0" />
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
                    <div className="productcard gray-bg">
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
      {/*       
      <Modal open={open} onClose={onCloseModal} center>
      
        <AssignOrder OrderID={props.OrderNo} Closemodal={onCloseModal} />
      </Modal> */}
    </>
  );
}
