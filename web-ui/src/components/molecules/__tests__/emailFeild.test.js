import React from "react";
import { render, fireEvent ,act} from "@testing-library/react";
import {within} from "@testing-library/dom";
import Email from "../emailField/email";
import "@testing-library/jest-dom/extend-expect";
import { create } from "react-test-renderer";

describe("Email component",()=>{
    let props={
        label:"Email",  
        placeholder:"Enter email",
        userEmail:"sam@gmail.com",
        onChange:jest.fn()    
    }    
    it('label should be Email',()=>{
        const { getByTestId } = render(<Email {...props}/>);
        const {getByText}=within(getByTestId("emailLabel"));
        expect(getByText(props.label)).toBeInTheDocument(); 
    })
  
    it('onChange in email',() =>{   
        const { getByTestId } = render(<Email {...props}/>);
        const emailComponent=getByTestId("email");
        act(()=>{
            fireEvent.change(emailComponent,{target:{value:'sam@gmail.com'}});  
        })
        expect(emailComponent.getAttribute('value')).toEqual('sam@gmail.com');  
    })   
 
});
 