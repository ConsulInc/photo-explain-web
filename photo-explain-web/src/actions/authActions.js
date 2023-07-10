import axios from "axios";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const USER_INFO_GRAB = "USER_INFO_GRAB";
export const AUTH_CHECK_SUCCESS = "AUTH_CHECK_SUCCESS";
export const AUTH_CHECK_FAILURE = "AUTH_CHECK_FAILURE";

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};

export const logoutRequest = () => {
  localStorage.removeItem("token");
  return {
    type: LOGOUT_REQUEST,
  };
};

export const userGrabInfo = (userInfo) => {
  return {
    type: USER_INFO_GRAB,
    payload: userInfo,
  };
};

export const authCheckSuccess = () => {
  return {
    type: AUTH_CHECK_SUCCESS,
  };
};

export const authCheckFailure = () => {
  return {
    type: AUTH_CHECK_FAILURE,
  };
};

export const getUserInfo = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    fetch("http://127.0.0.1:8888/web-question/grabUserInfo", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Authentication check failed");
        }
      })
      .then((data) => {
        // dispatch the user data to Redux store
        dispatch(userGrabInfo(data));
        dispatch(authCheckSuccess());
      })
      .catch((error) => {
        // Handle the error
        dispatch(authCheckFailure());
      });
  };
};

export const loginUser = (userLogin) => {
  console.log("into redux");
  console.log(userLogin);
  return (dispatch) => {
    dispatch(loginRequest());

    fetch("http://127.0.0.1:8888/web-question/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLogin),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("fornt end token REACHED??? PRINTIGN DATA");
        console.log(data);

        if (data.message && data.message === "Invalid email or password") {
          // If it does, dispatch failure action and stop further execution
          dispatch(loginFailure(data.message));
          return;
        }
        const { access_token } = data;
        localStorage.setItem("token", access_token); // store token in local storage

        // Once login is successful, make an additional API call to retrieve user credentials
        fetch("http://127.0.0.1:8888/web-question/grabUserInfo", {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        })
          .then((response) => response.json())
          .then((user) => {
            dispatch(loginSuccess(user)); // update Redux state with the user credentials
          })
          .catch((error) => {
            dispatch(loginFailure(error.message));
          });
      })
      .catch((error) => {
        dispatch(loginFailure(error.message));
      });
  };
};
