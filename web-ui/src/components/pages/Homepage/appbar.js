import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Logo from "../../molecules/homepage-logo/homepage-logo";

import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import { InputBase, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import * as Constants from "../../../constants";
import ProfileMenu from "../../molecules/profile-menu/profile-menu";

const useStyles = makeStyles((theme) => ({
  grow: {
    maxWidth: `calc(100%-240px)`,
  },
  appbar: {
    backgroundColor: "rgb(255,255,255)",
  },
  search: {
    width: "499px",
    height: "40px",
    borderRadius: "16px",
    display: "flex",
    position: "relative",

    backgroundColor: "#fafafa",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "750px",
    },
  },
  searchIcon: {
    width: "17px",
    height: "17px",
    position: "absolute",
    pointerEvents: "none",
    alignItems: "right",
    justifyContent: "right",
    marginLeft: "89%",
    //marginTop: "1px",
    marginBottom: "2.5px",
    color: "grey",
  },
  toolbar: {
    alignItems: "center",

    height: "0px",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(0.2)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch",
    },
    fontSize: "16px",
    fontWeight: "500",
  },
  pending: {
    backgroundColor: "#eb893a",
    padding: "0 4px 0 4px",
    marginLeft: "0px",
    height: "15px",
    fontSize: "10px",
    color: "#ffffff",
  },
  hover1: {
    fontSize: "12px",
    color: "#ffffff",
    paddingLeft: "15px",
  },
  hover2: {
    marginLeft: "20px",
    marginRight: "10px",
    backgroundColor: "#eb893a",
    fontSize: "10px",
    color: "#ffffff",
  },
}));

const PrimarySearchAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={classes.appbar} elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Logo className={classes.logo} />
          <div className={classes.search}>
            <Typography>
              <InputBase
                placeholder={Constants.SEARCH}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                style={{ cursor: "auto" }}
                disabled
                inputProps={{ "aria-label": "search" }}
                data-testid="searchbar"
              />
            </Typography>
            <div className={classes.searchIcon}>
              <IconButton color="grey">
                <Badge color="grey">
                  <SearchIcon data-testid = "searchIcon" />
                </Badge>
              </IconButton>
            </div>
          </div>

          <div>
            <IconButton disabled color="grey">
              <NotificationsNoneOutlinedIcon data-testid="notificationsIcon" />
            </IconButton>
          </div>

          <ProfileMenu data-testid="profileMenu"></ProfileMenu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default PrimarySearchAppBar;
