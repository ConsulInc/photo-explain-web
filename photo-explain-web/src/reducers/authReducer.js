import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../actions/authActions";

const initialState = {
  loading: false,
  user: {},
  error: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        error: "",
      };
    case LOGIN_FAILURE:
      return {
        loading: false,
        user: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
