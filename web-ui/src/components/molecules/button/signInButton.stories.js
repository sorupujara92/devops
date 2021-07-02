import React from 'react';
import SignInButton from "./signInButton"
import { action } from '@storybook/addon-actions';

export default {
    title: 'Button',
    component:SignInButton
}

export const signInButton=()=>{
    return <SignInButton
    buttonText="Sign In"
    onClick={action(" SignIn button clicked")}
    >        
    </SignInButton>
};
export const signUpButton=()=>{
    return <SignInButton
    buttonText="Sign Up"
    variant='outlined'
    onClick={action("SigUp button clicked")}
    >        
    </SignInButton>
};