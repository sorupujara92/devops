import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  logo: {
    margin: "10px 5px 0px -5px",
    width: "32px",
    height: "28px",
  },
  title: {
    paddingTop: "12px",
    height: "28px",
    fontWeight: "600",
    width: "51px",
    fontSize: "20px",
    color: "#333333",
  },
}));

const HomePageLogo = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item>
        <img
          src={"/static/images/logo.png"}
          className={classes.logo}
          alt="Logo"
          data-testid="logoImage"
        />
      </Grid>
      <Grid item>
        <Typography className={classes.title} data-testid="logoContent">Todo</Typography>
      </Grid>
    </Grid>
  );
};

export default HomePageLogo;
