package com.bootcamp4.taskmanagement.dao;

import com.bootcamp4.taskmanagement.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface TaskRepository extends JpaRepository<Task, UUID> {

    Optional<List<Task>> findTasksByUserId(String userId);

}
