## MYSQL DOCKER COMMANDS
- docker container run -d -p 90:90 --name mysql1 -e MYSQL_RANDOM_ROOT_PASSWORD=true mysql // I think Port Doesn't Required at all mysql has its own 3306 port on tcp
- docker container run -d --name mysql2 -e MYSQL_ROOT_PASSWORD=root mysql
- docker container inspect mysql1
- docker exec -it mysql2 bash // it will open the bash
- bash-4.4# mysql2 -p //1. it will ask for the password //2. provide the password "root"
- mysql> SHOW DATABASES; CREATE DATABASE DB1; USE DB1; SHOW TABLES; CREATE TABLE (id int); SELECT * FROM TABLE;

## QUERYING MYSQL DATABASE 
- mysql> CREATE DATABASE db1;
- mysql> USE DATABAE db1;
- mysql> CREATE TABLE tbl1 (id int, title int, desc int);
- mysql> SHOW TABLES;
- mysql> INSERT INTO  tbl1 (id, title, desc) values (1,2,3);
- mysql> SELECT * FROM tbl1;
- CREATE DATABASE DB2; USE DATABASE DB2; CREATE TABLE TB1 (id int, title int); INSERT INTO TB1 (id, title) VALUES (1,2); SELECT * FROM TB1; UPDATE TB1 SET id = 4, title = 10 WHERE id = 1; SELECT * FROM TB1;
TB1 SELECT * FROM TB1;

- mysql> exit | and then | bash-4.4# exit // To Close mysql & bash use "exit" command
- docker container logs mysql1
- docker container stats mysql1 // Checking Memory Consumption every seconds
- docker container top mysql1 // Threads Consume