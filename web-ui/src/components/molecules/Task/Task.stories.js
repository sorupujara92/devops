import React from "react";
import Task from "./Task";

export default {
  component: Task,
  title: "Task",
};

const taskData = {
  description: "Running",
  endDate: "1970-01-19T05:15:36.233+00:00",
};

export const TaskStory = () => <Task {...taskData}></Task>;
