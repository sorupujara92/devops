import React from "react";
import {  makeStyles,Checkbox, Typography} from "@material-ui/core";
import Password from "../../molecules/passwordField/password";
import Email from "../../molecules/emailField/email";
import SignInButton from "../../molecules/button/signInButton"
import * as Constants from "../../../constants";
import { useHistory,Link } from "react-router-dom";
import  { api } from "../../../resource"



const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
  },
  forgot: {
    paddingTop: "24px",
    paddingBottom: "20px",
    float: "right",
    fontSize: "12px",
    textAlign: "right",
    textDecoration: "none",
    color: "#27418b",
  },
  keepMeLoggedIn:{
    paddingTop: "24px",
    paddingBottom: "20px",
    float: "left",
    fontSize: "12px",
    color: "#333333",
    width: "114px",
    height: "17px",
  },
  checkbox:{
    paddingTop: "12px",
    paddingRight:"14px",
    width: "18px",
    height: "18px",
    float: "left",  
  },
  footer: {
    textAlign: "center",
    marginTop: "20px",
    fontSize: "12px",
    paddingBottom: "72px"
  },
  styleTwo: {
    width: "100%",
    borderTop: "1px solid rgba(0, 0, 0, 0.1)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
  },
  error:{
    float:"left"    
  }
}));


const LoginForm = () => {
  const history=useHistory();
  const classes = useStyles();
  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [authenticationError, setAuthenticationError] = React.useState("");
  const handleChangeInUserEmail = (event) => {
    const email = event.target.value;
    setUserEmail(email);
  };
  const handleChangeInPassword = (event) => {
    const password = event.target.value;
    setUserPassword(password);
  };  
  async function handlePostToken () {
      let data={
        method:'POST',
        body:JSON.stringify({
          client_id:api.CLIENT_ID,
          username:userEmail,
          password:userPassword,
          grant_type: 'password',
          audience: api.AUDIENCE
           
        }),
        headers:{
            'Accept':'application/json',
           'Content-Type': 'application/json'
        }
      }
      return fetch(api.TOKENAPI,data)
      .then(response=>
        response.json().then(user=>({user,response})))
        .then(({user,response})=>{
          if(response.ok){
              localStorage.setItem('accessToken', user.access_token)
              history.push("/tasks")
          }  
          else {
            setAuthenticationError("Enter valid credentials");
          }
        }
      );
      
    }

    return (
    <div>
      <form className={classes.form}>
        <br></br>
        <Email
          onChange={handleChangeInUserEmail}
          label={Constants.EMAIL_LABEL}
          placeHolder={Constants.EMAIL_PLACE_HOLDER}
          userEmail={userEmail}
          value={userEmail}
          data-testid="inputEmail"
        />
        <Password
          onChange={handleChangeInPassword}
          label={Constants.PASSWORD_LABEL}
          placeHolder={Constants.PASSWORD_PLACE_HOLDER} 
          userPassword={userPassword}
          data-testid="inputPassword" 
        />
        <div>
          <Typography
            color="error"
            className={classes.error}
            variant="caption"
          >
            {authenticationError}
          </Typography>
        </div>
        <SignInButton
          onClick={handlePostToken}
          buttonText={Constants.SIGN_IN}
          disabled={false}
          data-testid="signInButton"
        >
        </SignInButton>
        <Typography>
          <Link className={classes.forgot} to={"/forgotPassword"} data-testid="forgot">
            {"Forgot password?"}
          </Link> 
        </Typography>
        <div  className={classes.checkbox}>
          <Checkbox>
          </Checkbox>
        </div>
        <Typography className={classes.keepMeLoggedIn} variant="h5" data-testid="keepMeLoggedIn">
          Keep me logged in
        </Typography>

        <hr  className={classes.styleTwo}></hr>
          <Typography className={classes.footer}>
              {Constants.DONT_HAVE_ACCOUNT}	
              <Link
                className={classes.signupLink}
                data-testid="signupLink"
                id="signupLink"
                to={"/signUp1"}
              >
                {Constants.SIGN_UP}
              </Link>
          </Typography>
      </form>
    </div>
  );
};

export default LoginForm;
