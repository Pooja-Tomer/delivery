import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndianRupee,
  faCalendarAlt,
  faReorder,
  faUserCheck,
  faSortAmountUpAlt,
  faMapMarkedAlt,
  faTimesCircle,
  faCheck,
  faListOl,
  faHistory,
  faAddressBook,
  faUser,
  faAddressCard,
  faPhone,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { ApiClient } from "../../api/apiClient";
import { ApiUrl } from "../../api/endPoints";
import { toast } from "react-hot-toast";
import MenuItem from "@mui/material/MenuItem";
import { InputBase } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";
import FormControl from "@mui/material/FormControl";

export default function Accordion(props) {
  const Status = props.Status;
  const [modalOpen, setModalOpen] = useState(false);
  // const[AgentID,setAgentID]=useState()
  // const { PartnerID } = useSelector((state) => state.UserCart);
  // const [Agents, setAgents] = useState([]);

  // useEffect(() => {
  //   const params = {
  //     partner_id: PartnerID,
  //   };

  //   ApiClient.PostApi(ApiUrl.AllAgents, params).then((value) => {
  //     if (value != null) {
  //       if (value.status === "success") {
  //         setAgents(value.agents);
  //       } else {
  //         toast.error("Response not received from server.", {
  //           position: "top-right",
  //         });
  //       }
  //     }
  //   });
  // }, [PartnerID]);

  function Modal2({ setOpenModal }) {
    {
      /* Delete below code on payment mode api */
    }

    const [paymentMode, setPaymentMode] = React.useState("");

    const handleChange = (event) => {
      setPaymentMode(event.target.value);
    };

    // const[AgentID,setAgentID]=useState()

    return (
      <div className="modalBackground">
        <div className="modalContainer">
        <form onSubmit={DeliverOrder}>
          <div className="modalBody">
              <div className="form-group">
                <p className="text-green">Select Mode of Payment</p>
                {/* <br /> */}

                {/* <Select className="drop_input textarea_height mb-2"
                value={AgentID}
                defaultValue="none"
                label="Select Agents"
                input={<InputBase />}
                onChange={(event) => {
                setAgentID(event.target.value);
                }}
                required
                 >
                      {Agents.map((option) => (
                      <MenuItem key={option.agent_id} value={option.agent_id}>
                        {option.agent_name}
                      </MenuItem>
                ))}
                </Select> */}

                {/* Delete below code on payment mode api */}
                <FormControl required>
                  <InputLabel>Payment Mode</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={paymentMode}
                    label="Payment Mode"
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value={10}>Cash</MenuItem>
                    <MenuItem value={20}>E-wallet</MenuItem>
                    <MenuItem value={30}>Card</MenuItem>
                  </Select>
                  <input
                    type="number"
                    className="form-control mt-2"
                    placeholder="Amount"
                    required
                  />
                </FormControl>
              </div>
          </div>

          <div className="modalFooter d-flex justify-content-end">
            <button
              type="button"
              className="btn  btn-reject-outline"
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              <FontAwesomeIcon icon={faTimesCircle} /> &nbsp;Cancel
            </button>
            <button
              // type="button"
              type="submit"
              className="btn btn-with-icon"
              // onClick={DeliverOrder}
            >
              <FontAwesomeIcon icon={faCheck} /> &nbsp;Continue
            </button>
          </div>
          </form>
        </div>
      </div>
    );
  }

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
          // window.location.reload();
          props.OnRefreshList();
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
          props.OnRefreshList();

          // window.location.reload();
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
    const agent = {
      order_id: props.OrderNo,
      order_status: 5,
      amount_receive: 300,
      payment_method: "cash",
    };

    ApiClient.PostApi(ApiUrl.UpdateOrder, agent).then((value) => {
      // console.log("o/p" + JSON.stringify(value));
      if (value != null) {
        if (value.status === "success") {
          toast.success("Ordered Delivered", {
            position: "top-right",
          });
          setModalOpen(false);
          props.OnRefreshList();
          // window.location.reload();
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
          props.OnRefreshList();

          // window.location.reload();
        } else {
          toast.error("Response not received from server.", {
            position: "top-right",
          });
        }
      }
    });
  }
  function Button() {
    if (Status === 2) {
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
    } else if (Status === 3) {
      return (
        <>
        <div className="row">
        <div className="col-md-12 product-btns">
          <button
            className="btn btn-with-icon mb-3 mr-2"
            onClick={PickupOrder}
            title="Pickup Order"
          >
            Pickup
          </button>
          </div>
          </div>
        </>
      );
    } else if (Status === 4) {
      return (
        <>
      <div className="row">
      <div className="col-md-12 product-btns"><button
            className="btn btn-with-icon mb-3 mr-2"
            onClick={() => {
              setModalOpen(true);
            }}
            title="Deliver Order"
          >
          <FontAwesomeIcon icon={faCheck} /> Delivered
          </button>

          {modalOpen && <Modal2 setOpenModal={setModalOpen} />}
          <button
            className="btn btn-with-icon mb-3 mr-2"
            onClick={ReturnesOrder}
            title="Deliver Order"
          >
          <FontAwesomeIcon icon={faHistory} /> Re-Schedule
          </button></div>
      </div>
          
        </>
      );
    }else if (Status === 5) {
      return (
        <>
      <div className="row">
      <div className="col-md-12 product-btns"><button
            className="btn btn-with-icon mb-3 mr-2"
            title="Deliver Order"
          >
          <FontAwesomeIcon icon={faEye} /> View
          </button>
          </div>
      </div>
          
        </>
      );
    }
    else {
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

              <p className="grey-color pl-2">
                <FontAwesomeIcon icon={faListOl} />
                &nbsp;<span className="order_var">Order No</span>
                <span className="text-black order_value ">
                  : &nbsp;
                    <div className="order_inner">
                    <span className="pro_value_txt">{props.OrderNo}</span>
                  </div>	
                  </span>
				      </p>

              <p className="grey-color pl-2">
              <FontAwesomeIcon icon={faSortAmountUpAlt} />
              &nbsp;<span className="order_var">Order Amount</span>
              <span className="text-black order_value ">
                : &nbsp;
                <FontAwesomeIcon icon={faIndianRupee} />
                  <div className="order_inner">
                  <span className="pro_value_txt">{props.Price}</span>
                </div>	
                </span>
            </p>

            <p className="grey-color pl-2">
              <FontAwesomeIcon icon={faUser} />
              &nbsp;<span className="order_var">Farmer Name</span>
              <span className="text-black order_value ">
                : &nbsp;
                  <div className="order_inner">
                  <span className="pro_value_txt">{props.FarmerName}</span>
                </div>	
                </span>
            </p>

            <p className="grey-color pl-2">
              <FontAwesomeIcon icon={faAddressCard} />
              &nbsp;<span className="order_var">Farmer Address</span>
              
            </p> 
              <span className="text-black  ">
                  <div className="add-lh">
                  <span className="pro_value_txt">{props.Address}, {props.City}, {props.State}, {props.PinCode}</span>
                </div>	
                </span>
            <p className="pt-2">
<hr />
            
            </p>

              <p className="grey-color pl-2">
                <FontAwesomeIcon icon={faUser} />
                &nbsp;<span className="order_var">Retailer Name</span>
                <span className="text-black order_value ">
                  : &nbsp;
                    <div className="order_inner">
                    <span className="pro_value_txt">{props.RetailerName}</span>
                  </div>	
                  </span>
              </p>

              <p className="grey-color pl-2">
                <FontAwesomeIcon icon={faCalendarAlt} />
                &nbsp;<span className="order_var">Retailer Address</span>
              </p>
              <span className="text-black ">
              
                <div className="add-lh">
                <span className="pro_value_txt">{props.RetailerAddress}, {props.RetailerDistrict}, {props.RetailerCity}, {props.RetailerState}, {props.RetailerPinCode}</span>
              </div>	
              </span>
              </div>
              
            </div>

            {/* <p className="grey-color pl-2">
              <FontAwesomeIcon icon={faUserCheck} />
              &nbsp;<span className="order_var">Agent Name</span>
              <span className="text-black order_value ">
                : &nbsp;
                  <div className="order_inner">
                  <span className="pro_value_txt">{props.AgentName}</span>
                </div>	
                </span>
            </p>

           

          <p className="grey-color pl-2">
            <FontAwesomeIcon icon={faPhone} />
            &nbsp;<span className="order_var">Agent PhoneNo</span>
            <br />
            <span className="mt-2 text-black"> </span>
          </p> */}




          </div>
          <div className="col-md-4 text-right mt-3">
          <hr />
            <Button />
          </div>
        </div>
      </div>
    </>
  );
}
