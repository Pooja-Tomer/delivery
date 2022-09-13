/* eslint no-unused-vars : "off" */
import React from "react";
//import ProImage from "../assets/images/no-pic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircle as fasCircle } from "@fortawesome/fontawesome-free-solid";
import {
  faSitemap,
  faIndianRupeeSign as faRupeeSign,
  faEnvelope,
  faBalanceScaleLeft,
  faUserCheck,
  faPhoneAlt,
  faTrash,
  faMapMarkedAlt,
  faCalendarDays,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Router } from "react-router-dom";

export default function UserInfo(props) {
  return (
    <>
      <div className="productcard  cart-item">
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="profile-img text-center">
              <img src={props.Image} className="img-fluid" alt="profile" />
            </p>
          </div>
          <div className="col-md-12">
            <p className="text-black">
              <FontAwesomeIcon icon={faUserCheck} className="icon-grey "/> {props.Name}
            </p>
            {props.Email ? (
              <p className="text-black">
                <FontAwesomeIcon icon={faEnvelope} className="icon-grey "/> &nbsp;{props.Email}
              </p>
            ) : null}
            {props.Date ? (
              <p className="text-black">
                <FontAwesomeIcon icon={faCalendarDays} className="icon-grey "/> &nbsp;
                {props.Date}
              </p>
            ) : null}
          </div>
        </div>
      </div>
      <div className="container text-right">
        <Link to="/agents/ordersassign">
        <button className="btn btn-with-icon mb-3 " onClick={props.UserLogin}>
          <FontAwesomeIcon icon={faArrowAltCircleRight} /> &nbsp;Home
        </button>
        </Link>
      </div>
    </>
  );
}
