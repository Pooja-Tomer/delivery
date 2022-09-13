import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
// import GetOTP from "./getOtp";
import Logo from "../../assets/images/logo.png";
import TextField from "@mui/material/TextField";
export default function Login() {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [MobileNumber, setMobileNumber] = useState("");

  return (
    <>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="form-group">
          {/* <GetOTP /> */}
        </div>
      </Modal>
      <div className="page-content">
        <div className="height6"></div>
        <p className="dev">Staging</p>
        <div className="col-md-6 offset-md-3">
          <center>
            <img src={Logo} className="img-fluid logo-login" />
          </center>
        </div>
        <section className="bg-grey">
          <div className="container mt-3">
            <div className="card-box col-md-6 offset-md-3">
              <div className="col-md-8 offset-md-2">
                <h5 className="heading text-green">Login</h5>
                <hr />

                <div className="row">
                  {/* <div className="col-md-12">
                    <div className="form-group">
                      <label>Mobile Number</label>
                      <input
                        type="numeric"
                        name="Mobile Number"
                        value={MobileNumber}
                        onChange={(event) =>
                          setMobileNumber(event.target.value)
                        }
                        className="form-control"
                      />
                    </div>
                  </div> */}
                  <div className="col-md-12">
                    <div className="form-group">
                      <TextField
                        type="numeric"
                        label="Mobile Number"
                        name="Mobile Number"
                        placeholder="Mobile Number"
                        value={MobileNumber}
                        onChange={(event) =>
                          setMobileNumber(event.target.value)
                        }
                        className="form-control"
                      ></TextField>
                    </div>
                  </div>
                </div>
                <hr />
                <p className="text-right">
                  <a onClick={onOpenModal}>
                    <button
                      type="submit"
                      name="submit"
                      className="btn btn-with-icon "
                    >
                      Send OTP
                    </button>
                  </a>
                </p>
              </div>
            </div>
            <div className="height10"></div>
            <div className="height6"></div>
          </div>
        </section>
      </div>
    </>
  );
}
