import React from "react";
import Email from "../../molecules/emailField/email";
import * as Constants from "../../../constants";
import { Button, makeStyles,Typography} from "@material-ui/core";
import {Link,useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    form: {
        width: "100%",
      },
      signupbutton: {
        backgroundColor: "#223080",
        marginTop: "5%",
        borderRadius: "6px",
        textTransform:"none"
      },
      loginLink: {
        textAlign: "center",
        marginTop: "20px",
        fontSize: "12px",
      },
      horizontalLine: {
        width: "100%",
        borderTop: "1px solid rgba(255, 255, 255, 0.3)",
        borderLeft: "1px solid rgba(255,255,255,0.3)",
        borderRight: "1px solid rgba(255,255,255,0.3)",
        paddingBottom: "30px"   
      }
}));

const SignupForm1 = () =>{
    const classes = useStyles();
    const history = useHistory();
    const [enteredEmail, setEnteredEmail] = React.useState("");
    const handleEnteredEmail = (event) => {
        const enteredEmail = event.target.value;
        setEnteredEmail(enteredEmail);
    };
    const handleSignupWithEmailOnClick = (event) =>{
        localStorage.setItem('mail',enteredEmail);
        history.push("/signUp2");
    };
    return (
        <form className={classes.form}>
        <Email
          label={Constants.EMAIL_LABEL}
          placeHolder={Constants.EMAIL_PLACE_HOLDER}
          onChange={handleEnteredEmail}
          userEmail={enteredEmail}
        />
        <div>
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.signupbutton}
          onClick={handleSignupWithEmailOnClick}
        >
          {Constants.SIGN_UP_WITH_EMAIL}
        </Button>
        </div>
        <hr  className={classes.horizontalLine}></hr>
          <Typography className={classes.loginLink}>
              {Constants.ALREADY_HAVE_ACCOUNT}	
              <Link
                className={classes.signupLink}
                data-testid="loginLink"
                to={"/login"}
              >
                {Constants.GO_TO_LOGIN}
              </Link>
          </Typography>
        </form>
    );
}
export default SignupForm1;