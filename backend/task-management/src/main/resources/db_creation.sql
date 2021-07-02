create database tasks;
\c tasks;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
SET timezone TO 'UTC';
CREATE USER tasks_usr WITH PASSWORD 'test';
GRANT ALL PRIVILEGES  ON DATABASE tasks TO tasks_usr;