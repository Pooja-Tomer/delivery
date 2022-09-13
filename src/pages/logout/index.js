import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import logoImage from "../../../src/assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useDispatch } from "react-redux";
import {
  // faExclamationTriangle,
  faSignInAlt,
  // faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import UserInfo from "../../components/UserInfo";
import moment from "moment";
import { useDispatch } from "react-redux";
import {
  updatePartnerID,
  UpdateAgentID,
  UpdateRole,
} from "../../state/userCart";
export default function Logout() {
  const {
    isLoading,
    // error,
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
    // returnTo,
    // getAccessTokenSilently,
  } = useAuth0();
  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin + "/Logout",
    });
  useEffect(() => {}, [isLoading, isAuthenticated]);

  // const dispatch = useDispatch();
  // const history = useNavigate();


  useEffect(() => {

    dispatch(updatePartnerID(0));
    dispatch(UpdateRole(0));
    dispatch(UpdateAgentID(0));

  }, []);


  const dispatch = useDispatch();

  return (
    <div className="login_sec">
    <div className="page-content">
      <div className="container">
        <div className="card-box">
          <div className="col-md-12">
            {isAuthenticated ? (
              <UserInfo
                Name={user.nickname}
                Email={user.name}
                Id={user.sub}
                Date={moment(user.updated_at).format("DD MMMM YYYY")}
                Image={user.picture}
              />
            ) : (

              
              <p className="text-center">
                {/* <button
                    className="btn btn-with-icon mb-3 broder-grey "
                    onClick={() => handleClearCart()}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} /> &nbsp;Clear Cart
                  </button>
                  &nbsp;&nbsp; */}
            <p className="dev">Staging</p>

                  <img src={logoImage} className="img-fluid" />
                  <p className="subtitle gray-text text-center f-17">You Have Been Logged Out</p>
                 
                  
                
                  <center>
                  <button
                  className="btn btn-with-icon mb-3 broder-green  "
                  title="Login"
                  onClick={() => loginWithRedirect()}
                >
                  <FontAwesomeIcon icon={faSignInAlt} /> &nbsp; Login
                </button>
                  </center>
                
              </p>
              
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
