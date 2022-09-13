import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import Cookies from "js-cookie";
// import { Dropdown } from 'react-bootstrap'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faBars,
  // faBell,
  faDolly,
  faUsers,
  faSignOutAlt,
  

  faSignInAlt,
  // faPlus,
  // faSignOut,
  // faFile,
  // faUserCheck,
  faCartPlus,
  faTruckLoading,
  faPeopleCarry,
  faShippingFast,
  faUserPlus,
  // faShoppingCart,
  // faFileAlt,
  faClose,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
export default function Header(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { Role } = useSelector((state) => state.UserCart);
  const [IsLogin, setIsLogin] = useState(false);
  const [LoginUser, setLoginUser] = useState("");
  const [MobUser, setMobUser] = useState("");
  const [RefreshPage, setRefreshPage] = useState(false);


  const {
    isLoading,
    // error,
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
    // getAccessTokenSilently,
  } = useAuth0();
  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin + "/Logout",
    });
    
  useEffect(() => {}, [isLoading, isAuthenticated]);

  // Ashish 16-jun-2022
  useEffect(() => {
    const UserID = Cookies.get("UserID");
    const UserName = Cookies.get("UserName");
    const MobileNumber = Cookies.get("MobileNumber");

    if (UserID) {
      setIsLogin(true);
      setLoginUser(UserName);
      setMobUser(MobileNumber);
    } else {
      setIsLogin(false);
      setLoginUser("");
      setMobUser("");
    }
  }, [RefreshPage]);
  
  return (
    <>
      <div className="top-bar">
     
      <div className="dev-mode">
        <p className="dev">Staging</p>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <>
              <FontAwesomeIcon icon={faTimes} className="fas fa-times" />
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faBars} />
            </>
          )}
        </div>

        

        {/* <div className="notification">
          <FontAwesomeIcon icon={faBell} className="fa-bell" />
        </div> */}
       

        <div className="container-fluid pl-0">
          <nav className="navbar pl-0">
            <div className="navbar-container">
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                {isAuthenticated ? (
                  <>
                    <li className="nav-item nav-item-2">
                      <a  className="nav-link menu_profile">
                        <span className="profileimg">
                          <img
                            src={user.picture}
                            className="img-fluid"
                            alt="profile"
                          />

                          <p>
                            <b>{user.nickname}</b>
                            <br />
                            {user.email}
                          </p>
                        </span>
                      </a>
                    </li>
                    {Role === "partner" ? (
                      <>
                      {/*<li className="nav-item ">
                          <NavLink
                            // to="/manager"
                            to="/neworders"
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                              isActive ? "current nav-link" : "nav-link"
                            }
                            // className="nav-link"
                          >
                          
                          <FontAwesomeIcon
                          icon={faShoppingBasket}
                          className="f-18 mr-2"
                        />
                          
                          <span className="menutext">Orders</span>  
                          </NavLink>
                        </li> */}
                        

                        {/* By Ashish 17/06/2022 */}
                        <li className="nav-item">
                          <NavLink
                            to="/neworders"
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                              isActive ? "current nav-link" : "nav-link"
                            }
                          >
                          <FontAwesomeIcon
                              icon={faCartPlus}
                              className="f-18 mr-2"
                            />
                            
                            <span className="menutext"> New Orders</span>
                          </NavLink>
                        </li>
                        {/* <li className="nav-item">
                          <NavLink
                            to="/assignorders"
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                              isActive ? "current nav-link" : "nav-link"
                            }
                          >
                         <FontAwesomeIcon
                              icon={faUserCheck}
                              className="f-18 mr-2"
                            />
                            <span className="menutext">Assigned Orders</span> 
                          </NavLink>
                        </li> */}
                        

                        <li className="nav-item">
                          <NavLink
                            to="/pickedupOrders"
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                              isActive ? "current nav-link" : "nav-link"
                            }
                          >
                          <FontAwesomeIcon
                              icon={faPeopleCarry}
                              className="f-18 mr-2"
                            />
                            <span className="menutext">Picked up Orders</span>
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            to="/intransitorders"
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                              isActive ? "current nav-link" : "nav-link"
                            }
                          >
                          <FontAwesomeIcon
                              icon={faShippingFast}
                              className="f-18 mr-2"
                            />&nbsp;
                           
                            <span className="menutext">  Intransit Orders</span>
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            to="/deliveredorders"
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                              isActive ? "current nav-link" : "nav-link"
                            }
                          >
                          <FontAwesomeIcon
                              icon={faTruckLoading}
                              className="f-18 mr-2"
                            />&nbsp;
                            
                            <span className="menutext">Delivered Orders</span>
                          </NavLink>
                        </li>
                        
                        <li className="nav-item">
                          <NavLink
                            // to="/agents/orderdelivered"
                            to="/rejectedOrders"
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                              isActive ? "current nav-link" : "nav-link"
                            }
                          >
                          <span className="menu-icon-pos">
                          &nbsp; <FontAwesomeIcon
                              icon={faClose}
                              className="f-18 "
                            />
                            </span> 
                            <span class="menu-text">&nbsp; Rejected Orders</span> 
                           
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                       
                            to="/partner/amountCollection"
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                              isActive ? "current nav-link" : "nav-link"
                            }
                          >
                          <span className="menu-icon-pos">
                          &nbsp; <FontAwesomeIcon
                              icon={faIndianRupeeSign}
                              className="f-18 "
                            />
                            </span> 
                            <span class="menu-text">&nbsp; Amount Collection Report</span> 
                           
                          </NavLink>
                        </li>
                    

                        <li className="nav-item">
                          <NavLink
                            to="/agents"
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                              isActive ? "current nav-link" : "nav-link"
                            }
                          >
                          <FontAwesomeIcon
                              icon={faUsers}
                              className="f-18 mr-2"
                            />
                            
                            <span className="menutext"> Agents</span>
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            to="/newagent"
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                              isActive ? "current nav-link" : "nav-link"
                            }
                          >
                          <FontAwesomeIcon
                              icon={faUserPlus}
                              className="f-18 mr-2"
                            />
                           
                            <span className="menutext">New Agent</span> 
                          </NavLink>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="nav-item">
                          <NavLink
                            to="/agents/ordersassign"
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                              isActive ? "current nav-link" : "nav-link"
                            }
                          >
                          <span className="menu-icon-pos"><FontAwesomeIcon
                              icon={faDolly}
                              className="f-18"
                            /></span>
                            <span class="menu-text">Assigned Orders</span>
                            
                          </NavLink>
                        </li>

                        <li className="nav-item">
                          <NavLink
                            to="/agents/orderpickedup"
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                              isActive ? "current nav-link" : "nav-link"
                            }
                          >
                          <span className="menu-icon-pos"> <FontAwesomeIcon
                              icon={faPeopleCarry}
                              className="f-18 "
                            /></span>
                           
                            <span class="menu-text">PickedUp Orders</span> 
                          </NavLink>
                        </li>

                        <li className="nav-item">
                          <NavLink
                            to="/agents/orderdelivered"
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                              isActive ? "current nav-link" : "nav-link"
                            }
                          >
                          <span className="menu-icon-pos">
                            <FontAwesomeIcon
                              icon={faTruckLoading}
                              className="f-18 "
                            />
                            </span> 
                            <span class="menu-text"> Delivered Orders</span> 
                           
                          </NavLink>
                        </li>

                        <li className="nav-item">
                          <NavLink
                       
                            to="/partner/agentamountCollection"
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                              isActive ? "current nav-link" : "nav-link"
                            }
                          >
                          <span className="menu-icon-pos">
                          &nbsp; <FontAwesomeIcon
                              icon={faIndianRupeeSign}
                              className="f-18 "
                            />
                            </span> 
                            <span class="menu-text"> Amount Collection Report</span> 
                           
                          </NavLink>
                        </li>

                               

                        {/* <li className="nav-item">
                          <NavLink
                            to="/reports"
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                              isActive ? "current nav-link" : "nav-link"
                            }
                          >
                          <span className="menu-icon-pos"><FontAwesomeIcon
                              icon={faFileAlt}
                              className="f-18 "
                            /></span>
                            
                             <span class="menu-text">Reports</span> 
                          </NavLink>
                        </li> */}
                      </>
                    )}
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        onClick={() =>
                          logout({
                            returnTo: window.location.origin + "/Logout",
                          })
                        }
                      >
                      <span className="menu-icon-pos">
                          &nbsp;<FontAwesomeIcon icon={faSignOutAlt} />
                          </span>
                        
                        <span className="menu-text">Logout</span>
                      </a>
                    </li>
                  </>
                ) : (
                  <li className="nav-item">
                   <FontAwesomeIcon icon={faSignInAlt} />
                   
                    <a className="nav-link" onClick={() => loginWithRedirect()}>
                    <span className="menutext"> Login</span>
                    </a>
                  </li>
                )}

                {/* {UserID == 1 ? (
                  <>
                    {" "}
                    <li className="nav-item">
                      <span className="procircle">M</span>
                      <NavLink
                        to="/"
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                          isActive ? "current nav-link" : "nav-link"
                        }
                      >
                        <b>Manager</b>
                        <br />
                        8394038521
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/manager"
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                          isActive ? "current nav-link" : "nav-link"
                        }
                      >
                        <FontAwesomeIcon
                          icon={faShoppingBasket}
                          className="f-18 mr-2"
                        />
                        Orders
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/agents"
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                          isActive ? "current nav-link" : "nav-link"
                        }
                      >
                        <FontAwesomeIcon icon={faUsers} className="f-18 mr-2" />
                        Agents
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/newagent"
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                          isActive ? "current nav-link" : "nav-link"
                        }
                      >
                        <FontAwesomeIcon icon={faPlus} className="f-18 mr-2" />
                        New Agent
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/"
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                          isActive ? "current nav-link" : "nav-link"
                        }
                      >
                        <FontAwesomeIcon
                          icon={faSignOut}
                          className="f-18 "
                        />
                        Logout
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <span className="procircle">A</span>
                      <NavLink
                        to="/partner"
                        className="nav-link"
                        onClick={closeMobileMenu}
                      >
                        <b>Agent</b>
                        <br />
                        8394038521
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/partner"
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                          isActive ? "current nav-link" : "nav-link"
                        }
                      >
                        <FontAwesomeIcon icon={faDolly} className="f-18 mr-2" />
                        Orders
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        to="/reports"
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                          isActive ? "current nav-link" : "nav-link"
                        }
                      >
                        <FontAwesomeIcon icon={faFile} className="f-18 mr-2" />{" "}
                        Reports
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/"
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                          isActive ? "current nav-link" : "nav-link"
                        }
                      >
                        <FontAwesomeIcon
                          icon={faSignOut}
                          className="f-18 "
                        />
                        Logout
                      </NavLink>
                    </li>
                  </>
                )} */}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
