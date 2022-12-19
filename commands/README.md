## COMMANDS

### CONTAINER

- **docker ps** -> Running process
- **docker ps -a** -> Running, Stop process
- **docker container ls** -> Running
- **docker container ls -a** -> Running, Stop process
- **docker stop *3d2F mysql1*** -> *containerId OR containerName* Stop Container space seperated list
- **docker container stop *3d2F mysql1*** -> alternate
- **docker start *3d2F mysql1*** -> *containerId OR containerName* Start Container space seperated list
- **docker container start *3d2F mysql1*** -> alternate
- **docker rm *3d2F mysql1*** ->  *containerId OR containerName* Remove Container space seperated list
- **docker container rm *3d2F mysql1*** ->  alternate
### IMAGES
- **docker rmi *33d imageName:tagName*** -> Remove Images space seperated list (node:18)
- **docker image rmi *33d imageName:tagName*** -> alternate
- **docker restart *33d, imageName:tagName*** -> Restarting Container space seperated list
- **docker container restart *33d, imageName:tagName*** -> alternate
- **docker images** -> To Display all Images
- **docker search *imagename*** -> *mysql* Search images with name on Docker Hub
