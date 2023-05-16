import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import { useEffect } from "react";

import Landing from "./components/Landing";
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import AdsTxt from "./components/AdsTxt";
import QuestionPage from "./components/QuestionPage";
import RecentQuestions from "./components/RecentQuestions/RecentQuestions";

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
        <Route
          path="/terms-of-service"
          element={<TermsAndConditions history={history} />}
        />
        <Route>
          <Route path="/app-ads.txt" element={<AdsTxt history={history} />} />
        </Route>
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy history={history} />}
        />
        <Route path="/app-ads.txt" element={<AdsTxt history={history} />} />
        <Route
          path="/question/:questionID"
          element={<QuestionPage history={history} />}
        />
        <Route
          path="/recentQuestions"
          element={<RecentQuestions history={history} />}
        />
      </Routes>
    </CustomRouter>
  );
}

export default App;
