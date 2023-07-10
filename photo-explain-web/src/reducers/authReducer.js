import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  USER_INFO_GRAB,
} from "../actions/authActions";

const initialState = {
  loading: false,
  user: {},
  error: "",
  isAuthenticated: false,
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
        isAuthenticated: true,
      };
    case LOGIN_FAILURE:
      return {
        loading: false,
        user: {},
        error: action.payload,
        isAuthenticated: false,
      };
    case LOGOUT_REQUEST:
      return {
        user: {},
        loading: false,
        isAuthenticated: false,
        // logout
      };
    case USER_INFO_GRAB:
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
