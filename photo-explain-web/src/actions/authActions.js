import axios from "axios";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const USER_INFO_GRAB = "USER_INFO_GRAB";
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
            console.log("ehllo user");
            console.log(user);
            localStorage.setItem("email", user.email);
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

export const getUserInfo = () => {
  return (dispatch) => {
    console.log("refresh???");

    const token = localStorage.getItem("token");
    fetch("http://127.0.0.1:8888/web-question/grabUserInfo", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // dispatch the user data to Redux store
        dispatch(userGrabInfo(data));
      })
      .catch((error) => {
        // Handle the error
      });
  };
};
