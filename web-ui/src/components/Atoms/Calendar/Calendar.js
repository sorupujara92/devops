import React from "react";
import { Grid } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";

export default function Calendar(props) {
  return (
    <MuiPickersUtilsProvider
      utils={DateFnsUtils}
      style={{ fontFamily: "Poppins !important" }}
      
    >
      <Grid container justify="space-around">
        <DatePicker
          disableToolbar
          variant="static"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          minDate={Date.now()}
          value={props.value}
          onChange={props.onChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
