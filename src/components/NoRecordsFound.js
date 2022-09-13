import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

export default function NoRecordsFound(props) {
  return (
    <div className="col-md-12 text-center">
      <br />
      <FontAwesomeIcon icon={faExclamationTriangle} className="icon-2" />
      <br />
      <br />
      <p> {props.Title}</p>
      <br />
    </div>
  );
}
