import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import { useEffect } from "react";

import Landing from "./components/Landing";
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import AdsTxt from "./components/AdsTxt";
import QuestionPage from "./components/QuestionPage/QuestionPage";
import RecentQuestions from "./components/RecentQuestions/RecentQuestions";

import LoginPage from "./components/LoginPage/LoginPage";
import SignUpPage from "./components/LoginPage/SignUpPage";
import BillingPage from "./components/BillingPage/BillingPage";
import ChromePage from "./components/ChromePage/ChromePage";
import { Home } from "./components/Home/Home";

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
        <Route path="/login" element={<LoginPage history={history} />} />
        <Route path="/signup" element={<SignUpPage history={history} />} />
        <Route path="/billing" element={<BillingPage history={history} />} />
        <Route path="/chrome" element={<ChromePage history={history} />} />
        <Route path="/home" element={<Home history={history} />} />
      </Routes>
    </CustomRouter>
  );
}

export default App;
