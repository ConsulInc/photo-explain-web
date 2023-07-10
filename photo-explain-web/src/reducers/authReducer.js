import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  USER_INFO_GRAB,
  AUTH_CHECK_SUCCESS,
  AUTH_CHECK_FAILURE,
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
      console.log("auth reducer");
      console.log(action.payload);
      return {
        ...state,
        user: {
          ...state.user,
          email: action.payload.email,
          name: "BLAH",
          // test: action.payload.test,
        },
      };

    case AUTH_CHECK_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case AUTH_CHECK_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

export default authReducer;
