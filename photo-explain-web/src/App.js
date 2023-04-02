import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import { useEffect } from "react";

import Landing from "./components/Landing";

const CustomRouter = ({ basename, children, history }) => {
  const [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  });

  React.useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      children={children}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};

function App() {
  const history = createBrowserHistory();
  useEffect(() => {}, []);

  return (
    <CustomRouter history={history}>
      <Routes>
        <Route exact path="/" element={<Landing history={history} />} />
      </Routes>
    </CustomRouter>
  );
}

export default App;
