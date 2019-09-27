import { combineReducers } from "redux";

import fetchPredictions from "./fetchPredictions";
import sendWifiSignal from "./sendWifiSignal";
import fetchData from "./fetchData";
import audioPlaying from "./audioPlaying";

export default combineReducers({
  predictions: fetchPredictions,
  wifi: sendWifiSignal,
  data: fetchData,
  audio: audioPlaying
});
