import React, { useEffect, useState, Fragment } from "react";
import AgentSettings from "./Components/AgentSettings";
import { ApiUrl } from "../../api/endPoints";
import { ApiClient } from "../../api/apiClient";
import moment from "moment";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

export default function Agents() {
  const [agents, setAgents] = useState([]);
  const { PartnerID } = useSelector((state) => state.UserCart);
  // const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const params = {
      partner_id: PartnerID,
    };

    ApiClient.PostApi(ApiUrl.AgentsList, params).then((value) => {
      setAgents(value.agents);
    });
  }, [PartnerID]);
  return (
    <div className="page-content">
    <div className="card-box"><div className="container p-0">
        <div className="row search-box">
          <h4 className="protitle mb-0">Agents</h4>
          <div className="col-md-12">
          <hr />
          </div>
        </div>

        <div className="row ">
          <div className="accordion">
            <div className="accordion-item">
              {/* <div
                className="accordion-title"
                onClick={() => setIsActive(!isActive)}
              >
                <div className="accordion-heading">AGENTS</div>
                <div className="accordion-icon">{isActive ? "+" : "-"}</div>
              </div> */}
              <>
                {/* {isActive && ( */}
                  <>
                    {agents ? (
                      <>
                        {agents.map((value,index,childindex) => {
                          return (
                            <Fragment key={index}>
                              <AgentSettings
                                Name={value.agent_name}
                                Phone={value.phone_no}
                                Email={value.email_id}
                                Status={value.active}
                                AgentID={value.agent_id}
                                Date={moment(value.doc).format("DD MMMM YYYY")}

                                     

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
                        style={{ fontSize: "60px" }}
                      />
                      <p className="subheading no_found">
                        No Orders Found
                      </p>
                      <br />
                    </center>
                      </>
                    )}
                  </>
                {/* )} */}
              </>
            </div>
          </div>
        </div>
      </div></div>
      
    </div>
  );
}
