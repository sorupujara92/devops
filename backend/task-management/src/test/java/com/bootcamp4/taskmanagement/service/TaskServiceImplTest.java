package com.bootcamp4.taskmanagement.service;

import com.bootcamp4.taskmanagement.dao.TaskRepository;
import com.bootcamp4.taskmanagement.dto.TaskDTO;
import com.bootcamp4.taskmanagement.mapper.TaskMapper;
import com.bootcamp4.taskmanagement.model.Task;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.test.context.junit.jupiter.SpringExtension;


import java.util.*;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

@Slf4j
@ExtendWith(SpringExtension.class)

class TaskServiceImplTest {

    @InjectMocks
    private TaskServiceImpl taskService;

    @Mock
    private TaskRepository taskRepository;


    UUID id=UUID.randomUUID();
    String userId="auth0|5f040238652e5a0019ce42b3";

    private final Task task=new Task(id,userId,"Paying bills",new Date(3-5-2020),new Date(2-5-2020),"WEEKLY",9,
            new Date(2-5-2020),3,new Date(2-5-2020),true,true,true);
    private final TaskDTO taskDTO=new TaskDTO(id,userId,"Paying bills",new Date(3-5-2020),new Date(2-5-2020),"WEEKLY",9,
            new Date(2-5-2020),3,new Date(2-5-2020),true,true,true);

    @Test
    void saveTest() {

        log.info("{}",taskDTO);
        Mockito.when(taskRepository.save(task)).thenReturn(task);
        assertThat(taskService.save(task)).isEqualTo(id);
        verify(taskRepository).save(any(Task.class));

    }

    @Test
    void findAll() {

        List<Task> taskList = new ArrayList<Task>();
        Task task1=new Task(id,userId,"Paying bills",new Date(2-5-2020),new Date(2-5-2020),"WEEKLY",9,
                new Date(2-5-2020),3,new Date(2-5-2020),true,true,true);
        taskList.add(task);
        taskList.add(task1);
        Mockito.when(taskRepository.findAll()).thenReturn(taskList);
        assertEquals(2,taskService.findAll().size());
        verify(taskRepository).findAll();

    }

    @Test
    void findTaskByTaskId() {

        Mockito.when(taskRepository.findById(id)).thenReturn(Optional.of(task));
        assertEquals(task,taskService.findTaskByTaskId(id));
        verify(taskRepository).findById(id);
    }

    @Test
    void findTasksByUserId() {

        List<Task> taskList = new ArrayList<Task>();
        Task task1=new Task(id,userId,"Paying bills",new Date(2-5-2020),new Date(2-5-2020),"WEEKLY",9,
                new Date(2-5-2020),3,new Date(2-5-2020),true,true,true);
        Task task2=new Task(id,userId,"Paying bills",new Date(3-5-2020),new Date(2-5-2020),"WEEKLY",9,
                new Date(2-5-2020),3,new Date(2-5-2020),true,true,true);
        taskList.add(task1);
        taskList.add(task2);
        Mockito.when(taskRepository.findTasksByUserId(userId)).thenReturn(Optional.of(taskList));
        assertEquals(2,taskService.findTasksByUserId(userId).size());
        verify(taskRepository).findTasksByUserId(userId);
    }

    @Test
    void deleteById() {

        Mockito.when(taskRepository.findById(id)).thenReturn(Optional.of(task));
        assertEquals(taskService.deleteById(id),task);
        verify(taskRepository,times(1)).deleteById(id);
    }
}