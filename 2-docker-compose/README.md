## Docker Compose

### Docker VS Docker Compose
1. The key difference between docker run versus docker-compose is that docker run is entirely command line based, while docker-compose reads configuration data from a YAML file. 
2. The second major difference is that docker run can only start one container at a time, while docker-compose will configure and run multiple.
### What is Docker Compose?
1. Docker Compose is a tool that was developed to help define and share multi-container applications. With Compose, we can create a YAML file to define the services and with a single command, can spin everything up or tear it all down.
2. Separate CLI that gets installed along with Docker
3. Used to start up multiple Docker Containers at the same time
4. Automates some of the long-winded
5. docker-compose.yml has the unique syntax of writing docker commands
6. Contains all the options we'd normally pass to docker-cli

### Compose file versions and upgrading
1. The Compose file is a YAML file defining services, networks, and volumes for a Docker application.
2. The Compose file formats are now described in these references, specific to each version.
### Compatibility matrix Versioning
There are three legacy versions of the Compose file format:
1. Version 1. This is specified by omitting a version key at the root of the YAML.
2. Version 2.x. This is specified with a version: '2' or version: '2.1', etc., entry at the root of the YAML.
3. Version 3.x, designed to be cross-compatible between Compose and the Docker Engine’s swarm mode. This is specified with a version: '3' or version: '3.1', etc., entry at the root of the YAML.

### What is Docker Compose Servicies
1. Docker Compose is a tool that was developed to help define and share multi-container applications. With Compose, we can create a YAML file *to define the services* and with a single command, can spin everything up or tear it all down.

### Project Steps
1. After updating the files and folder as it is
2. Run -> docker build -t ahsansoftengineer/docker-compose .
3. Run -> docker run -p 4001:8080 -d ahsansoftengineer/docker-compose-app

### Who to Connect two Different Container
1. Docker CLI to connect two different Container
2. Docker Compose to connect two different Container