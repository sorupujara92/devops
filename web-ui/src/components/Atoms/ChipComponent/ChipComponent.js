import React from "react";
import { Chip } from "@material-ui/core";

export default function ChipComponent(props) {
  return (
    <div>
      <Chip
        className={props.className}
        style={props.style}
        size={props.size}
        icon={props.icon}
        label={props.label}
      />
    </div>
  );
}
