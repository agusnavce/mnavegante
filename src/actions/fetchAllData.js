import { DATA_API } from "./urls";
import { SEND_INFO_SUCCESS, SEND_INFO_ERROR, SEND_INFO_REQUEST } from "./types";

export const fetchAllData = () => dispatch => {
  dispatch({ type: SEND_INFO_REQUEST });
  return fetch(DATA_API)
    .then(res => {
      return res.json().then(data => {
        dispatch({
          type: SEND_INFO_SUCCESS,
          payload: data.filter(d => d.is_blind_path === false)
        });
      });
    })
    .catch(err => {
      dispatch({ type: SEND_INFO_ERROR, payload: err });
    });
};
