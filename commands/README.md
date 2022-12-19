## COMMANDS

### CONTAINER

- **docker ps** &rarr; Running process
- **docker ps -a** &rarr; Running, Stop process
- **docker container ls** &rarr; Running
- **docker container ls -a** &rarr; Running, Stop process
- **docker stop *3d2F mysql1*** &rarr; *containerId OR containerName* Stop Container space seperated list
- **docker container stop *3d2F mysql1*** &rarr; alternate
- **docker start *3d2F mysql1*** &rarr; *containerId OR containerName* Start Container space seperated list
- **docker container start *3d2F mysql1*** &rarr; alternate
- **docker rm *3d2F mysql1*** &rarr;  *containerId OR containerName* Remove Container space seperated list
- **docker container rm *3d2F mysql1*** &rarr;  alternate
### IMAGES
- **docker rmi *33d imageName:tagName*** &rarr; Remove Images space seperated list (node:18)
- **docker image rmi *33d imageName:tagName*** &rarr; alternate
- **docker restart *33d, imageName:tagName*** &rarr; Restarting Container space seperated list
- **docker container restart *33d, imageName:tagName*** &rarr; alternate
- **docker images** &rarr; To Display all Images
- **docker search *imagename*** &rarr; *mysql* Search images with name on Docker Hub
