import React, { useState } from "react";
import {
  Card,
  CardContent,
  InputBase,
  Divider,
  Button,
  Typography,
} from "@material-ui/core";
import AccessTimeOutlinedIcon from "@material-ui/icons/AccessTimeOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { api } from "../../../resources";
import DatePicker from "../DatePicker/DatePicker";
import * as Constants from "../../../constants";

const useStyles = makeStyles((theme) => ({
  AddCard: {
    marginTop: "-28px",
    marginBottom: "40px",
    width: "auto",
    marginLeft: "270px",
    marginRight: "35px",
    height: "140px",
    borderRadius: "16px",
    border: "solid 1px var(--grey-fill-200)",
    backgroundColor: "#ffffff",
    fontFamily: "Poppins",
  },
  input: {
    width: "468px",
    height: "33px",
    color: "#b1b1b1",
    letterSpacing: "0px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    fontSize: "18px",
    fontFamily: "Poppins",
    marginTop: "5px",
    marginBottom: "10px",
  },
  button: {
    margin: "20px 0px -10px 5px",
    padding: "10px",
    width: "120px",
    fontSize: "12px",
    fontWeight: "500",
    textTransform: "Capitalize",
    borderRadius: "9px",
    fontFamily: "Poppins",

    "&:disabled": {
      backgroundColor: "#d5e2f9",
      color: "white",
    },
  },
  ButtonData: {
    fontSize: "12px",
  },
  calendarIcon: {
    width: "24px",
    height: "24px",
    color: "#bdbdbd",
  },
}));

export default function AddTaskForm(props) {
  const [taskName, setTaskName] = useState("");
  const [datePickerHidden, setDatePickerHidden] = useState(false);
  const classes = useStyles();
  const [hasInputError, setHasInputError] = useState(true);
  const [dueTime, setDueTime] = useState("");


  const handleChangeInInput = (event) => {
    event.preventDefault();
    const text = event.target.value;
    setTaskName(text);
    if (text.length < 1) {
      setHasInputError(true);
    } else {
      setHasInputError(false);
    }
  };

  const handleClick = () => {
    const requestOptions = {
      method: "POST",
      withCredentials:true,
      credentials:'include',
      headers: { "Content-Type": "application/json",Authorization: 'Bearer '+ localStorage.getItem('accessToken')},
      body: JSON.stringify({
        description: taskName,
        endDate: dueTime,
        completionDate: "1970-01-19T03:52:19.449+00:00",
        frequency: "YEARLY",
        createdBy: 1,
        modifiedBy: 7,
        isDeleted: true,
        isArchived: false,
        isCompleted: true,
      })
    };
    fetch(api.GET_TASKS, requestOptions).then((data) => {
      props.setUpdatedTaskList(props.updatedTaskList + 1);
    });
  };

  return (
    <div style={{ display: props.hidden ? "block" : "none" }} id="addTask-box">
      <Card className={classes.AddCard}>
        <CardContent>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <InputBase
             
              id="inputField"
              fullWidth
              onChange={handleChangeInInput}
              className={classes.input}
              placeholder="Add details here"
              value={taskName}
              inputProps={{ "aria-label": "naked" ,"data-testid":"inputField2"}}
            />
            <AccessTimeOutlinedIcon
              data-testid="access-icon"
              className={classes.calendarIcon}
              style={{ margin: "2px 0px auto auto" }}
              onClick={() => setDatePickerHidden(!datePickerHidden)}
            />

            <DatePicker
              setDueTime={setDueTime}
              datePickerHidden={datePickerHidden}
              setDatePickerHidden={setDatePickerHidden}
            />
          </div>
          <Divider light></Divider>
          <div style={{ display: "flex" }}>
            <Button
              className={classes.button}
              data-testid="save-button"
              variant="contained"
              color="primary"
              disabled={hasInputError ? true : false}
              onClick={() => {
                handleClick();
                setTaskName("");
                setHasInputError(true);
                props.setHidden(!props.hidden);
                props.setHideInbox(props.hideInbox);
                setDatePickerHidden(!datePickerHidden);
              }}
            >
              <Typography className={classes.ButtonData} variant="h5">
                {Constants.SAVE_BUTTON_LABEL}
              </Typography>
            </Button>
            <Button
              className={classes.button}
              style={{ marginLeft: "20px", fontFamily: "Poppins" }}
              data-testid="cancel-button"
              variant="outlined"
              onClick={() => {
                props.setHidden(!props.hidden);
                setTaskName("");
                setHasInputError(true);
                props.setHideInbox(props.hideInbox);
                setDatePickerHidden(datePickerHidden&&!datePickerHidden);
              }}
            >
              <Typography className={classes.ButtonData} variant="h5">
                {Constants.CANCEL_BUTTON_LABEL}
              </Typography>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
