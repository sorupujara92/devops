import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as Constants from "../../../constants";
const ITEM_HEIGHT = 48;

const useStyles = makeStyles((theme) => ({
  icon: {
    "&:hover": {
      color: "#00008b",
    },
  },
    sortByName: {
        "&:hover": {
            color: "#27418b",
        },
    },
    sortByDate: {
        "&:hover": {
            color: "#27418b",
        },
    }
})
);

const SortMenu = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [activeLink, setActiveLink] = React.useState(0);

  const handleLinkChangeDateAsc = () => {
    setActiveLink(1);
  };
  const handleLinkChangeDateDesc = () => {
    setActiveLink(2);
  };
  const handleLinkChangeNameAsc = () => {
    setActiveLink(3);
  };
  const handleLinkChangeNameDesc = () => {
    setActiveLink(4);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        data-testid="sortIcon"
      >
        <MoreHorizIcon  />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "27ch",
            left: "1260px",
            marginTop: "55px",
          },
        }}
      >
        <div>
          <MenuItem className = {classes.sortByDate}
            style={{
              fontFamily: "poppins",
              fontSize: "14px",
              fontWeight: "500",
            }}
            data-testid="sortByDateMenuItem"
          >
            <Typography>Sort by date</Typography>
            <Grid container>
              <Grid item style={{ marginLeft: "46px" }}>
                <IconButton
                    onClick={handleLinkChangeDateAsc}
                    style={
                        activeLink === 1
                      ? { color: "#00008b", padding: "0" }
                      : { padding: "0" }
                    }
                  className={classes.icon}>
                  <ArrowUpwardIcon
                  onClick={() => props.handleSortByDateDesc(handleClose)}
                    style={{
                      height: "14px",
                      width: "14px",
                      objectFit: "contain",
                    }}
                    data-testid = "arrowUpwardIconForDate"
                  />
                </IconButton>
              </Grid>
              <Grid item style={{ marginLeft: "10px" }}>
                <IconButton
                  onClick={handleLinkChangeDateDesc}
                  style={
                    activeLink === 2
                      ? { color: "#00008b", padding: "0" }
                      : { padding: "0" }
                  }
                  className={classes.icon}
                >
                  <ArrowDownwardIcon
                  onClick={() => props.handleSortByDateAsc(handleClose)}
                    style={{
                      height: "14px",
                      width: "14px",
                      objectFit: "contain",
                    }}
                   data-testid = "arrowDownwardIconForDate"
                  />
                </IconButton>
              </Grid>
            </Grid>
          </MenuItem>

          <MenuItem className = {classes.sortByName}
            style={{
              fontFamily: "poppins",
              fontSize: "14px",
              fontWeight: "500",
            }}
            data-testid="sortByNameMenuItem"
          >
            <Typography>{Constants.SORT_BY_NAME}</Typography>
            <Grid container>
              <Grid item style={{ marginLeft: "40px" }}>
                <IconButton
                  onClick={handleLinkChangeNameAsc}
                  style={
                    activeLink === 3
                      ? { color: "#00008b", padding: "0" }
                      : { padding: "0" }
                  }
                  className={classes.icon}
                >
                  <ArrowUpwardIcon
                    onClick={() => props.handleSortByNameDesc(handleClose)}
                    style={{
                      height: "14px",
                      width: "14px",
                      objectFit: "contain",
                    }}
                    data-testid = "arrowUpwardIconForName"
                  />
                </IconButton>
              </Grid>
              <Grid item style={{ marginLeft: "10px" }}>
                <IconButton
                  onClick={handleLinkChangeNameDesc}
                  style={
                    activeLink === 4
                      ? { color: "#00008b", padding: "0" }
                      : { padding: "0" }
                  }
                  className={classes.icon}
                >
                  <ArrowDownwardIcon
                    onClick={() => props.handleSortByNameAsc(handleClose)}
                    style={{
                      height: "14px",
                      width: "14px",
                      objectFit: "contain",
                    }}
                    data-testid = "arrowDownwardIconForName"
                  />
                </IconButton>
              </Grid>
            </Grid>
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
};

export default SortMenu;
