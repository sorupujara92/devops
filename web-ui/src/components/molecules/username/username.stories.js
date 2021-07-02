import React from 'react';
import Username from "./username";

export default {
    title: 'Username',
    component:Username
}

export const username=()=>{
    return <Username
    label="Username"
    placeHolder="Enter your name"
    >
    </Username>
};
