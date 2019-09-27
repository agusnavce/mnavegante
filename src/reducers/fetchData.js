import {
  SEND_PARTIAL_INFO_SUCCESS,
  SEND_PARTIAL_INFO_REQUEST,
  SEND_INFO_REQUEST,
  SEND_INFO_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
  fetching: false,
  fetched: false,
  loading: true,
  error: null,
  info: []
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_PARTIAL_INFO_REQUEST:
    case SEND_INFO_REQUEST:
      return {
        ...state,
        loading: true
      };
    case `SEND_BLIND_INFO_SUCCES`:
      return { ...state, infoBlind: action.payload };
    case SEND_PARTIAL_INFO_SUCCESS:
      return { ...state, info: action.payload, loading: false };
    case SEND_INFO_SUCCESS:
      return { ...state, all: action.payload, loading: false };
    default:
      return state;
  }
};
