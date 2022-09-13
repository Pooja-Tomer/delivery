import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React ,{ useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {  Toaster } from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/global.css";
import "./assets/css/navbar.css";
import "./App.css";
import Header from "./components/header";
import Login from "./pages/login";
import Manager from "./pages/manager";
// import Reports from "./pages/reports";
import Reports from "./pages/reports/index"
import NewAgent from "./pages/newagent";
import Agents from "./pages/agents";
import Home from "./pages/home";
// import Partner from "./pages/partner";
import Logout from "./pages/logout";
import AssignOrders from "../src/pages/orders/AssignedOrders/index"
import NewOrders from "../src/pages/orders/NewOrders/index"
import DeliveredOrders from "../src/pages/orders/DeliveredOrders"
import IntransitOrders from "../src/pages/orders/IntransitOrders"
import PickedUpOrders from "../src/pages/orders/PickedUpOrders"
import AgentAssignOrders from "./pages/partner2/assignedOrders/AssignOrders";
import AgentDeliveredOrders from "./pages/partner2/deliveredOrders/DeliveredOrders";
import AgentPickedUpOrders from "./pages/partner2/pickedUpOrders/PickedUpOrders";
import RejectedOrders from "./pages/orders/RejectedOrders/RejectedOrders";
import ComingSoon from "./components/ComingSoon";
import AmountCollection from "./pages/amountCollectionReport/AmountCollection";
import AgentAmountCollection from "./pages/partner2/amountCollectionReport/AgentAmountCollection";

// import Dropdown from "./pages/orders/DropDown";

function App(props) {
  const {
    isLoading,
    // error,
    // user,
    isAuthenticated,
    // loginWithRedirect,
    // logout,
    // getAccessTokenSilently,
  } = useAuth0();
  // const logoutWithRedirect = () =>
  //   logout({
  //     returnTo: window.location.origin,
  //   });
    
  useEffect(() => {}, [isLoading, isAuthenticated]);

  return (
    <>
      <Router>
        <Toaster />
        {/* <Header /> */}
        {isAuthenticated ? <Header /> : null}
        <Routes>
          <Route path="/" exact component={Home} element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newagent" element={<NewAgent />} />
          <Route path="/manager" element={<Manager />} />
          {/* <Route path="/partner" element={<Partner />} /> */}
          <Route path="/reports" element={<Reports />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/Logout" element={<Logout />} />

          {/* By Ashish 17/6/2022 */}
          <Route path="/assignorders" element={<AssignOrders />} />
          <Route path="/neworders" element={<NewOrders />} />
          <Route path="/deliveredorders" element={<DeliveredOrders />} />
          <Route path="/intransitorders" element={<IntransitOrders />} />
          <Route path="/pickedupOrders" element={<PickedUpOrders />} />
          <Route path="/rejectedOrders" element={<RejectedOrders />} />
          <Route path="/partner/comingsoon" element={<ComingSoon />} />
          <Route path="/partner/amountCollection" element={<AmountCollection />} />

          {/* <Route path="/orders/dropdown" element={<Dropdown />} /> */}

          <Route path="/agents/ordersassign" element={<AgentAssignOrders />} />
          <Route path="/agents/orderdelivered" element={<AgentDeliveredOrders />} />
          <Route path="/agents/orderpickedup" element={<AgentPickedUpOrders />} />
          <Route path="/partner/agentamountCollection" element={<AgentAmountCollection />} />


        </Routes>
      </Router>
    </>
  );
}

export default App;
