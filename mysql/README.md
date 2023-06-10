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

## SQL SERVER
- docker ps -a
- docker exec -it clever_kapitsa "bash" // docker exec -it or_container_id "bash" // Running a Container
- mssql@56410de43f0b:/$ /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P "asdf1234" // Conneting to Sql Server Connection
- - IMPORTANT NOTE
- - GO // FOR EXECUTING EVERY SQL COMMADN IN TERMINAL TYPE "GO" IN THE NEXT ROW
- 1 SELECT Name from sys.databases; // Display all databases in Sql Server
- 1 USE Donation;
- 2 SELECT * FROM Countrys;
- 3 exit // TO EXIT FROM DATA BASE, SQL SERVER
