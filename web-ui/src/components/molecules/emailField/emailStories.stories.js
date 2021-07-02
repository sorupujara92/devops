import React from 'react';
import Email from "./email";

export default {
    title: 'Email',
    component:Email
}

export const email=()=>{
    return <Email
    label="Email"
    placeHolder="Enter your mail id"    
    >
    </Email>
};
