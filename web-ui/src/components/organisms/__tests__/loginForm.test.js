import React from "react";
import { render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LoginForm from "../login-form/loginForm";
import { BrowserRouter as Router } from "react-router-dom";
import { create } from "react-test-renderer";
  

describe("Login component",()=>{
    
    it("Matches the snapshot", () => {
        const loginForm = create(<Router><LoginForm /></Router>);
        expect(loginForm.toJSON()).toMatchSnapshot();
    });
    it("forgot password to be checked",() => {
        const { getByTestId } = render(<Router><LoginForm /></Router>);
        expect(getByTestId("forgot")).toHaveTextContent("Forgot password?");     
    });
    it("signup link to be checked",() => {
        const { getByTestId } = render(<Router><LoginForm /></Router>);
        expect(getByTestId("signupLink")).toHaveTextContent("Sign up");     
    });
    it("keep me logged in text to be checked",() => {
        const { getByTestId } = render(<Router><LoginForm /></Router>);
        expect(getByTestId("keepMeLoggedIn")).toHaveTextContent("Keep me logged in");     
    });

});


