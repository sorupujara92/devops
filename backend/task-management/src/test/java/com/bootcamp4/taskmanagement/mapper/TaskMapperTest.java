package com.bootcamp4.taskmanagement.mapper;

import com.bootcamp4.taskmanagement.dto.TaskDTO;
import com.bootcamp4.taskmanagement.model.Task;
import java.util.Date;
import java.util.UUID;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.TestInstance;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

@Slf4j
@RunWith(SpringJUnit4ClassRunner.class)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class TaskMapperTest {


  private ModelMapper fModelMapper = new ModelMapper();

  private TaskMapper taskMapper = new TaskMapper(fModelMapper);

  UUID id=UUID.randomUUID();
  String userId="auth0|5f040238652e5a0019ce42b3";

  @BeforeAll
  void init() {
    MockitoAnnotations.initMocks(this);
    taskMapper = new TaskMapper(fModelMapper);
  }

  private final Task task=new Task(id,userId,"Running",new Date(3-5-2020),new Date(2-5-2020),"WEEKLY",9,
          new Date(2-5-2020),3,new Date(2-5-2020),true,true,true);
  private final TaskDTO taskDTO=new TaskDTO(id,userId,"Running",new Date(3-5-2020),new Date(2-5-2020),"WEEKLY",9,
          new Date(2-5-2020),3,new Date(2-5-2020),true,true,true);

  @Test
  public void when_convertToDto_is_called_should_return_dto(){
    TaskDTO taskDTO1=taskMapper.convertToDto(task);
    assertThat(taskDTO).isEqualToComparingFieldByField(taskDTO1);
  }

  @Test
  public void when_convertToEntity_is_called_should_return_entity(){
    Task task1=taskMapper.convertToEntity(taskDTO);
    assertThat(task).isEqualToComparingFieldByField(task1);


  }

}