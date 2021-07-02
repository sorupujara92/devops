import React from "react";
import ChipComponent from "./ChipComponent";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

export default {
  component: ChipComponent,
  title: "Chip",
};

const chipData = {
  className: {
    width: "201px",
    height: "25px",
    fontFamily: "poppins",
    borderRadius: "6px",
    fontSize: "14px",
    fontStretch: "normal",
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: "normal",
    letterSpacing: "0px",
    textAlign: "center",
    color: "#858585",
  },
  style: {
    marginLeft: "15px",
    marginTop: "11px",
    justifyContent: "center",
  },
  size: "small",
  icon: <AccessTimeIcon />,
  label: "May 5, 2:20 PM",
};

export const ChipStory = () => <ChipComponent {...chipData}></ChipComponent>;
