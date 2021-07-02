import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    float: "right",
  },
  profileIcon: {
    height: "32px",
    width: "32px",
    cursor: "pointer",
    marginLeft: "5px",
  },
}));

const ProfileMenu = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Avatar
        alt="Vishwas"
        src={"/static/images/profile.png"}
        className={classes.profileIcon}
        data-testid="avatar"
      ></Avatar>
    </div>
  );
};

export default ProfileMenu;
