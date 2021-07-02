import React from "react";
import { render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FirstSignupPage from "../SignupPage/FirstSignupPage";
import { BrowserRouter as Router } from "react-router-dom";
import { create } from "react-test-renderer";

describe("Login component",()=>{
    
    it("Matches the snapshot", () => {
        const firstSignup = create(<Router><FirstSignupPage /></Router>);
        expect(firstSignup.toJSON()).toMatchSnapshot();
    });
    it("background image to be checked",() => {
        const { getByTestId } = render(<Router><FirstSignupPage /></Router>);
        expect(getByTestId("bgImage")).toBeInTheDocument(); 
    });
});