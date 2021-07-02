import React from "react";
import { Checkbox } from "@material-ui/core";

export default function CheckBoxComponent(props) {
  return (
    <div id="checkbox">
      <Checkbox
        id="checkbox"
        size={props.size}
        color={props.color}
        inputProps={props.inputProps}
        style={props.style}
      />
    </div>
  );
}
