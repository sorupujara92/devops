import React from "react";
import Calendar from "./Calendar"
import { action } from "@storybook/addon-actions";

export default {
    component: Calendar,
    title: "Date Picker",
};

const calendarProps={
    value: Date.now(),
    onChange: action("Date selected"),
}

export const CalendarStory=()=><Calendar {...calendarProps}></Calendar>