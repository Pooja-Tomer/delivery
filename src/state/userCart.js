import { createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";

const initialState = {
  PartnerID: localStorage.getItem("PartnerID")
    ? JSON.parse(localStorage.getItem("PartnerID"))
    : 0,
  AgentID: localStorage.getItem("AgentID")
    ? JSON.parse(localStorage.getItem("AgentID"))
    : 0,
  Role: localStorage.getItem("Role")
    ? JSON.parse(localStorage.getItem("Role"))
    : "partner",
};

const cartSlice = createSlice({
  name: "UserCart",
  initialState,
  reducers: {
    updatePartnerID(state, action) {
      state.PartnerID = action.payload;
      localStorage.setItem("PartnerID", JSON.stringify(state.PartnerID));
      // console.log("PartnerID" + JSON.stringify(state.PartnerID));
    },
    UpdateAgentID(state, action) {
      state.AgentID = action.payload;
      localStorage.setItem("AgentID", JSON.stringify(state.AgentID));
      // console.log("AgentID" + JSON.stringify(state.AgentID));
    },
    UpdateRole(state, action) {
      state.Role = action.payload;
      localStorage.setItem("Role", JSON.stringify(state.Role));
      // console.log("Role" + JSON.stringify(state.Role));
    },
  },
});

export const { updatePartnerID, UpdateAgentID, UpdateRole } = cartSlice.actions;

export default cartSlice.reducer;
