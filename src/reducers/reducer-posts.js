import _ from "lodash";
import { FETCH_POSTS, FETCH_POST, DELETE_POST, CREATE_POST } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      // console.log({...state, [action.payload.data.id]: action.payload.data });
      return {...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id");
    case DELETE_POST:
      return _.omit(state, action.payload);
    case CREATE_POST:
      return {...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
}
