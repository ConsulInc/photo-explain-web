import axios from "axios";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";

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
        const { access_token } = data;
        localStorage.setItem("token", access_token); // store token in local storage

        // Once login is successful, make an additional API call to retrieve user credentials
        fetch("http://127.0.0.1:8888/web-question/loginUserInfo", {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        })
          .then((response) => response.json())
          .then((user) => {
            dispatch(loginSuccess(user)); // update Redux state with the user credentials
            console.log("ehllo user");
            console.log(user);
            localStorage.setItem("email", user.logged_in_as);
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

export const refreshUser = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      // Perform API call or decode the token to retrieve user information
      // For simplicity, assuming the token already contains user information
      fetch("http://127.0.0.1:8888/web-question/refresh", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch user information");
          }
          return response.json();
        })
        .then((data) => {
          const user = data;
          dispatch(loginSuccess(user));
        })
        .catch((error) => {
          dispatch(loginFailure(error.message));
        });
    }
  };
};
