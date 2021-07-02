import React from "react";
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";

import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles((theme) => ({
  MuiInputBaseInput: {
    width: "100px",
    height: "20px",
    fontFamily: "Poppins !important",
    fontSize: "14px !important",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "0px",
    color: " #333333",
    margin: "0px 0px 12px 6px",
   
  },
}));

const customTheme = createMuiTheme({
  overrides: {
    MuiInputBase: {
      input: {
        fontFamily: "Poppins",
        width: "100%",
        border: "0",
        height: "auto",
        fontSize: "14px",
        marginTop: "-20px",
        marginLeft: "3px",
        display: "block",
        padding: "8px 0 7px",
        minWidth: "0",
        letterSpacing: "0px",
      },
    },
  },
});

export default function MyTimePicker(props) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={customTheme}>
      <div className={classes.MuiInputBaseInput}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardTimePicker
          id="time-picker"
            disableToolbar
            variant="inline"
            mask="__:__ _M"
            margin="normal"
            value={props.value}
            onChange={props.onChange}
            KeyboardButtonProps={{
              disabled: true,
            }}
            keyboardIcon
            disablePast
            hideTabs
            InputProps={{
              disableUnderline: true,
              keyboardIcon: { pointerEvents: "none" },
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    </ThemeProvider>
  );
}
