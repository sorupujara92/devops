import React, { useState, useEffect } from "react";
import { Typography, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import InboxEmpty from "../../organisms/inbox-empty/inbox-empty";
import AddTaskForm from "../../organisms/AddTaskForm/AddTaskForm";
import * as Constants from "../../../constants";
import Task from "../../molecules/Task/Task";
import { api } from "../../../resources";
import SortMenu from "../../molecules/sortmenu/sortmenu";
import AddTaskButton from "../../Atoms/AddTaskButton/AddTaskButton";


const useStyles = makeStyles((theme) => ({
  heading: {
    height: "33px",
    paddingTop: "89px",
    paddingLeft: "238px",
    fontSize: "25px",
    color: "#333333",
    fontFamily: "Poppins",
    fontWeight: "400",
    lineHeight: "normal",
    letterSpacing: "0px",
    marginLeft: "36px",
  },
  PersonAddOutlinedIcon: {
    float: "right",
    marginRight: "8px",
    marginTop: "-10px",
  },
  AddTask: {
    color: "#27418b",
    marginTop: "45px",
    marginLeft: "33px",
    marginBottom: "40px",
    paddingLeft: "235px",
    fontSize: "14px",
    fontWeight: "bold",
    width: "fit-content",
    fontWidth: "64px",
    fontHeight: "20px",
    cursor: "pointer",
  },
  AddTaskForm: {
    marginLeft: "33px",
  },
  AddIcon: {
    width: "18px",
    height: "18px",
    marginTop: "34px",
    paddingRight: "30px",
  },
  AddTaskMargin: {
    marginTop: "35px",
  },
  AddTaskText: {
    fontWeight: "600",
  },
  hover1: {
    fontSize: "12px",
    color: "#ffffff",
  },
  hover2: {
    backgroundColor: "#eb893a",
    fontSize: "10px",
    color: "#ffffff",
  },
}));

const Inbox = () => {
  const classes = useStyles();

  const [hidden, setHidden] = useState(false);

  const [taskList, setTaskList] = useState([]);
  const [hideInbox, setHideInbox] = useState(false);
  const [updatedTaskList, setUpdatedTaskList] = useState([]);
  const [newTaskList, setNewTaskList] = useState([]);
  const [clickedOnSort, setClickedOnSort] = useState(false);

  var items = []
  items = []
         .concat(taskList)
          .sort((a, b) => {
            return Date(a.endDate) > Date(b.endDate) ? 1 : -1;
          })
          console.log(taskList);
  useEffect(() => {
      fetch(api.GET_TASKS,{
        method: "GET",
        withCredentials:true,
        credentials:'include',
        headers: { "Content-Type": "application/json",Authorization: 'Bearer '+ localStorage.getItem('accessToken')}})
        .then((response) => response.json())
        .then((data)=> {if (data.status===404)
        setTaskList([])
        else
        setTaskList(data)})
        .catch((error) => {
          console.log(error)
        });
    }, [updatedTaskList,newTaskList]);

    const handleSortByNameAsc = (handleClose) => {
        handleClose();
        items=taskList
            .sort((a, b) => {
              return a.description.toLowerCase() > b.description.toLowerCase() ? 1 : -1;
            })
        setNewTaskList(items);
        setClickedOnSort(true);
    }

    const handleSortByNameDesc = (handleClose) => {
       handleClose();
       items=taskList
            .sort((a, b) => {
              return a.description.toLowerCase() < b.description.toLowerCase() ? 1 : -1;
            })
       setNewTaskList(items);
       setClickedOnSort(true);
    };

  const handleSortByDateAsc = (handleClose) => {
          handleClose();
          items=taskList
              .sort((a, b) => {
                  var dateA = new Date(a.endDate);
                  var dateB = new Date(b.endDate);
                  console.log(dateA.getTime());
                 return dateB.getTime() - dateA.getTime();
               })
          setNewTaskList(items);
          setClickedOnSort(true);
      };

   const handleSortByDateDesc = (handleClose) => {
          handleClose();
          items=taskList
              .sort((a, b) => {
                  var dateA = new Date(a.endDate);
                  var dateB = new Date(b.endDate);
                 return dateA.getTime() - dateB.getTime();
               })
          setNewTaskList(items);
          setClickedOnSort(true);
      };

  return (
     <div>
      <Typography className={classes.heading} variant="h5" align="left">
        {Constants.INBOX}
        <div className={classes.PersonAddOutlinedIcon}>
          <IconButton color="grey">
            <Badge color="grey">
              <PersonAddOutlinedIcon></PersonAddOutlinedIcon>
            </Badge>
          </IconButton>

          <IconButton color="grey">
            <Badge color="grey">
              <SortMenu
                  handleSortByNameAsc={handleSortByNameAsc}
                  handleSortByNameDesc={handleSortByNameDesc}
                  handleSortByDateAsc={handleSortByDateAsc}
                  handleSortByDateDesc={handleSortByDateDesc}
              />
            </Badge>
          </IconButton>

          <Badge color="grey"></Badge>
        </div>
      </Typography>

      <div className={classes.AddTask} style={{ cursor: "pointer" }}>
        <AddTaskButton setHidden={setHidden} hidden={hidden} />
      </div>
      <div>
        <AddTaskForm
          className={classes.AddTaskForm}
          hidden={hidden}
          setHidden={setHidden}
          hideInbox={hideInbox}
          setHideInbox={setHideInbox}
          updatedTaskList={updatedTaskList}
          setUpdatedTaskList={setUpdatedTaskList}
        ></AddTaskForm>
      </div>
      {console.log(items+">>>"+items.length)}

      {items.length !== 0 ? (
        <CardContent style={{ marginTop: "-40px",marginLeft:"255px" }}>
        {clickedOnSort ? newTaskList.map((task, index) => (
           <Task
             key={index}
             description={task.description}
             endDate={task.endDate}
           ></Task>)) :
           items.map((task, index) => (
                    <Task
                      key={index}
                      description={task.description}
                      endDate={task.endDate}
                    ></Task>)) }
        </CardContent>
      ) : (
        !hidden && <InboxEmpty />
      )}
      {console.log(items+"<<<<<"+items.length)}

    </div>
  );
};

export default Inbox;
