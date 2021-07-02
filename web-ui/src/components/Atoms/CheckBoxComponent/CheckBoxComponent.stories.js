import React from "react";
import CheckBoxComponent from "./CheckBoxComponent";

export default {
  component: CheckBoxComponent,
  title: "Checkbox",
};

const checkboxDetails = {
  size: "small",
  color: "primary",
  inputProps: { "aria-label": "secondary checkbox" },
  style: { marginTop: "0px", justifyContent: "center" },
};

export const CheckboxStory = () => (
  <CheckBoxComponent {...checkboxDetails}></CheckBoxComponent>
);
