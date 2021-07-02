package com.bootcamp4.taskmanagement.dto;



import lombok.*;

import java.util.Date;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class TaskDTO {

    private UUID id;

    private String userId;

    private String description;


    private Date endDate;

    private Date completionDate;

    private String frequency;

    private int createdBy;

    private Date createdAt;

    private int modifiedBy;

    private Date modifiedAt;

    private Boolean isDeleted;

    private Boolean isArchived;

    private Boolean isCompleted;





}
