import React from "react";
import { render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SignupForm2 from "../signup-form/signupForm2";
import { BrowserRouter as Router } from "react-router-dom";
// import { create } from "react-test-renderer";

describe("SignupForm2 component",()=>{
    Object.defineProperty(window,"localStorage",{  
        value:{
            getItem:jest.fn().mockReturnValue(JSON.stringify()),
        },
    });
    // it("Matches the snapshot", () => { 
    //     const signup2 = create(<Router><SignupForm2 /></Router>); 
    //     expect(signup2.toJSON()).toMatchSnapshot();
    // });
    it("terms of service to be checked",() => {
        const { getByTestId } = render(<Router><SignupForm2 /></Router>);
        expect(getByTestId("terms")).toHaveTextContent("Terms of Service");
    });
    it("privacy policy to be checked",() => {
        const { getByTestId } = render(<Router><SignupForm2 /></Router>);
        expect(getByTestId("privacyPolicy")).toHaveTextContent("Privacy Policy");
    });
    it("login link to be checked",() => {
        const { getByTestId } = render(<Router><SignupForm2 /></Router>); 
        expect(getByTestId("loginLink")).toHaveTextContent("Go to login");
    });
});