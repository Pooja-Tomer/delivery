import React, { useState, useEffect, Fragment } from "react";

import { ApiUrl } from "../../api/endPoints";
import { ApiClient } from "../../api/apiClient";
// import Select from "react-select";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { UpdateAgentID } from "../../state/userCart";
import { toast } from "react-hot-toast";

export default function AssignOrder(props) {
  const { PartnerID } = useSelector((state) => state.UserCart);
  const [Agents, setAgents] = useState([]);
  const [AgentID, setAgentID] = useState("");
  const dispatch = useDispatch();

  function AssignAgent(e) {
    e.preventDefault();
    props.Closemodal();
    dispatch(UpdateAgentID(AgentID));
    const partner = {
      order_id: props.OrderID,
      agent_id: AgentID,
    };

    ApiClient.PostApi(ApiUrl.AssignOrder, partner).then((value) => {
      if (value != null) {
        if (value.status === "success") {
          // toast.success(value.message, {
          //   position: "top-right",
          // });
        } else {
          toast.error("Response not received from server.", {
            position: "top-right",
          });
        }
      }
    });
  }

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
  return (
    <>
      <div className="row">
        <div className="m-4 d-block mx-auto text-left col-md-8 offset-md-2">
          <form onSubmit={AssignAgent}>
            <div className="form-group">
              <label>Select Agent</label>

              <div className="form-group">
                <TextField
                  select
                  label="Areas"
                  placeholder="Please select Areas"
                  value={AgentID}
                  onChange={(event) => {
                    setAgentID(event.target.value);
                  }}
                >
                  {Agents.map((option) => (
                    <MenuItem key={option.agent_id} value={option.agent_id}>
                      {option.agent_name}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div className="form-group">
                <hr />
                <div className="col-md-12 col-sm-12 text-right ">
                  <button
                    className="btn btn-with-icon "
                    type="submit"
                    name="Submit"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
