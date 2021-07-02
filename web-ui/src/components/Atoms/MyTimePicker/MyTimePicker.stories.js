import React from "react";
import MyTimePicker from "./MyTimePicker";
import { action } from "@storybook/addon-actions";

export default {
  component: MyTimePicker,
  title: "TimePicker",
};

const timePickerData = {
  Value: "11:00 AM",
  onChane: action('time changes'),
};

export const TimePicker = () => <MyTimePicker {...timePickerData}/>
