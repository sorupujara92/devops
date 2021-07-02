package com.bootcamp4.taskmanagement.exception;


public class TaskNotFoundException extends RuntimeException {


    public TaskNotFoundException(String message){
        super(message);
    }


}
