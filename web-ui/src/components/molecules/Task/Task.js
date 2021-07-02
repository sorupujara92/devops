import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import ChipComponent from "../../Atoms/ChipComponent/ChipComponent";
import CheckBoxComponent from "../../Atoms/CheckBoxComponent/CheckBoxComponent";

const useStyles = makeStyles((theme) => ({
  TaskCard: {
    marginBottom: "20px",
    fontSize: "18px",
    fontFamily: "Poppins",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "0px",
    marginRight: "20px",
    width: "auto",
    height: "72px",
    color: "#333333",
  },
  Description: {
    fontSize: "18px",
    marginLeft: "9px",
    position: "relative",
    top: "6px",
  },
  ChipText: {
    width: "150px",
    height: "26px",
    fontFamily: "Poppins",
    borderRadius: "6px",
    fontSize: "14px",
    fontStretch: "normal",
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: "normal",
    letterSpacing: "0px",
    textAlign: "center",
    color: "#858585",
    backgroundColor: "#e0e0e0",
  },
}));

export default function Task(props) {
  const classes = useStyles();
  let endDate = moment(props.endDate).format("lll");
  endDate =
    endDate.substring(0, endDate.indexOf(",")) +
    ", " +
    endDate.substring(endDate.indexOf(",") + 6);

  return (
    <div>
      <Card className={classes.TaskCard}>
        <CardContent>
          <Grid container justify="flex-start" alignItems="flex-start">
            <Grid item>
              <CheckBoxComponent
                size="small"
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
                style={{
                  position: "relative",
                  top: "4px",
                  width: "18px",
                  height: "18px",
                  color: "#27418b",
                  backgroundColor: "#f3f3f5",
                }}
              />
            </Grid>

            <Grid item>
              <Typography className={classes.Description} id="description">
                {props.description}
              </Typography>
            </Grid>
            <Grid item>
              <ChipComponent
                className={classes.ChipText}
                style={{
                  marginLeft: "15px",
                  position: "relative",
                  top: "6px",
                  justifyContent: "center",
                }}
                size="small"
                icon={
                  <AccessTimeIcon
                    style={{ width: "14px", height: "14px", color: "#bdbdbd" }}
                  />
                }
                label={endDate}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
