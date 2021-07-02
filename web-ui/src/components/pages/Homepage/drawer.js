import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import AppBar from "./appbar";
import * as Constants from "../../../constants";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  AddTask: {
    color: "#27418b",
    marginTop: "20px",
    marginLeft: "20px",
  },
  root: {
    display: "flex",
    fontWeight: "600",
  },
  drawer: {
    width: "240px",
    flexShrink: 0,
    whiteSpace: "nowrap",
    fontWeight: "600",
  },
  drawerPaper: {
    width: "240px",
    marginTop: "64px",
    backgroundColor: "#fafafa",
    color: "#858585",
    fontWeight: "bold",

    letterSpacing: "0",
    ["@media (max-width:1024px)"]: {
      width: "240px",
    },
    ["@media (max-width:768px)"]: {
      width: "150px",
    },
  },

  listButtons: {
    marginTop: "20px",
    fontWeight: "600",
  },
  active: {
    color: "#27418b",
    borderRight: "3px solid blue",
  },
  IconActive: {
    color: "#27418b",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    height: "0px",
  },
  content: {
    flexGrow: 1,
    marginLeft: "240px",
    marginTop: "64px",
    backgroundColor: "#f3f3f5",
    height: "92vh",
  },
  text: {
    fontSize: "14px",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "0",
  },

  links: {
    color: "#858585",
    paddingTop: "0px",
    textDecoration: "none",
    fontWeight: "600",
  },
}));
const MiniDrawer = () => {
  const classes = useStyles();
  const [activeLink] = React.useState(1);
  return (
    <div>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Divider />
        <div className={classes.listButtons}>
          <ListItem
            button
            style={
              activeLink === 1
                ? { color: "#27418b", borderRight: "3px solid blue" }
                : {}
            }
          >
            <ListItemIcon style={activeLink === 1 ? { color: "#27418b" } : {}}>
              <DashboardOutlinedIcon data-testid="inboxIcon"/>
            </ListItemIcon>
            <Typography component="div" className={classes.text}>
              <Box data-testid="inbox_tab">{Constants.INBOX}</Box>
            </Typography>
          </ListItem>
          <ListItem
            button
            style={
              activeLink === 2
                ? { color: "#27418b", borderRight: "3px solid blue" }
                : {}
            }
            className={classes.listButtons}
          >
            <ListItemIcon style={activeLink === 2 ? { color: "#27418b" } : {}}>
              <CalendarTodayOutlinedIcon data-testid="scheduledIcon" />
            </ListItemIcon>
            <Typography component="div" className={classes.text}>
              <Box data-testid="scheduled_tab">{Constants.SCHEDULED}</Box>
            </Typography>
          </ListItem>
          <ListItem
            button
            style={
              activeLink === 3
                ? { color: "#27418b", borderRight: "3px solid blue" }
                : {}
            }
            className={classes.listButtons}
          >
            <ListItemIcon style={activeLink === 3 ? { color: "#27418b" } : {}}>
              <ArchiveOutlinedIcon data-testid="archiveIcon"/>
            </ListItemIcon>
            <Typography component="div" className={classes.text}>
              <Box data-testid="archive_Tab">{Constants.ARCHIVED}</Box>
            </Typography>
          </ListItem>
        </div>
      </Drawer>
    </div>
  );
};

export default MiniDrawer;
