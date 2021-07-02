package com.bootcamp4.taskmanagement.controller;

import com.bootcamp4.taskmanagement.dto.TaskDTO;
import com.bootcamp4.taskmanagement.mapper.TaskMapper;
import com.bootcamp4.taskmanagement.model.Task;
import com.bootcamp4.taskmanagement.service.TaskService;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@Slf4j
@WebMvcTest(TaskController.class)
@AutoConfigureMockMvc(addFilters = false)
class TaskControllerTest {

    @MockBean
    private TaskService taskService;

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private TaskMapper taskMapper;



    private final UUID id= UUID.fromString("7da9ae47-2152-488b-a45b-060dba388846");
    private final String userId= "4d8e9546-53f2-4e1e-9e45-b1d1de7a6fda";
//    @Test
//    void when_fetchAllTask_is_called_shouldReturn_task_list() throws Exception {
//
//        List<Task> taskList = new ArrayList<Task>();
//
//        String expected = "[ {\"id\":, \"userId\":2,\"description\":\"paying bills\", \"endDate\":\"1584168875\", \"completionDate\":\"1564894816\", \"frequency\":\"WEEKLY\", \"createdBy\":9, \"createdAt\":\"1561020758\", \"modifiedBy\":3, \"modifiedAt\":\"1565672149\",\"isDeleted\":true, \"isArchived\":false,\"isCompleted\":false }]";
//        Task task1=new Task(id,userId,"Paying bills",new Date(2-5-2020),new Date(2-5-2020),"WEEKLY",9,new Date(2-5-2020),3,new Date(2-5-2020),true,true,true);
//        TaskDTO taskDTO=new TaskDTO(id,userId,"Paying bills",new Date(2-5-2020),new Date(2-5-2020),"WEEKLY",9,new Date(2-5-2020),3,new Date(2-5-2020),true,true,true);
//        when(taskMapper.convertToDto(task1)).thenReturn(taskDTO);
//        taskList.add(task1);
//
//        when(taskService.findTasksByUserId(userId)).thenReturn(taskList);
//        String body="[{\"id\":\"7da9ae47-2152-488b-a45b-060dba388846\",\"userId\":\"4d8e9546-53f2-4e1e-9e45-b1d1de7a6fda\",\"description\":\"Paying bills\",\"endDate\":\"1969-12-31T23:59:57.977+00:00\",\"completionDate\":\"1969-12-31T23:59:57.977+00:00\",\"frequency\":\"WEEKLY\",\"createdBy\":9,\"createdAt\":\"1969-12-31T23:59:57.977+00:00\",\"modifiedBy\":3,\"modifiedAt\":\"1969-12-31T23:59:57.977+00:00\",\"isDeleted\":true,\"isArchived\":true,\"isCompleted\":true}]";
//        RequestBuilder request= MockMvcRequestBuilders
//                .get("/tasks")
//                .header("Authorization", "Bearer "+"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im9GZVBNazZaMnI3T0c3SGJCRG9NQiJ9.eyJpc3MiOiJodHRwczovL2Jvb3RjYW1wLXRvZG8tdXNlci51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWYwNDAyMzg2NTJlNWEwMDE5Y2U0MmIzIiwiYXVkIjoiaHR0cHM6Ly9ib290Y2FtcC10b2RvLXVzZXIudXMuYXV0aDAuY29tL2FwaS92Mi8iLCJpYXQiOjE1OTQ3OTk5ODIsImV4cCI6MTU5NDg4NjM4MiwiYXpwIjoidlFJWWpucGR1TjBzc0lBUnRDR08ySkxjZHQyeGNaMm0iLCJzY29wZSI6InJlYWQ6Y3VycmVudF91c2VyIHVwZGF0ZTpjdXJyZW50X3VzZXJfbWV0YWRhdGEgZGVsZXRlOmN1cnJlbnRfdXNlcl9tZXRhZGF0YSBjcmVhdGU6Y3VycmVudF91c2VyX21ldGFkYXRhIGNyZWF0ZTpjdXJyZW50X3VzZXJfZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpjdXJyZW50X3VzZXJfZGV2aWNlX2NyZWRlbnRpYWxzIHVwZGF0ZTpjdXJyZW50X3VzZXJfaWRlbnRpdGllcyIsImd0eSI6InBhc3N3b3JkIn0.q05reUKdhQ_ChdZUT5208r-jyoVmbwRVtZ1CgQZvjFu_10UvLjkla-GkipufqBmmZxxIK30o1IymtTgkxJgz6P7fah3yfNB6qVATsnETBuDfG3gMzmPNuNTU9cEHWlC1CCV_WYlbFpIQK5MZCsA8-bAdDIbCHmDHblT6QTkVv3WREGyFY52u8H7UF3dhdCgA3jjX9VYrTvTbmtJ3XPh5vmCaGWcYHqoZ12xkLJpfVmxPCLW_C_LyRP3TMUtxC08G-_qQk8l4K86Lv_7Vbpo95cKeMqF-KUs8PUkiPyJBvO6P-oviENQMPzWVGDO9EBnxwhIrQ8CQ8f8vTiN0Td4uzQ")
//                .accept(MediaType.APPLICATION_JSON_VALUE);
//        MvcResult result=mockMvc.perform(request)
//                .andExpect(status().isOk())
//                .andReturn();
//        assertThat(body).isEqualTo(result.getResponse().getContentAsString());
//        assertThat(result.getResponse().getStatus()).isEqualTo(200);
//    }



    @Test
    void when_fetchTasksByUserId_is_called_should_return_User_tasks() throws Exception {
        List<Task> taskList = new ArrayList<Task>();
        Task task1=new Task(id,userId,"Paying bills",new Date(2-5-2020),new Date(2-5-2020),"WEEKLY",9,
                new Date(2-5-2020),3,new Date(2-5-2020),true,true,true);
        TaskDTO taskDTO=new TaskDTO(id,userId,"Paying bills",new Date(2-5-2020),new Date(2-5-2020),"WEEKLY",9,
                new Date(2-5-2020),3,new Date(2-5-2020),true,true,true);
        Task task2=new Task(id,userId,"completing assignments",new Date(3-5-2020),new Date(2-5-2020),"WEEKLY",9,
                new Date(2-5-2020),3,new Date(2-5-2020),true,true,true);
        taskList.add(task1);
        taskList.add(task2);

        when(taskMapper.convertToDto(task1)).thenReturn(taskDTO);
        when(taskService.findTasksByUserId(userId)).thenReturn(taskList);
        String body="[{\"id\":\"7da9ae47-2152-488b-a45b-060dba388846\",\"userId\":\"4d8e9546-53f2-4e1e-9e45-b1d1de7a6fda\",\"description\":\"Paying bills\",\"endDate\":\"1969-12-31T23:59:57.977+00:00\",\"completionDate\":\"1969-12-31T23:59:57.977+00:00\",\"frequency\":\"WEEKLY\",\"createdBy\":9,\"createdAt\":\"1969-12-31T23:59:57.977+00:00\",\"modifiedBy\":3,\"modifiedAt\":\"1969-12-31T23:59:57.977+00:00\",\"isDeleted\":true,\"isArchived\":true,\"isCompleted\":true},null]";
        RequestBuilder request= MockMvcRequestBuilders
                .get("/users/"+userId+"/tasks/")
                .accept(MediaType.APPLICATION_JSON_VALUE);
        MvcResult result=mockMvc.perform(request)
                .andExpect(status().isOk())
                .andReturn();
        assertThat(body).isEqualTo(result.getResponse().getContentAsString());
        assertThat(result.getResponse().getStatus()).isEqualTo(200);


    }

    @Test
    void when_fetchTasksByUserId_is_called_with_wrongId_should_return_exception() throws Exception {
        Task task1=new Task(id,userId,"Paying bills",new Date(2-5-2020),new Date(2-5-2020),"WEEKLY",9,
                new Date(2-5-2020),3,new Date(2-5-2020),true,true,true);
        TaskDTO taskDTO=new TaskDTO(id,userId,"Paying bills",new Date(2-5-2020),new Date(2-5-2020),"WEEKLY",9,
                new Date(2-5-2020),3,new Date(2-5-2020),true,true,true);

        when(taskMapper.convertToDto(task1)).thenReturn(taskDTO);
        when(taskService.findTasksByUserId(userId)).thenReturn(null);
        RequestBuilder request= MockMvcRequestBuilders
                .get("/users/"+userId+"/tasks/")
                .accept(MediaType.APPLICATION_JSON_VALUE);
        MvcResult result=mockMvc.perform(request)
                .andExpect(status().isNotFound())
                .andReturn();
        log.info("{}",result.getResponse().getStatus());
        log.info("{}",result.getResponse().getContentAsString());
        String body="{\"status\":404,\"message\":\"User Id not found\"}";
        JSONAssert.assertEquals(body,result.getResponse().getContentAsString(),false);
        assertThat(result.getResponse().getStatus()).isEqualTo(404);



    }

    @Test
    void when_fetchTaskByTaskId_is_called_should_return_task() throws Exception {

        Task task=new Task(id,userId,"Paying bills",new Date(2-5-2020),new Date(2-5-2020),"WEEKLY",9,new Date(2-5-2020),3,new Date(2-5-2020),true,true,true);
        TaskDTO taskDTO=new TaskDTO(id,userId,"Paying bills",new Date(2-5-2020),new Date(2-5-2020),"WEEKLY",9,
                new Date(2-5-2020),3,new Date(2-5-2020),true,true,true);

        when(taskMapper.convertToDto(task)).thenReturn(taskDTO);
        when(taskService.findTaskByTaskId(id)).thenReturn(task);
        String body="{\"id\":\"7da9ae47-2152-488b-a45b-060dba388846\",\"userId\":\"4d8e9546-53f2-4e1e-9e45-b1d1de7a6fda\",\"description\":\"Paying bills\",\"endDate\":\"1969-12-31T23:59:57.977+00:00\",\"completionDate\":\"1969-12-31T23:59:57.977+00:00\",\"frequency\":\"WEEKLY\",\"createdBy\":9,\"createdAt\":\"1969-12-31T23:59:57.977+00:00\",\"modifiedBy\":3,\"modifiedAt\":\"1969-12-31T23:59:57.977+00:00\",\"isDeleted\":true,\"isArchived\":true,\"isCompleted\":true}";
        RequestBuilder request= MockMvcRequestBuilders
                .get("/tasks/"+id)
                .accept(MediaType.APPLICATION_JSON_VALUE);
        MvcResult result=mockMvc.perform(request)
                .andExpect(status().isOk())
                .andReturn();
        assertThat(body).isEqualTo(result.getResponse().getContentAsString());
        assertThat(result.getResponse().getStatus()).isEqualTo(200);

    }

    @Test
    void when_fetchTaskByTaskId_is_called_should_return_Exception_if_invalid_taskId() throws Exception {

        Task task=new Task(id,userId,"Paying bills",new Date(2-5-2020),new Date(2-5-2020),"WEEKLY",9,new Date(2-5-2020),3,new Date(2-5-2020),true,true,true);
        TaskDTO taskDTO=new TaskDTO(id,userId,"Paying bills",new Date(2-5-2020),new Date(2-5-2020),"WEEKLY",9,
                new Date(2-5-2020),3,new Date(2-5-2020),true,true,true);

        when(taskMapper.convertToDto(task)).thenReturn(taskDTO);

        when(taskService.findTaskByTaskId(id)).thenReturn(null);
        RequestBuilder request= MockMvcRequestBuilders
                .get("/tasks/"+id)
                .accept(MediaType.APPLICATION_JSON_VALUE);
        MvcResult result=mockMvc.perform(request)
                .andExpect(status().isNotFound())
                .andReturn();
        log.info("{}",result.getResponse().getStatus());
        log.info("{}",result.getResponse().getContentAsString());
        String body="{\"status\":404,\"message\":\"User Id not found\"}";
        JSONAssert.assertEquals(body,result.getResponse().getContentAsString(),false);
        assertThat(result.getResponse().getStatus()).isEqualTo(404);

    }


//    @Test
//    void when_addTasks_is_called_should_return_successful_message() throws Exception {
//        Task task1=new Task(id,userId,"Paying bills",new Date(2-5-2020),new Date(2-5-2020),"WEEKLY",9,
//                new Date(2-5-2020),3,new Date(2-5-2020),true,true,true);
//        TaskDTO taskDTO=new TaskDTO(id,userId,"Paying bills",new Date(2-5-2020),new Date(2-5-2020),"WEEKLY",9,
//                new Date(2-5-2020),3,new Date(2-5-2020),true,true,true);
//
//        when(taskMapper.convertToEntity(taskDTO)).thenReturn(task1);
//        when(taskMapper.convertToDto(task1)).thenReturn(taskDTO);
//        String body="Task added successfully";
//        String content="{\"id\":\"7da9ae47-2152-488b-a45b-060dba388846\",\"userId\":\"4d8e9546-53f2-4e1e-9e45-b1d1de7a6fda\",\"description\":\"Paying bills\",\"endDate\":\"1969-12-31T23:59:57.977+00:00\",\"completionDate\":\"1969-12-31T23:59:57.977+00:00\",\"frequency\":\"WEEKLY\",\"createdBy\":9,\"createdAt\":\"1969-12-31T23:59:57.977+00:00\",\"modifiedBy\":3,\"modifiedAt\":\"1969-12-31T23:59:57.977+00:00\",\"isDeleted\":true,\"isArchived\":true,\"isCompleted\":true}";
//
//        task1.setUserId(userId);
//        when(taskService.save(task1)).thenReturn(task1.getId());
//        RequestBuilder request= MockMvcRequestBuilders
//                .post("/tasks")
//                .header("Authorization", "Bearer "+"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im9GZVBNazZaMnI3T0c3SGJCRG9NQiJ9.eyJpc3MiOiJodHRwczovL2Jvb3RjYW1wLXRvZG8tdXNlci51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWYwNDAyMzg2NTJlNWEwMDE5Y2U0MmIzIiwiYXVkIjoiaHR0cHM6Ly9ib290Y2FtcC10b2RvLXVzZXIudXMuYXV0aDAuY29tL2FwaS92Mi8iLCJpYXQiOjE1OTQ3OTk5ODIsImV4cCI6MTU5NDg4NjM4MiwiYXpwIjoidlFJWWpucGR1TjBzc0lBUnRDR08ySkxjZHQyeGNaMm0iLCJzY29wZSI6InJlYWQ6Y3VycmVudF91c2VyIHVwZGF0ZTpjdXJyZW50X3VzZXJfbWV0YWRhdGEgZGVsZXRlOmN1cnJlbnRfdXNlcl9tZXRhZGF0YSBjcmVhdGU6Y3VycmVudF91c2VyX21ldGFkYXRhIGNyZWF0ZTpjdXJyZW50X3VzZXJfZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpjdXJyZW50X3VzZXJfZGV2aWNlX2NyZWRlbnRpYWxzIHVwZGF0ZTpjdXJyZW50X3VzZXJfaWRlbnRpdGllcyIsImd0eSI6InBhc3N3b3JkIn0.q05reUKdhQ_ChdZUT5208r-jyoVmbwRVtZ1CgQZvjFu_10UvLjkla-GkipufqBmmZxxIK30o1IymtTgkxJgz6P7fah3yfNB6qVATsnETBuDfG3gMzmPNuNTU9cEHWlC1CCV_WYlbFpIQK5MZCsA8-bAdDIbCHmDHblT6QTkVv3WREGyFY52u8H7UF3dhdCgA3jjX9VYrTvTbmtJ3XPh5vmCaGWcYHqoZ12xkLJpfVmxPCLW_C_LyRP3TMUtxC08G-_qQk8l4K86Lv_7Vbpo95cKeMqF-KUs8PUkiPyJBvO6P-oviENQMPzWVGDO9EBnxwhIrQ8CQ8f8vTiN0Td4uzQ")
//                .contentType(MediaType.APPLICATION_JSON_VALUE)
//                .accept(MediaType.APPLICATION_JSON_VALUE)
//                .content(content)
//                .characterEncoding("utf-8");
//        MvcResult result=mockMvc.perform(request)
//                .andExpect(status().isOk())
//                .andReturn();
//        log.info(">>>{}",result.getResponse().getContentAsString());
//        assertThat(body).isEqualTo(result.getResponse().getContentAsString());
//        assertThat(result.getResponse().getStatus()).isEqualTo(200);
//    }





    @Test
    void when_updateTask_is_called_it_should_update_task_successfully() throws Exception {
        Task task1=new Task(id,userId,"completing assignments",new Date(2-5-2020),new Date(2-5-2020),"WEEKLY",9,
                new Date(2-5-2020),3,new Date(2-5-2020),true,true,true);
        String body="Task updated successfully";
        String content="{\"id\":\"7da9ae47-2152-488b-a45b-060dba388846\",\"userId\":\"4d8e9546-53f2-4e1e-9e45-b1d1de7a6fda\",\"description\":\"completing assignments\",\"endDate\":\"1969-12-31T23:59:57.977+00:00\",\"completionDate\":\"1969-12-31T23:59:57.977+00:00\",\"frequency\":\"WEEKLY\",\"createdBy\":9,\"createdAt\":\"1969-12-31T23:59:57.977+00:00\",\"modifiedBy\":3,\"modifiedAt\":\"1969-12-31T23:59:57.977+00:00\",\"isDeleted\":true,\"isArchived\":true,\"isCompleted\":true}";
        TaskDTO taskDTO=new TaskDTO(id,userId,"Paying bills",new Date(2-5-2020),new Date(2-5-2020),"WEEKLY",9,
                new Date(2-5-2020),3,new Date(2-5-2020),true,true,true);

        when(taskMapper.convertToDto(task1)).thenReturn(taskDTO);
        when(taskService.findTaskByTaskId(id)).thenReturn(task1);
        when(taskService.save(task1)).thenReturn(task1.getId());

        RequestBuilder request= MockMvcRequestBuilders
                .put("/tasks/"+id)
                .contentType(MediaType.APPLICATION_JSON_VALUE)
                .content(content);
        MvcResult result=mockMvc.perform(request)
                .andExpect(status().isOk())
                .andReturn();
        log.info("{}",result.getResponse().getContentAsString());
        assertThat(body).isEqualTo(result.getResponse().getContentAsString());
        assertThat(result.getResponse().getStatus()).isEqualTo(200);
        log.info("{}",result.getResponse().getStatus());

    }

    @Test
    void when_updateTask_is_called_with_invalid_task_id() throws Exception {

        String body="Task update unsuccessfully, Invalid taskId";
        String content="{\"id\":\"7da9ae47-2152-488b-a45b-060dba388846\",\"userId\":\"4d8e9546-53f2-4e1e-9e45-b1d1de7a6fda\",\"description\":\"completing assignments\",\"endDate\":\"1969-12-31T23:59:57.977+00:00\",\"completionDate\":\"1969-12-31T23:59:57.977+00:00\",\"frequency\":\"WEEKLY\",\"createdBy\":9,\"createdAt\":\"1969-12-31T23:59:57.977+00:00\",\"modifiedBy\":3,\"modifiedAt\":\"1969-12-31T23:59:57.977+00:00\",\"isDeleted\":true,\"isArchived\":true,\"isCompleted\":true}";
        Task task1=new Task(id,userId,"completing assignments",new Date(2-5-2020),new Date(2-5-2020),"WEEKLY",9,
                new Date(2-5-2020),3,new Date(2-5-2020),true,true,true);
        TaskDTO taskDTO=new TaskDTO(id,userId,"Paying bills",new Date(2-5-2020),new Date(2-5-2020),"WEEKLY",9,
                new Date(2-5-2020),3,new Date(2-5-2020),true,true,true);

        when(taskMapper.convertToDto(task1)).thenReturn(taskDTO);
        when(taskService.findTaskByTaskId(id)).thenReturn(null);
        RequestBuilder request= MockMvcRequestBuilders
                .put("/tasks/"+id)
                .contentType(MediaType.APPLICATION_JSON_VALUE)
                .content(content);
        MvcResult result=mockMvc.perform(request)
                .andExpect(status().isNotFound())
                .andReturn();
        log.info("{}",result.getResponse().getContentAsString());
        assertThat(body).isEqualTo(result.getResponse().getContentAsString());
        assertThat(result.getResponse().getStatus()).isEqualTo(404);
        log.info("{}",result.getResponse().getStatus());
    }

    @Test
    void deleteTask() throws Exception {
        Task task1=new Task(id,userId,"completing assignments",new Date(2-5-2020),new Date(2-5-2020),"WEEKLY",9,
                new Date(2-5-2020),3,new Date(2-5-2020),true,true,true);
        TaskDTO taskDTO=new TaskDTO(id,userId,"Paying bills",new Date(2-5-2020),new Date(2-5-2020),"WEEKLY",9,
                new Date(2-5-2020),3,new Date(2-5-2020),true,true,true);

        when(taskMapper.convertToDto(task1)).thenReturn(taskDTO);
        String body="Task deleted successfully";
        when(taskService.deleteById(id)).thenReturn(task1);
        RequestBuilder request= MockMvcRequestBuilders
                .delete("/tasks/"+id);
        MvcResult result=mockMvc.perform(request)
                .andExpect(status().isOk())
                .andReturn();
        log.info("{}",result.getResponse().getContentAsString());
        assertThat(body).isEqualTo(result.getResponse().getContentAsString());
        assertThat(result.getResponse().getStatus()).isEqualTo(200);
        log.info("{}",result.getResponse().getStatus());
    }

    @Test
    void when_deleteTask_is_called_with_invalid_task_id_should_return_exception() throws Exception {

        Task task1=new Task(id,userId,"completing assignments",new Date(2-5-2020),new Date(2-5-2020),"WEEKLY",9,
                new Date(2-5-2020),3,new Date(2-5-2020),true,true,true);
        TaskDTO taskDTO=new TaskDTO(id,userId,"Paying bills",new Date(2-5-2020),new Date(2-5-2020),"WEEKLY",9,
                new Date(2-5-2020),3,new Date(2-5-2020),true,true,true);

        when(taskMapper.convertToDto(task1)).thenReturn(taskDTO);

        String body="{\"status\":404,\"message\":\"The taskId of the task to be deleted s not found\"}";
        when(taskService.deleteById(id)).thenReturn(null);
        RequestBuilder request= MockMvcRequestBuilders
                .delete("/tasks/"+id);
        MvcResult result=mockMvc.perform(request)
                .andExpect(status().isNotFound())
                .andReturn();
        JSONAssert.assertEquals(body,result.getResponse().getContentAsString(),false);
        assertThat(result.getResponse().getStatus()).isEqualTo(404);

    }
}