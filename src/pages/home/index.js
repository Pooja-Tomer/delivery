import React, {  useEffect } from "react";
// import profileimg from "../../assets/images/user.png";

// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import { Link } from "react-router-dom";
import logoImage from "../../../src/assets/images/logo.png";

import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {
  updatePartnerID,
  UpdateAgentID,
  UpdateRole,
} from "../../state/userCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-hot-toast";
import {
  // faExclamationTriangle,
  faSignInAlt,
 
} from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";
import UserInfo from "../../components/UserInfo";
import { ApiUrl } from "../../api/endPoints";
import { ApiClient } from "../../api/apiClient";
import moment from "moment";

export default function Home() {
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
      returnTo: window.location.origin,
    });
  useEffect(() => {
  }, [isLoading, isAuthenticated]);
  const dispatch = useDispatch();
  const history = useNavigate();

  // const handleUserInfo = (ID, Role) => {
  //   dispatch(updatePartnerID(ID, Role));
  //   if (Role == "Manager") {
  //     history("/manager");
  //   } else {
  //     history("/agents/ordersassign");
  //   }
  // };

// //clear PartnerID id to 0 - Ashish
// useEffect(() => {
//   dispatch(updatePartnerID(0));
//   dispatch(UpdateAgentID(0));

// }, []);

useEffect(()=>{
  if(isAuthenticated){
    const params = {
      auth_code: user.sub,
      delivery_name: user.name,
    };
  console.log("auth_code"+user.sub);
  console.log("delivery_name"+user.name);
    ApiClient.PostApi(ApiUrl.DeliveryLoginapi, params).then((value) => {
      if (value.status === "success") {
        if (value.partner_id) {
          dispatch(updatePartnerID(value.partner_id));
          dispatch(UpdateRole(value.role));
          history("/neworders");
        }
         else {
          dispatch(UpdateAgentID(value.agent_id));
          dispatch(UpdateRole(value.role));
          history("/agents/ordersassign");

          // history("/partner");
        }
  
        // toast.success(value.message, {
        //   position: "top-right",
        // });
      } else {
        toast.error("Response not received from server.", {
          position: "top-right",
        });
      }
    });
  }
})


  // const handleUserID = (AuthID, UserEmail) => {
  //   const params = {
  //     auth_code: AuthID,
  //     delivery_name: UserEmail,
  //   };

  //   ApiClient.PostApi(ApiUrl.DeliveryLoginapi, params).then((value) => {
  //     if (value.status === "success") {
  //       if (value.partner_id) {
  //         dispatch(updatePartnerID(value.partner_id));
  //         dispatch(UpdateRole(value.role));
  //         history("/assignorders");
  //       } else {
  //         dispatch(UpdateAgentID(value.agent_id));
  //         dispatch(UpdateRole(value.role));
  //         history("/partner");
  //       }

  //       // toast.success(value.message, {
  //       //   position: "top-right",
  //       // });
  //     } else {
  //       toast.error("Response not received from server.", {
  //         position: "top-right",
  //       });
  //     }
  //   });
  // };

  

 



  return (
    <div className="login_sec">
    <div className="page-content">
      <section className="bg-grey mt-2">
        <div className="container">
          <div className="card-box">
            <div className="col-md-12 pl-0">
              <h5 className="text-green">My Profile</h5>
            </div>
            <hr />
            <div className="height6"></div>
            <div className="col-md-12">
              {isAuthenticated ? (
              
                  <UserInfo
                    Name={user.nickname}
                    Email={user.name}
                    Id={user.sub}
                    Date={moment(user.updated_at).format("DD MMMM YYYY")}
                    Image={user.picture}
                    // UserLogin={() => handleUserID(user.sub, user.name)}
                  />

               
              ) : (
                <p className="text-center mb-0">
                <div className="row">
                <div className="col-md-12">
                <img src={logoImage} className="img-fluid" alt=""/>
                <br />
                <br />
                </div>
                </div>
                  <button
                    className="btn btn-with-icon mb-3 broder-green  "
                    title="Login"
                    onClick={() => loginWithRedirect()}
                  >
                    <FontAwesomeIcon icon={faSignInAlt} /> &nbsp; Login
                  </button>
                </p>
              )}
            </div>
            {/* <div className="row">
              {ProfileList.map((value, index) => {
                return (
                  <Fragment key={index}>
                    <div className="col-md-6 mb-4">
                      <Paper
                        sx={{
                          p: 2,
                          flexGrow: 1,
                          backgroundColor: (theme) =>
                            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                        }}
                      >
                        <Grid container spacing={2}>
                          <Grid item xs={4}>
                            <img
                              src={value.Img}
                              alt="profile"
                              className="img-fluid round-img mx-auto"
                            />
                          </Grid>
                          <Grid item xs={8} sm container>
                            <Grid
                              item
                              xs
                              container
                              direction="column"
                              spacing={2}
                            >
                              <Grid item xs>
                                <Typography
                                  gutterBottom
                                  variant="subtitle1"
                                  component="div"
                                >
                                  {value.Role}
                                </Typography>

                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  ID: {value.Id}
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography
                                  sx={{ cursor: "pointer" }}
                                  variant="body2"
                                >
                                  <a
                                    onClick={() =>
                                      handleUserInfo(value.Id, value.Role)
                                    }
                                  >
                                    <button className="btn btn-success">
                                      Continue
                                    </button>
                                  </a>
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Paper>
                    </div>
                  </Fragment>
                );
              })}
            </div> */}
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}
