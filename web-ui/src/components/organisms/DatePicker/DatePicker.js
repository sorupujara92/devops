import React from "react";
import {
  Card,
  CardContent,
  Divider,
  Typography,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CalendarTodayIcon from "@material-ui/icons/CalendarTodayOutlined";
import Brightness7OutlinedIcon from "@material-ui/icons/Brightness7Outlined";
import Calendar from "../../Atoms/Calendar/Calendar";
import AccessTimeOutlinedIcon from "@material-ui/icons/AccessTimeOutlined";
import moment from "moment";
import MyTimePicker from "../../Atoms/MyTimePicker/MyTimePicker";
import * as Constants from "../../../constants";

const useStyles = makeStyles((theme) => ({
  DateCard: {
    width: "auto",
    height: "655px",
    borderRadius: "16px",
    border: "solid 1px #eeeeee",
    fontFamily: "Poppins",
  },
  DateRow: {
    width: "369px",
    height: "34px",
    margin: "10px 10px 0px 10px",
  },
  calendarIcon: {
    width: "24px",
    height: "24px",
    color: "#bdbdbd",
    fontFamily: "Poppins",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
  },
  Day: {
    height: "21px",
    fontFamily: "Poppins",
    display: "flex",
    fontSize: "14px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "0px",
    color: " #333333",
    margin: "2px 0px 12px 6px",
  },
  DayPicker: {
    width: "auto",
    height: "320px",
    backgroundColor: "#ffffff",
    margin: "10px 10px 0px 10px",
  },
}));

export default function MainCard(props) {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(Date.now());
  const [selectedTime, setSelectedTime] = React.useState(Date.now());
  const [nextDate, setNextDate] = React.useState("");
  React.useEffect(() => {
    var tommorow = new Date(selectedDate).getTime() + 86400000;
    setNextDate(new Date(tommorow));
  }, [selectedDate]);

  React.useEffect(() => {
    let time = moment(selectedTime).clone();
    let date = moment(selectedDate).clone();
    let dateTime = moment(
      date
        .hour(time.hour())
        .minute(time.minute())
        .second(time.second())
    );
    props.setDueTime(new Date(dateTime));
  }, [selectedDate, selectedTime]);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleTimeChange = (date) => {
    setSelectedTime(date);
  };

  return (
    <div
      style={{
        display: props.datePickerHidden ? "block" : "none",
        position: "absolute",
        marginLeft: "52%",
        marginTop: "2%",
      }}
    >
      <Card className={classes.DateCard}>
        <CardContent>
          <Grid conatiner direction={"column"} justify="flex-start">
            <Grid item>
              <div className={classes.DateRow}>
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <CalendarTodayIcon className={classes.calendarIcon} />
                  <Typography className={classes.Day}>
                    {Constants.TODAY}
                  </Typography>
                  <Typography
                    className={classes.Day}
                    style={{ marginLeft: "auto" }}
                  >
                    {moment(selectedDate)
                      .format("llll")
                      .substring(0, 3)}
                  </Typography>
                </div>
                <Divider
                  style={{
                    width: "369px",
                    height: "1px",
                    backgroundColor: "#eeeeee",
                  }}
                ></Divider>
              </div>
            </Grid>
            <Grid item>
              <div className={classes.DateRow}>
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <Brightness7OutlinedIcon className={classes.calendarIcon} />
                  <Typography className={classes.Day}>
                    {Constants.TOMORROW}{" "}
                  </Typography>
                  <Typography
                    className={classes.Day}
                    style={{ marginLeft: "auto" }}
                  >
                    {moment(nextDate)
                      .format("llll")
                      .substring(0, 3)}
                  </Typography>
                </div>
                <Divider
                  style={{
                    width: "369px",
                    height: "1px",
                    backgroundColor: "#eeeeee",
                  }}
                ></Divider>
              </div>
            </Grid>
            <Grid item>
              <div className={classes.DateRow}>
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <CalendarTodayIcon className={classes.calendarIcon} />
                  <Typography className={classes.Day}>
                    {Constants.NEXT_WEEK}
                  </Typography>
                  <Typography
                    className={classes.Day}
                    style={{ marginLeft: "auto" }}
                  >
                    {Constants.MONDAY}
                  </Typography>
                </div>
                <Divider
                  style={{
                    width: "369px",
                    height: "1px",
                    backgroundColor: "#eeeeee",
                  }}
                ></Divider>
              </div>
            </Grid>
            <Grid item>
              <div className={classes.DateRow}>
                <div style={{ display: "flex", justifyItems: "flex-start" }}>
                  <Typography className={classes.Day}>
                    {moment(selectedDate).format("LL")}
                  </Typography>
                </div>
                <Divider
                  style={{
                    width: "369px",
                    height: "1px",
                    backgroundColor: "#eeeeee",
                  }}
                ></Divider>
              </div>
            </Grid>
            <Grid item>
              <div className={classes.DayPicker}>
                <Calendar  value={selectedDate} onChange={handleDateChange} />

                <Divider
                  style={{
                    width: "369px",
                    height: "1px",
                    backgroundColor: "#eeeeee",
                  }}
                ></Divider>
              </div>
            </Grid>
            <Grid item>
              <div className={classes.DateRow}>
                <div style={{ display: "flex", justifyItems: "flex-start" }}>
                  <AccessTimeOutlinedIcon className={classes.calendarIcon} />

                  <MyTimePicker
                    value={selectedTime}
                    onChange={handleTimeChange}
                  />
                </div>
                <Divider
                  style={{
                    width: "369px",
                    height: "1px",
                    backgroundColor: "#eeeeee",
                  }}
                ></Divider>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
