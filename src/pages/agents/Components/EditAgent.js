import React, { useState, useEffect } from "react";
import { ApiUrl } from "../../../api/endPoints";
import { ApiClient } from "../../../api/apiClient";
import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen,faTimesCircle } from "@fortawesome/free-solid-svg-icons";

import { toast } from "react-hot-toast";
export default function UpdateAgent(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const ID = props.AgentID;

  

  function EditAgent(e) {
    e.preventDefault();
    const agent = {
      agent_id: ID,
      agent_name: name,
      email_id: email,
      phone_no: phone,
    };

    ApiClient.PostApi(ApiUrl.UpdateAgent, agent).then((value) => {
      if (value != null) {
        if (value.status === "success") {
          window.location.reload();
          scrollup()
          console.log("Ediitteee")

        } else {
          toast.error("Response not received from server.", {
            position: "top-right",
          });
        }
      }
    });
  }
  useEffect(() => {
    const param = {
      agent_id: ID,
    };
    ApiClient.PostApi(ApiUrl.EditAgent, param).then((value) => {
      setName(value.agent_name);
      setEmail(value.email_id);
      setPhone(value.phone_no);
      scrollup()
    });
  }, [ID]);

  const[BackToTopButton,setBackToTopButton]=useState(false)

  useEffect(()=>{
    window.addEventListener("scroll",() =>{

      if(window.scrollY > 1){
        setBackToTopButton(true)
      }else{
        setBackToTopButton(false)
      }
    })
  },[BackToTopButton])

  const scrollup = () =>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }
  return (
    <>
      <section>
        <div className="container p-4">
          <div className="row">
            <div className="col-md-12 mb-2">
              <h5 className="text-green">EDIT PROFILE</h5>
              <hr />
            </div>
             
            <form onSubmit={EditAgent}>
              <div className="row">
                {/* <div className="col-md-6">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name="name" value={name} onChange={event => setName(event.target.value)} className="form-control" maxLength="25" required />
                                </div>
                            </div> */}
                <div className="col-md-12 mb-3">
                  <div className="form-group">
                    <TextField
                      label="Name"
                      placeholder="Name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    ></TextField>
                  </div>
                </div>
                {/* <div className="col-md-6">
                                <div className="form-group">
                                    <label>EmailID</label>
                                    <input type="email" name="email" value={email} onChange={event => setEmail(event.target.value)} className="form-control" required />
                                </div>
                            </div> */}

                            {/* <div className="col-md-12">
                  <div className="form-group">
                    <TextField
                      label="Email"
                      placeholder="Email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    ></TextField>
                  </div>
                </div>*/}
                
                {/* <div className="col-md-6">
                                <div className="form-group">
                                    <label></label>
                                    <input type="text" name="phone" value={phone} onChange={event => setPhone(event.target.value)} className="form-control" required />
                                </div>
                            </div> */}
                <div className="col-md-12">
               
                  <div className="form-group">
                    <TextField
                      label="Phone"
                      placeholder="Phone"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                    ></TextField>
                  </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                <hr />
                </div>
                </div>
               

                <div className="col-md-12 edit-popup ">
                <button
                //  className="btn btn-success" 
                className="btn btn-reject-outline "
                type="submit" name="Submit" 
                // onClick={}
                >
                <FontAwesomeIcon icon={faTimesCircle} />
                &nbsp; Cancel
              </button>
    

                    <button
                      type="submit"
                      name="Submit"
                      className="btn btn-with-icon"
                      // onClick={EditAgent}
                    >
                      <FontAwesomeIcon icon={faPen} />
                      &nbsp;Update
                    </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
