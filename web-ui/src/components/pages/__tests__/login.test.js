import React from "react";
import { render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Login from "../main-login/login";
import { BrowserRouter as Router } from "react-router-dom";
import { create } from "react-test-renderer";

describe("Login component",()=>{
    
    it("Matches the snapshot", () => {
        const loginForm = create(<Router><Login /></Router>);
        expect(loginForm.toJSON()).toMatchSnapshot();
    });

    it("background image to be checked",() => {
        const { getByTestId } = render(<Router><Login /></Router>);
        expect(getByTestId("bgImage")).toBeInTheDocument(); 
    });

});