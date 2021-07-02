package com.bootcamp4.taskmanagement.model;


import lombok.*;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@ToString
@Entity
@Table(name="task")
public class Task {

    @Id
    @Column(name="id", updatable = false, nullable = false)
    @ToString.Exclude
    private UUID id;

    @Column(name="user_id",updatable = false)
    private String userId;

    @Column(name="description",updatable = true,nullable = false)
    private String description;

    @Column(name="end_date",updatable = true)
    private Date endDate;


    @Column(name="completion_date",updatable = true)
    private Date completionDate;

    @Column(name="frequency",updatable = true)
    private String frequency;

    @Column(name="created_by",updatable = true)
    private int createdBy;

    @Column(name="created_at",updatable = false)
    private Date createdAt;

    @Column(name="modified_by",updatable = true)
    private int modifiedBy;

    @Column(name="modified_at",updatable = true)
    private Date modifiedAt;

    @Column(name="is_deleted",updatable = true)
    private Boolean isDeleted;

    @Column(name="is_archived",updatable = true)
    private Boolean isArchived;

    @Column(name="is_completed",updatable = true)
    private Boolean isCompleted;

    @PrePersist
    public void initializeUUID(){
        if(id==null){
            id=UUID.randomUUID();
        }
        createdAt = new Date();
        modifiedAt = new Date();
    }


}
