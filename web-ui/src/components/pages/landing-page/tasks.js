import React from "react";
import PrimarySearchAppBar from "../Homepage/appbar";
import MiniDrawer from "../Homepage/drawer";
import Inbox from "../inbox-page/inbox-page";

const Tasks = () => {
  return (
    <div className="Tasks">
      <PrimarySearchAppBar />
      <MiniDrawer />
      <Inbox />
    </div>
  );
};

export default Tasks;
