
### Docker Hello World | docker run hello-world
#### CLI Output for 
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
2db29710123e: Pull complete
Digest: sha256:c77be1d3a47d0caf71a82dd893ee61ce01f32fc758031a6ec4cf1389248bb833
Status: Downloaded newer image for hello-world:latest
#### Runing Output
Hello from Docker!
This message shows that your installation appears to be working correctly.
#### To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon *pulled* the "hello-world" image from the *Docker Hub*. (amd64)
 3. The Docker daemon created a *new container* from that image which runs the executable that produces the *output* you are currently reading.
 4. The Docker daemon streamed that *output* to the Docker client, which sent it to your *terminal*.

### What happens in 'docker container run'
1. Looks for that image locally in image cache, doesn't find anything
2. Then Looks in remote image repository (defaults to Docker Hub)
3. Downloads the latest version (nginx:latest by default)
4. Creates new container based on that image and prepares to start
5. Gives it a virtual IP on a private network inside docker engine
6. Opens up port 80 on host and forwards to port 80 in container
7. Starts container by using the CMD in the image Dockerfile

### Orchestration allows you to Serve on Multiple Servers acts like single Server Docker S
1. Docker Swarm
2. Kubernetes
3. Swarm vs. K8s
4. Student Q&A
5. File Reviews
6. References Galore

### MariaDb VS MySql
1. MySQL has multiple variants, though, that we can use (spin-off projects that are MySQL compatible).
2. MariaDB is a great alternative and even supports MySQL-specific environment variables.
3. So, just change the mysql image name in commands to mariadb and everything should work in this course!

### No SSH Needed
1. Docker CLI is great substitute for adding SSH to containers
2. Means you will be include in the process and your commands
-t, --tty  Allocate a pseudo-TTY
-i, --interactive Keep STDIN open even if not attached

### What is the use of a pseudo TTY?
Pseudoterminals (pseudo-TTYs) are used by users and applications to gain access to the shell. A pseudo-TTY is a pair of character special files, a master file and a corresponding slave file. The master file is used by a networking application such as OMVS or rlogin.

### What is NodeOS
OS is a node module used to provide information about the computer operating system. Advantages: It provides functions to interact with the operating system. It provides the hostname of the operating system and returns the amount of free system memory in bytes.

### Docker Networks Defaults
1. Each container connected to a private virtual network "bridge"
2. Each virtual network routes through NAT firewall on host IP
3. All containers on a virtual network can talk to each other without -p 
4. Best practice is to create a new virtual network for each app;
  - network "my_web_app" for mysql and php/apache containers
  - network "my_api" for mongo and nodejs containers