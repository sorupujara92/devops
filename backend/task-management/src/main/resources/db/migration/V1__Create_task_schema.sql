CREATE TABLE task
(
  id                uuid   not null,
  completion_date   timestamp without time zone,
  created_at        timestamp without time zone,
  created_by        integer,
  description       character varying(255) not null,
  end_date          timestamp without time zone ,
  frequency         character varying(255) ,
  is_archived       boolean ,
  is_completed      boolean ,
  is_deleted        boolean ,
  modified_at       timestamp without time zone,
  modified_by       integer,
  user_id           uuid,
  PRIMARY KEY (id)
);