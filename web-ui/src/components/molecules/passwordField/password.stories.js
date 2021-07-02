import React from 'react';
import Password from "./password";

export default {
    title: 'Password',
    component:Password
}

export const password=()=>{
    return <Password
    label="Password"
    placeHolder="Enter your password"  
    >
    </Password>
};
