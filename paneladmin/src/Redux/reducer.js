import { GET_ALL_SUPPLIES, GET_SUPPLIE_BY_ID } from "./actions";

const initialState = {
  supplies: [],
  details: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_SUPPLIE_BY_ID:
      return {
        ...state,
        details: payload,
      };
    case GET_ALL_SUPPLIES:
      return {
        ...state,
        supplies: payload,
      };
    default:
      return state;
  }
}
