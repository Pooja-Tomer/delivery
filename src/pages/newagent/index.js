import React, { useState } from "react";
import { ApiUrl } from "../../api/endPoints";
import { ApiClient } from "../../api/apiClient";

import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
export default function NewAgent() {
  const { PartnerID } = useSelector((state) => state.UserCart);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function AddAgent(e) {
    e.preventDefault();
    const agent = {
      partner_id: PartnerID,
      agent_name: name,
      // email_id: email,
      phone_no: phone,
    };

    ApiClient.PostApi(ApiUrl.AddAgent, agent).then((value) => {
      if (value != null) {
        if (value.status === "success") {
          // toast.success(value.message, {
          //   position: "top-right",
          // });
          window.location = "/agents";
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
      <div className="page-content">
      <div className="card-box"> <div className="container p-0">
        <div className="row">
              <div className="col-md-12">
                <h5 className="text-green">Add Agent</h5>
                <hr />
              </div>
            </div>
          <div className="card-box">
            <form>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <TextField
                      label="Name"
                      placeholder="Name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    ></TextField>
                  </div>
                </div>
                {/* <div className="col-md-12">
                    <div className="form-group">
                      <TextField
                        label="Email"
                        placeholder="Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      ></TextField>
                    </div>
                  </div> */}
                <div className="col-md-12 mt-2">
                  <div className="form-group">
                    <TextField
                      label="Phone"
                      placeholder="Phone"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                    ></TextField>
                  </div>
                </div>

                <div className="col-md-12 accordian_btn mt-3">
                  <p className="text-right mb-0">
                    <button
                      type="submit"
                      name="Submit"
                      className="btn btn-with-icon"
                      onClick={AddAgent}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                      &nbsp; &nbsp;Add
                    </button>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div></div>
       
        {/* </div> */}
      </div>
    </>
  );
}
