import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { accordionData } from "./OrdersData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faIndianRupee,
  // faEye,
  // faEyeSlash,
  faCalendarAlt,
  faReorder,
  faUserCheck,
  // faSortAmountUpAlt,
  faMapMarkedAlt,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const Accordion = ({
  SNo,
  title,
  OrderNo,
  Price,
  Date,
  MRF,
  Address,
  Weight,
  Name,
  ProductName,
  ProductImage,
  Des,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isMoreView, setIsMoreView] = useState(false);
  const [isMoreView1, setIsMoreView1] = useState(false);
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className="accordion-heading">{title}</div>
        <div className="accordion-icon">{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div className="accordion-content">
          <table className="table table-striped">
            <tbody>
              <tr className="bg-grey">
                <td colSpan={3}>
                  <p>
                    <b className="text-bold">
                      <FontAwesomeIcon icon={faReorder} />
                      &nbsp; Order No - {OrderNo}
                    </b>
                  </p>
                </td>
                <td colSpan={3}>
                  <p className="text-black text-right">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    &nbsp;{Date}
                  </p>
                </td>
              </tr>
              <tr className="bg-grey">
                <td colSpan={4}>
                  <p>
                    <FontAwesomeIcon icon={faUserCheck} />
                    &nbsp; {Name}
                  </p>
                  <p className="text-black">
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                    &nbsp; {Address}
                  </p>

                  <p>
                    <FontAwesomeIcon icon={faUserCheck} />
                    &nbsp; Ramesh
                  </p>
                  <p className="text-black">
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                    &nbsp; {Address} Model Town
                  </p>
                </td>
              </tr>
              <tr className="bg-grey">
                <td colSpan={3}>
                  {" "}
                  <Link to="#" title="Accept">
                    <button className="btn btn-success">Pickup</button>
                  </Link>
                </td>
                <td align="right" className="br">
                  <a onClick={() => setIsMoreView(!isMoreView)} title="edit">
                    <FontAwesomeIcon icon={faPlus} />
                    &nbsp;
                  </a>
                </td>
              </tr>

              <tr>
                <td colSpan={4}></td>
              </tr>
              {isMoreView && (
                <>
                  <tr>
                    <td width={50}></td>
                    <td colSpan={2}>
                      <table className="table table-striped">
                        <tr className="box-shadow mt-3">
                          <td width={100} className="bl">
                            <img src={ProductImage} className="img-fluid" />
                          </td>
                          <td className="br">
                            <p>
                              <b className="text-bold">{ProductName}</b>
                            </p>
                            <p className="text-black">{Des}</p>
                            <p className="text-black">
                              MRF: &nbsp;
                              <b className="text-bold">
                                <i className="fas fa-rupee-sign"></i> {MRF}
                              </b>
                            </p>
                            <p className="text-black">
                              Price Per Unit: &nbsp;
                              <b className="text-bold">
                                <i className="fas fa-rupee-sign"></i> {Price}
                              </b>
                            </p>
                            <p className="text-black">
                              Weight: &nbsp;
                              <b className="text-bold">{Weight}</b>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={4}></td>
                        </tr>
                        <tr className="box-shadow mt-3">
                          <td width={100} className="bl">
                            <img src={ProductImage} className="img-fluid" alt="" />
                          </td>
                          <td colSpan={4} className="br">
                            <p>
                              <b className="text-bold">{ProductName}</b>
                            </p>
                            <p className="text-black">{Des}</p>
                            <p className="text-black">
                              MRF: &nbsp;
                              <b className="text-bold">
                                <i className="fas fa-rupee-sign"></i> {MRF}
                              </b>
                            </p>
                            <p className="text-black">
                              Price Per Unit: &nbsp;
                              <b className="text-bold">
                                <i className="fas fa-rupee-sign"></i> {Price}
                              </b>
                            </p>
                            <p className="text-black">
                              Weight: &nbsp;
                              <b className="text-bold">{Weight}</b>
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td width={50}></td>
                  </tr>

                  <tr>
                    <td colSpan={4}></td>
                  </tr>
                </>
              )}

              <tr className="bg-grey">
                <td colSpan={3}>
                  {" "}
                  <p>
                    <b className="text-bold">
                      <FontAwesomeIcon icon={faReorder} />
                      &nbsp; Order No - {OrderNo}
                    </b>
                  </p>
                </td>
                <td colSpan={3}>
                  {" "}
                  <p className="text-black text-right">
                    {" "}
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    &nbsp;{Date}
                  </p>
                </td>
              </tr>
              <tr className="bg-grey">
                <td colSpan={4}>
                  <p>
                    <FontAwesomeIcon icon={faUserCheck} />
                    &nbsp; {Name}
                  </p>
                  <p className="text-black">
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                    &nbsp; {Address}
                  </p>

                  <p>
                    <FontAwesomeIcon icon={faUserCheck} />
                    &nbsp; Ramesh
                  </p>
                  <p className="text-black">
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                    &nbsp; {Address} Model Town
                  </p>
                </td>
              </tr>
              <tr className="bg-grey">
                <td colSpan={3}>
                  {" "}
                  <Link to="#" title="Accept">
                    <button className="btn btn-success">Pickup</button>
                  </Link>
                </td>
                <td align="right" className="br">
                  <a onClick={() => setIsMoreView(!isMoreView)} title="edit">
                    <FontAwesomeIcon icon={faPlus} />
                  </a>
                </td>
              </tr>
              <tr>
                <td colSpan={4}></td>
              </tr>
              {isMoreView1 && (
                <>
                  <tr>
                    <td width={50}></td>
                    <td colSpan={2}>
                      <table className="table table-striped">
                        <tr className="box-shadow mt-3">
                          <td width={100} className="bl">
                            <img src={ProductImage} className="img-fluid"  alt=""/>
                          </td>
                          <td className="br">
                            <p>
                              <b className="text-bold">{ProductName}</b>
                            </p>
                            <p className="text-black">{Des}</p>
                            <p className="text-black">
                              MRF: &nbsp;
                              <b className="text-bold">
                                <i className="fas fa-rupee-sign"></i> {MRF}
                              </b>
                            </p>
                            <p className="text-black">
                              Price Per Unit: &nbsp;
                              <b className="text-bold">
                                <i className="fas fa-rupee-sign"></i> {Price}
                              </b>
                            </p>
                            <p className="text-black">
                              Weight: &nbsp;
                              <b className="text-bold">{Weight}</b>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={4}></td>
                        </tr>
                        <tr className="box-shadow mt-3">
                          <td width={100} className="bl">
                            <img src={ProductImage} className="img-fluid" alt=""/>
                          </td>
                          <td colSpan={4} className="br">
                            <p>
                              <b className="text-bold">{ProductName}</b>
                            </p>
                            <p className="text-black">{Des}</p>
                            <p className="text-black">
                              MRF: &nbsp;
                              <b className="text-bold">
                                <i className="fas fa-rupee-sign"></i> {MRF}
                              </b>
                            </p>
                            <p className="text-black">
                              Price Per Unit: &nbsp;
                              <b className="text-bold">
                                <i className="fas fa-rupee-sign"></i> {Price}
                              </b>
                            </p>
                            <p className="text-black">
                              Weight: &nbsp;
                              <b className="text-bold">{Weight}</b>
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td width={50}></td>
                  </tr>

                  <tr>
                    <td colSpan={4}></td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Accordion;
