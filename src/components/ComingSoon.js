import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHourglassHalf,
  faAnglesLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function ComingSoon(props) {
  return (
    <>
    <div className="page-content">

      <div className="container">
        <div className="card-box mt-3">
          <div className="row">
            <div className="col-md-8 col-xs-8">
              <h5>{props.Title ? props.Title : "Coming Soon"}</h5>
            </div>
            <div className="col-md-4 col-xs-4 text-right">
              <Link to={props.Link ? props.Link : "/Home"}>
                <button className="btn btn-with-icon ">
                  <FontAwesomeIcon icon={faAnglesLeft} /> &nbsp;Back
                  {/* Add Address */}
                </button>
              </Link>
            </div>
          </div>

          <hr />
          <div className="text-center">
            <br />
            <br />
            <FontAwesomeIcon
              icon={faHourglassHalf}
              className="icon-2 coming-icon"
            /> <br /> 
            <h5>Coming Soon </h5> <br />
            <br />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
