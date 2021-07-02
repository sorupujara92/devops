package com.bootcamp4.taskmanagement.exception;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TaskErrorResponse {

    private int status;
    private String message;
    private long time;
}
