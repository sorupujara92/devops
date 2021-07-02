package com.bootcamp4.taskmanagement.service;

import com.bootcamp4.taskmanagement.model.Task;

import java.util.List;
import java.util.UUID;


public interface TaskService {

    public UUID save(Task task);

    public List<Task> findAll();

    public Task findTaskByTaskId(UUID taskId);

    public List<Task> findTasksByUserId(String userId);

    public Task deleteById(UUID taskId);
}
