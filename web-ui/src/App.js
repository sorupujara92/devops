import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Tasks from "./components/pages/landing-page/tasks";
import Login from "./components/pages/main-login/login";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./utils/theme/theme";
import FirstSignupPage from "./components/pages/SignupPage/FirstSignupPage";
import SecondSignupPage from "./components/pages/SignupPage/SecondSignupPage";
import DefaultPage from "./components/defaultpage";

const App = () => (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
          <Router>
            <Route exact path="/" component={DefaultPage} />
            <Route path="/tasks" component={Tasks} />
            <Route path="/login" component={Login} />
            <Route path="/forgotPassword" component={""} />
            <Route path="/signUp1" component={FirstSignupPage} />
            <Route path="/signUp2" component={SecondSignupPage} />
          </Router>
        </div>
      </Provider>
    </ThemeProvider>
);

export default App;
