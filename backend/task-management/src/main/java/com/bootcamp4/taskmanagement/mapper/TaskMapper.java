package com.bootcamp4.taskmanagement.mapper;

import com.bootcamp4.taskmanagement.dto.TaskDTO;
import com.bootcamp4.taskmanagement.model.Task;
import org.modelmapper.ModelMapper;

public class TaskMapper {

    private final ModelMapper modelMapper;

    public TaskMapper(final ModelMapper modelMapper) {
      this.modelMapper = modelMapper;
    }

    public TaskDTO convertToDto(Task task) {
        return modelMapper.map(task, TaskDTO.class);
    }

    public Task convertToEntity(TaskDTO taskDTO){
        return modelMapper.map(taskDTO, Task.class);
    }

}
