import { DATA_API } from "./urls";
import {
  SEND_PARTIAL_INFO_SUCCESS,
  SEND_PARTIAL_INFO_ERROR,
  SEND_PARTIAL_INFO_REQUEST
} from "./types";

export const fetchData = id => dispatch => {
  dispatch({ type: SEND_PARTIAL_INFO_REQUEST });
  return fetch(DATA_API + `/posifi_id/${id}`)
    .then(res => {
      return res.json().then(data => {
        dispatch({
          type: SEND_PARTIAL_INFO_SUCCESS,
          payload: data.filter(d => d.is_blind_path === false)
        });
      });
    })
    .catch(err => {
      dispatch({ type: SEND_PARTIAL_INFO_ERROR, payload: err });
    });
};
