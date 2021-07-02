import React from "react";
import { render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SecondSignupPage from "../SignupPage/SecondSignupPage";
import { BrowserRouter as Router } from "react-router-dom";
import { create } from "react-test-renderer";

describe("Login component",()=>{
    Object.defineProperty(window,"localStorage",{  
        value:{
            getItem:jest.fn().mockReturnValue(JSON.stringify()),
        },
    });
    
    it("Matches the snapshot", () => {
        const secondSignup = create(<Router><SecondSignupPage /></Router>);
        expect(secondSignup.toJSON()).toMatchSnapshot();
    });
    it("background image to be checked",() => {
        const { getByTestId } = render(<Router><SecondSignupPage /></Router>);
        expect(getByTestId("bgImage")).toBeInTheDocument(); 
    });
});