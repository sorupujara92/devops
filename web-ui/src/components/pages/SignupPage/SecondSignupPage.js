import React from 'react';
import { makeStyles, Typography, Paper, Grid } from '@material-ui/core';
import Logo from "../../molecules/logoImage/logo";
import Tagline from "../../molecules/tagline/tagline";
import SignupForm2 from "../../organisms/signup-form/signupForm2";

const useStyles = makeStyles((theme) => ({
    pageGrid: {
        height:"100vh",     
    },
    backgroundimage: {
        background: `linear-gradient(to bottom, rgba(22, 101, 216, 0.37), rgba(22, 101, 216, 0.81)),url("/static/images/Bg-image.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "1600px",
        height:"auto"
    },
    heading: {
        float: "left",
        margin: "19px 0px 0px 30px",
        height: "33px",
        width: "153px",
        fontSize: "24px",
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    gridContainer:{
        height:"755px"
    },
    formBox: {
        float: "right",
        margin: "150px 178px 0px auto",
        borderRadius: "16px",
        height:"602px",
        width:"444px",
        ["@media (max-width:1024px)"]: {
            marginRight: "100px"
        },
        ["@media (max-width:768px)"]: {
            marginRight: "70px"
        }
    
    },
    mail: {
        fontSize: '12px',
        color: '#333333',
        height: "17px",
        width: "126px",
        paddingLeft: "42px",
        paddingTop: "20px"
    },

}));

const SecondSignupPage = () =>{
    const classes = useStyles();
    const enteredMail=localStorage.getItem('mail')
    return (
        <Grid container component="main" className={classes.pageGrid}>
            <Grid
                item    
                xs={false}
                sm={12}
                md={12}
                className={classes.backgroundimage}
                data-testid="bgImage"
            >
                <Grid container direction="row" justify="center" alignItems="center" className={classes.gridContainer}>
                <Tagline />
                    <Grid pr={178} mt={251} pb={249} 
                        item
                        sm={4}
                        md={3}
                        component={Paper}
                        elevation={6}
                        className={classes.formBox}
                    >    
                        <Logo />
                        <Typography
                            className={classes.mail}                            
                        >
                        {enteredMail}
                        </Typography>
                        <Typography
                        className={classes.heading}
                        variant="h5"
                        >
                        Almost there
                        </Typography>
                        <div className={classes.paper}>
                        <SignupForm2 />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
export default SecondSignupPage;
