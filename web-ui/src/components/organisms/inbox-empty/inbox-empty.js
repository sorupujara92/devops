import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import * as Constants from "../../../constants";

const useStyles = makeStyles((theme) => ({
  heading: {
    margin: "0px 0px 0px 40px",
    height: "33px",
    paddingTop: "30px",
    fontSize: "24px",
    color: "#333333",
    fontWeight: "400",
  },
  Image: {},
  button: {
    borderRadius: "5px",
    textTransform: "none",
    fontWeight: "600",
    paddingTop: "7px",
    width: "130px",
    height: "36px",
    borderRadius: "6px",
    marginLeft: "13%",
    textAlign: "center",
    marginTop: "-15px",
  },
  subHeading: {
    marginTop: "10px",
    fontSize: "30px",
    fontWeight: "600",
  },
  caption: {
    marginTop: "15px",
    fontSize: "18px",
    fontWeight: "600",
    color: "#858585",
  },
  AddTask: { paddingLeft: "7px" },
  background: {
    display: "flex",
    flexDirection: "column",
    textAlign: " center",
    justifyContent: "space-evenly",
    paddingTop: "2%",
    paddingLeft: "13%",
  },
}));

const InboxEmpty = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.background}>
        <div className={classes.Image}>
          <img
            src={"/static/images/Inbox.png"}
            width={525}
            height={454}
            alt="Inbox background image"
            data-testid = "image"
          />
        </div>
        <Typography className={classes.subHeading} variant="h5" data-testid = "keepTasksOrganised">
          {Constants.KEEP_TASKS_ORGANISED}
        </Typography>
        <Typography className={classes.caption} variant="caption" data-testid = "startAddingTasks">
          {Constants.START_ADDING_TASKS}
        </Typography>
      </div>
      <br></br>
      <br></br>
      <div>
        <Button className={classes.button} variant="contained" color="primary">
          <Grid container>
            <Grid item>
              <AddIcon />
            </Grid>
            <Grid item>
              <span className={classes.AddTask}>Add task</span>
            </Grid>
          </Grid>
        </Button>
      </div>
    </div>
  );
};

export default InboxEmpty;