package com.bootcamp4.taskmanagement.controller;

import com.bootcamp4.taskmanagement.dto.TaskDTO;
import com.bootcamp4.taskmanagement.exception.TaskNotFoundException;
import com.bootcamp4.taskmanagement.mapper.TaskMapper;
import com.bootcamp4.taskmanagement.model.Task;
import com.bootcamp4.taskmanagement.service.TaskService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@Slf4j
@RequestMapping
@CrossOrigin
public class TaskController {


    private final TaskService taskService;

    @Autowired
    private TaskMapper taskMapper;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }


    /**
     *<p>This method will fetch all tasks that are present in the database (due date)</p>
     * @return taskDTOList
     */
    @CrossOrigin
    @GetMapping(value = "/tasks", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<TaskDTO>> fetchAllTask(JwtAuthenticationToken token) {




        List<Task> taskList=taskService.findTasksByUserId("1234");
        if(taskList==null){
            throw new TaskNotFoundException("Invalid User Id");
        }
//        List<Task> taskList=taskService.findAll();

        return ResponseEntity.ok().body(taskList.stream().map(task -> taskMapper.convertToDto(task)).collect(Collectors.toList()));
    }

    /**
     * <p>This method returns the task with the given task Id</p>
     * @param taskId It is Id that every task posses
     * @return taskDTO
     */
    @CrossOrigin
    @GetMapping(value = "/tasks/{taskId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<TaskDTO> fetchTaskByTaskId( @PathVariable UUID taskId) {

        Task task=taskService.findTaskByTaskId(taskId);
        if(task==null){
            throw new TaskNotFoundException("User Id not found");
        }

        return ResponseEntity.ok().body(taskMapper.convertToDto(task));

    }


    /**
     * <p>This method is used to fetch all tasks that belongs to the user </p>
     * @param userId It is the Id of the user
     * @return List of TaskDTOs
     */
    @CrossOrigin
    @GetMapping(value = "/users/{userId}/tasks/",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<TaskDTO>> fetchTasksByUserId( @PathVariable String userId) {

        List<Task> tasks=taskService.findTasksByUserId(userId);
        if(tasks==null){
            throw new TaskNotFoundException("User Id not found");
        }

        return ResponseEntity.ok().body(tasks.stream().map(task -> taskMapper.convertToDto(task)).collect(Collectors.toList()));
    }

    /**
     * <p>This method add tasks to the list</p>
     * @param taskDTO It is the task that is to be added
     * @return String
     */
    @CrossOrigin
    @PostMapping(value = "/tasks", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> addTask( JwtAuthenticationToken token,@RequestBody TaskDTO taskDTO) {

        Task task=taskMapper.convertToEntity(taskDTO);

        task.setUserId("1234");

        log.info("in addtask");

        taskService.save(task);

        return ResponseEntity.ok("Task added successfully");
    }

    /**
     * <p>This method updates the task that is already present</p>
     * @param taskDTO It is updated task
     * @param taskId It is the taskId of task that has to be updated
     * @return String
     */
    @CrossOrigin
    @PutMapping(value = "/tasks/{taskId}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> updateTask(@RequestBody TaskDTO taskDTO, @PathVariable UUID taskId){

        Task task=taskService.findTaskByTaskId(taskId);

        if(task==null){
            log.error("Not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Task update unsuccessfully, Invalid taskId");
        }

        taskDTO.setId(taskId);
        taskService.save(taskMapper.convertToEntity(taskDTO));

        return ResponseEntity.ok("Task updated successfully");
    }

    /**
     *
     * <p>This method deletes the tasks from the database</p>
     * @param taskId It is id of the task that is to be deleted
     * @return String
     */
    @CrossOrigin
    @DeleteMapping(value = "/tasks/{taskId}")
    public ResponseEntity<String> deleteTask(@PathVariable UUID taskId) {

        Task task=taskService.deleteById(taskId);
        if(task==null){

            throw new TaskNotFoundException("The taskId of the task to be deleted s not found");
        }
        log.info("Task with {} deleted successfully",taskId);
        return ResponseEntity.ok("Task deleted successfully");
    }



}