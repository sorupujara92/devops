import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    button:{
        textTransform: "none",
        backgroundColor: "#223080",
        marginTop: "5%",
        borderRadius: "6px"
    }
}));



const SignInButton = ({buttonText,onClick,disabled}) => {
    const classes = useStyles();
    return(
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.button}
          id="button"
          onClick={onClick}
          disabled={disabled}
        >
          {buttonText}
        </Button>
    );
};


export default SignInButton;