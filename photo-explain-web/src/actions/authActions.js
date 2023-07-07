import axios from "axios";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

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

export const loginUser = (userLogin) => {
  console.log("into redux");
  console.log(userLogin);
  return (dispatch) => {
    dispatch(loginRequest());

    axios
      .post("http://127.0.0.1:8888/web-question/login", userLogin)
      .then((response) => {
        const { access_token } = response.data;
        console.log("access token omg!!1");
        console.log(access_token);
        localStorage.setItem("token", access_token); // store token in local storage

        const user = response.data;
        dispatch(loginSuccess(user));
      })
      .catch((error) => {
        dispatch(loginFailure(error.message));
      });
  };
};
