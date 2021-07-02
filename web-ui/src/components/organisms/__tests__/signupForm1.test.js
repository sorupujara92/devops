import React from "react";
import { render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SignupForm1 from "../signup-form/signupForm1";
import { BrowserRouter as Router } from "react-router-dom";
import { create } from "react-test-renderer";

describe("SignupForm1 component",()=>{
    it("Matches the snapshot", () => {
        const signup1 = create(<Router><SignupForm1 /></Router>);    
        expect(signup1.toJSON()).toMatchSnapshot();  
    });
    it("login link to be checked",() => {
        const { getByTestId } = render(<Router><SignupForm1 /></Router>);
        expect(getByTestId("loginLink")).toHaveTextContent("Go to login"); 
    });
});     