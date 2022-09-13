import React, {  useState } from "react";
import { ApiUrl } from "../../../api/endPoints";
import { ApiClient } from "../../../api/apiClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan,
  faUserCheck,
  faCalendarAlt,
  faPhone,
  faEnvelope,
  faPenToSquare,
  faTrashAlt,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import UpdateAgent from "./EditAgent";
import { Modal } from "react-responsive-modal";
import { toast } from "react-hot-toast";

export default function AgentSettings(props) {
  const ID = props.AgentID;
  const Status = props.Status;
  const [openModal, setOpenModal] = useState(false);


  function DeleteAgent(e) {
    e.preventDefault();
    const agent = { agent_id: ID };

    ApiClient.PostApi(ApiUrl.DeleteAgent, agent).then((value) => {
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

  function Deactivate(e) {
    e.preventDefault();
    const agent = {
      agent_id: ID,
      active: 2,
    };

    ApiClient.PostApi(ApiUrl.DeactivateAgent, agent).then((value) => {
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
  function Activate(e) {
    e.preventDefault();
    const agent = {
      agent_id: ID,
      active: 1,
    };

    ApiClient.PostApi(ApiUrl.DeactivateAgent, agent).then((value) => {
      // console.log("o/p" + JSON.stringify(value));
      if (value != null) {
        if (value.status === "success") {
          window.location.reload();
   
          console.log("Active")
        } else {
          toast.error("Response not received from server.", {
            position: "top-right",
          });
        }
      }
    });
  }


  return (
    <>
      <div className="bg-grey productcard">
        <div className="row">
          <div className="col-md-12">

          <p className="grey-color pl-2">
          <FontAwesomeIcon icon={faUserCheck} className="icon-grey " />
          &nbsp;<span className="order_var">Agent Name</span>
          <span className="text-black order_value ">
            : &nbsp;
            <div className="order_inner">
              <span className="pro_value_txt">{props.Name}</span>
            </div>
          </span>
        </p>


        <p className="grey-color pl-2">
          <FontAwesomeIcon icon={faPhone} className="icon-grey " />
          &nbsp;<span className="order_var">Phone.No</span>
          <span className="text-black order_value ">
            : &nbsp;
            <div className="order_inner">
              <span className="pro_value_txt">{props.Phone}</span>
            </div>
          </span>
        </p>

        <p className="grey-color pl-2">
          <FontAwesomeIcon icon={faEnvelope} className="icon-grey " />
          &nbsp;<span className="order_var">Email</span>
          <span className="text-black order_value ">
            : &nbsp;
            <div className="order_inner">
              <span className="pro_value_txt">{props.Email}</span>
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
          </div>

<div className="col-md-12">
<hr />
</div>

          <div className="col-md-12 accordian_btn text-right">
            <button className="btn delete mb-3" onClick={DeleteAgent}>
              <FontAwesomeIcon icon={faTrashAlt} className="mr-2" />&nbsp;
              Delete
            </button>
            
            {Status === 1 ? (
              <>
                <button
                  className="btn btn-with-icon grey-color mb-3 ml-2 "
                  onClick={Deactivate}
                >
                <FontAwesomeIcon icon={faBan} className="mr-2" />&nbsp;
                  Deactivate
                </button>
                <button
                  className="btn btn-with-icon mb-3 ml-2"
                  onClick={() => setOpenModal(true)}
                >
                  <FontAwesomeIcon icon={faPenToSquare} className="mr-2" />&nbsp;
                  Edit
                </button>
              </>
            ) : (
              <>
                <button className="btn btn-with-icon  mb-3 ml-2 " onClick={Activate}>
                 
                  <FontAwesomeIcon icon={faCheck} />&nbsp;
                  Activate  
                </button>
                <button
                  className="btn btn-with-icon mb-3 ml-2"
                  onClick={() => setOpenModal(true)}
                >
                  <FontAwesomeIcon icon={faPenToSquare} className="mr-2" />&nbsp;
                  Edit
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)} center>
        <UpdateAgent AgentID={ID} />
      </Modal>
    </>
  );
}
