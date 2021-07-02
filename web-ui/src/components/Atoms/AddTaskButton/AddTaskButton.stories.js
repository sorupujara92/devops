import React from "react";
import AddTaskButton from "./AddTaskButton"
import { action } from "@storybook/addon-actions";

export default {
    component: AddTaskButton,
    title: "AddButton",
};

const buttonData={
    hidden: "false",
    setHidden: action("Button clicked"),
}

export const AddButtonStory=()=><AddTaskButton {...buttonData}></AddTaskButton>