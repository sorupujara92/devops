import React from "react";
import * as Constants from "../../../constants";
import Password from "../../molecules/passwordField/password";
import Username from "../../molecules/username/username";
import SignUpButton from "../../molecules/button/signInButton"
import { Typography ,makeStyles,Checkbox,FormControlLabel,Button} from "@material-ui/core";
import { Link ,useHistory} from "react-router-dom";
import  { api } from "../../../resource"

const useStyles = makeStyles((theme) => ({
    form: {
        width: "100%",
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        textTransform: "capitalize",
        backgroundColor: "#223080"
    },
    checkbox:{
        width: "18px",
        height: "18px",
        float: "left",  
    },
    passwordheading: {
        height:"17px",
        width:"302px",
        fontSize:"12px",
        color: "#b1b1b1"
    },
    termsAndConditions:{
        paddingTop: "9px",
        float: "left",
        fontSize: "12px",
        color: "#333333",
        width: "289px",
        height: "17px",
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
        height:"17px",
        width:"200px",
        paddingLeft:"60px",
        paddingTop:"84px"

    },
    keepMeLoggedIn:{
        paddingTop: "12px",
        float: "left",
        fontSize: "12px",
        color: "#333333",
        width: "114px",
        height: "17px",
    },
}));

const SignupForm2 = () =>{
    const history=useHistory();
    const classes= useStyles();
    const [username, setUsername] = React.useState("");
    const [userPassword, setPassword] = React.useState("");
    const [isChecked,setIsChecked]=React.useState(true)
    const handleEnteredUsername = (event) => {
        const username = event.target.value;
        setUsername(username);
    };
    const handleEnteredPassword = (event) => {
        const password = event.target.value;
        setPassword(password);
    };
    const handleTermsAndConditionsChecked=(event)=>{
         const check=event.target.checked;
         setIsChecked(check)
    }
    const enteredmail=localStorage.getItem('mail')
    async function handleSignup () {
        let data={
            method:'POST',
            body:JSON.stringify({
              client_id:api.CLIENT_ID,
              email:enteredmail,
              password:userPassword,
              connection: 'Username-Password-Authentication',
              username: username,
              audience: api.AUDIENCE
               
            }),
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            }
          }
        return fetch(api.DB_URL,data)
        .then(
        (response)=>{
          if(response.ok){
              history.push("/login")  
         }  
        }
      );
    }
    return(
        <form className="form">
            <Username
                username={username}
                placeHolder="Your name"
                label="Enter name"
                onChange={handleEnteredUsername}
            >
            </Username>
            <Password
                userPassword={userPassword}
                placeHolder="Enter Password"
                label="Password"
                onChange={handleEnteredPassword}
            >
            </Password>
            <Typography className={classes.passwordheading}>
                Your password must be atleast 8 characters long.
            </Typography>
            <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                id="signupButton"
                onClick={handleSignup}
                className={classes.signupbutton}
                disabled={isChecked?false:true}
                //buttonText={Constants.SIGN_UP}
                >   {Constants.SIGN_UP} 
            </Button>
            <div>
                <Checkbox className={classes.checkbox}>
                </Checkbox>
                <Typography className={classes.keepMeLoggedIn} variant="h5">
                    Keep me logged in{"\n"}
                </Typography>
            </div>
            <br /><br />
            <div>
                <Checkbox className={classes.checkbox} checked={true} id="checkbox" onChange={handleTermsAndConditionsChecked}>
                </Checkbox>
                <Typography className={classes.termsAndConditions} variant="h5">
                    Agree to our
                    {" "}
                    <Link to="/terms" data-testid="terms">Terms of Service
                    </Link>
                    {" and "}
                    <Link to="/privacypolicy" data-testid="privacyPolicy">Privacy Policy
                    </Link>
                </Typography>
            </div>
            <Typography className={classes.loginLink}>
              {Constants.ALREADY_HAVE_ACCOUNT}	
              <Link
                to={"/login"}
                data-testid="loginLink"
              >
                {Constants.GO_TO_LOGIN}
              </Link>
            </Typography>

        </form>
    );
}
export default SignupForm2;