import { API } from "./urls";
import wifi from "react-native-android-wifi";
import {
  SEND_WIFI_ERROR,
  FETCH_PREDICTIONS_SUCCESS,
  SEND_WIFI_START
} from "./types";

export const sendWifiSignals = () => {
  return async dispatch => {
    dispatch({ type: SEND_WIFI_START });
    var wifiList = [];
    var has_5ghz = true;
    wifi.reScanAndLoadWifiList(
      wifiStringList => {
        wifiList = [].concat(JSON.parse(wifiStringList));
        var lis = wifiList.reduce((previous, item) => {
          console.log(item);
          previous[item.BSSID] = item.level;
          return previous;
        }, {});
        fetch(API + "/localize", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            wifi: lis,
            has_5_ghz: has_5ghz
          })
        })
          .then(res => {
            res.json().then(data => {
              return dispatch({
                type: FETCH_PREDICTIONS_SUCCESS,
                payload: {
                  location: data.location,
                  probability: data.probabilities[data.location]
                }
              });
            });
          })
          .catch(err => {
            dispatch({ type: SEND_WIFI_ERROR, payload: err });
          });
      },
      error => {
        console.log(error);
      }
    );
  };
};
