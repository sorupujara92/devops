import  React from 'react';
import { makeStyles,Grid, Typography} from '@material-ui/core';
import * as Constants from "../../../constants";

const useStyles =  makeStyles((theme) =>({

    logo: {
        margin : '30px 10px 0px 30px',  
        width:'32px',
        height:'28px',
      },
    title:{
        width:'51px',
        fontSize:'20px',
        paddingTop:'30px',
        height:'28px',
        fontWeight:'600',
        color:'#333333',
    },
  
}));

const Logo = () => {
    const classes=useStyles();
    return ( 
        <Grid container >
            <Grid item>
                <img src={"/static/images/logo.png"} className={classes.logo} alt="Logo" data-testid='logoImage'/>
            </Grid>
            <Grid item>
                <Typography className={classes.title} data-testid='imageTitle'>
                    {Constants.TODO}
                </Typography>
            </Grid>
        </Grid>
     );
}
export default Logo;