import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Password from "../passwordField/password";
import {within} from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import { create } from "react-test-renderer";

describe("Password component",()=>{
    let props={
        label:"Password",
        placeholder:"Enter Password",
        userPassword:"abc123",
        onChange:jest.fn()  
    } 
    
    it('label should be Password',()=>{
        const { getByTestId } = render(<Password {...props}/>);
        const {getByText}=within(getByTestId("passwordLabel"));
        expect(getByText(props.label)).toBeInTheDocument();   
    })
    it('onChange password',() =>{ 
        const { getByTestId } = render(<Password {...props}/>);
        const passwordComponent=getByTestId("password");
        fireEvent.change(passwordComponent);  
        expect(passwordComponent.getAttribute('value')).toEqual('abc123');  
    })    
 
});
    