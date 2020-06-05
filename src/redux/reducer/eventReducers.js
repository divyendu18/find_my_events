import { GET_EVENTS, GET_EVENT, ADD_EVENT, FIND_EVENT } from "../action/types";
const initialState = {
  events: [],
  event: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload,
      };
    case GET_EVENT:
      return {
        ...state,
        event: action.payload,
      };
    case ADD_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case FIND_EVENT:
      return {
        ...state,
        event: action.payload,
      };
    default:
      return state;
  }
}
