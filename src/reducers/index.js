import { combineReducers } from "redux";

import fetchPredictions from "./fetchPredictions";
import sendWifiSignal from "./sendWifiSignal";
import fetchData from "./fetchData";

export default combineReducers({
  predictions: fetchPredictions,
  wifi: sendWifiSignal,
  data: fetchData
});
