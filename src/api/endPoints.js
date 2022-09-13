const BASEURL = process.env.REACT_APP_BASE_URL;
// const BASEURL = "http://cargilldeliverybackend.ekant.in/";
const AgentsList = BASEURL + "Agents";
const OrdersList = BASEURL + "Orders";
const AssignOrder = BASEURL + "AssignOrders";
const AllAgents = BASEURL + "AllAgents";
const DeleteAgent = BASEURL + "DeleteAgent";
const DeactivateAgent = BASEURL + "DeactiveAgent";
const UpdateAgent = BASEURL + "UpdateAgent";
const EditAgent = BASEURL + "EditAgent";
const PartnerOrders = BASEURL + "AgentsOrders";
const AddAgent = BASEURL + "AddAgent";
const UpdateOrder = BASEURL + "UpdateOrderStatus";
const DeliveryLoginapi = BASEURL + "DeliveryLogin";
const OrdersCSV = BASEURL + "OrdersCSV";
const AgentOrdersCSV = BASEURL + "AgentOrdersCSV";
const AmountCollections = BASEURL + "AmountCollections";

export const ApiUrl = {
  AddAgent,
  AgentsList,
  OrdersList,
  AssignOrder,
  AllAgents,
  DeleteAgent,
  DeactivateAgent,
  UpdateAgent,
  EditAgent,
  PartnerOrders,
  UpdateOrder,
  DeliveryLoginapi,
  OrdersCSV,
  AgentOrdersCSV,
  AmountCollections,
};
