package com.bootcamp4.taskmanagement.service;

import com.bootcamp4.taskmanagement.dao.TaskRepository;
import com.bootcamp4.taskmanagement.model.Task;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Slf4j
@Service
@Transactional
public class TaskServiceImpl implements TaskService{

    @Autowired
    private TaskRepository taskRepository;

    @Override
    public UUID save(Task task) {

        Task savedTask= taskRepository.save(task);
        log.info("Task created at {}",savedTask.getCreatedAt());
        return savedTask.getId();
    }

    @Override
    public List<Task> findAll() {

        List<Task> tasks;
        tasks = taskRepository.findAll();

        return tasks;
    }

    @Override
    public Task findTaskByTaskId(UUID taskId) {

        Optional<Task> task=taskRepository.findById(taskId);

        return task.orElse(null);

    }

    @Override
    public List<Task> findTasksByUserId(String userId) {

        Optional<List<Task>> tasks=taskRepository.findTasksByUserId(userId);

        return tasks.orElse(null);
    }


    @Override
    public Task deleteById(UUID taskId) {

        Optional<Task> task=taskRepository.findById(taskId);
        if(!task.isPresent()){
            return null;
        }
        taskRepository.deleteById(taskId);

        return task.get();
    }
}
