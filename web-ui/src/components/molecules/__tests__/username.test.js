import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Username from "../username/username";
import {within} from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import { create } from "react-test-renderer";

describe("Username component",()=>{
    let props={
        label:"Username",
        placeholder:"Enter username",
        username:"sam",
        onChange:jest.fn()  
    } 

    it('label should be Username',()=>{
        const { getByTestId } = render(<Username {...props}/>);
        const {getByText}=within(getByTestId("usernameLabel"));
        expect(getByText(props.label)).toBeInTheDocument();   
    });   

    it('onChange username',() =>{ 
        const { getByTestId } = render(<Username {...props}/>);
        const usernameComponent=getByTestId("username");
        fireEvent.change(usernameComponent);  
        expect(usernameComponent.getAttribute('value')).toEqual('sam');  
    })    
 
});