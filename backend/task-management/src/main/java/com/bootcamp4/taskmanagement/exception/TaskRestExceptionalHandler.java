package com.bootcamp4.taskmanagement.exception;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;

@RestController
@ControllerAdvice
@Slf4j

public class TaskRestExceptionalHandler {

    @ExceptionHandler(value = TaskNotFoundException.class)
    public ResponseEntity<TaskErrorResponse> handleException(TaskNotFoundException exc){

        TaskErrorResponse error=new TaskErrorResponse();

        error.setStatus(HttpStatus.NOT_FOUND.value());
        error.setMessage(exc.getMessage());
        error.setTime(System.currentTimeMillis());
        log.info(error.getMessage());

        return new ResponseEntity<>(error,HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler
    public ResponseEntity<TaskErrorResponse> handleException(Exception exc){

        TaskErrorResponse error=new TaskErrorResponse();

        error.setStatus(HttpStatus.BAD_REQUEST.value());
        error.setMessage(exc.getMessage());
        error.setTime(System.currentTimeMillis());
        log.info(exc.getMessage());

        return new ResponseEntity<>(error,HttpStatus.BAD_REQUEST);
    }


}
