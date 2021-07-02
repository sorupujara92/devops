import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import * as Constants from "../../../constants";

const useStyles = makeStyles((theme) => ({
  AddTask: {
    color: "#27418b",
    marginBottom: "40px",
    fontSize: "14px",
    width: "fit-content",
    marginTop: "45px",
    fontWidth: "64px",
    fontHeight: "20px",
    cursor: "pointer",
  },
  AddIcon: {
    width: "28px",
    height: "25px",
    color: "primary",
    marginTop: "3px",
  },
  AddTaskText: {
    width: " 64px",
    height: "20px",
    fontStretch: "normal",
    fontSize: "14px",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "0px",
    fontWeight: "600",
  },
}));
const AddTaskButton = (props) => {
  const classes = useStyles();

  return (
    <div
      className={classes.AddTask}
      onClick={() => {
        props.setHidden(!props.hidden);
      }}
      id="button"
    >
      <Grid container>
        <Grid item>
          {" "}
          <AddIcon className={classes.AddIcon} />{" "}
        </Grid>
        <Grid item style={{ paddingTop: "5px" }}>
          <Typography className={classes.AddTaskText} id="add-task">
            {Constants.ADD_TASK}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
export default AddTaskButton;
