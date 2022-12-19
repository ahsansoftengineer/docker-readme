# DOCKER
### What is Docker and why it is used?
Docker is a software platform that allows you to build, test, and deploy applications quickly. Docker packages software into standardized units called containers that have everything the software needs to run including libraries, system tools, code, and runtime.
### Why Docker and Why Know?
> The Current ways were full of friction and complexity There are three major requirement for using Docker
1. Isolation
2. Environments
3. Speed (Running, Deployment, Fixing)
### What is Docker Demon?
The Docker daemon ( dockerd ) listens for Docker API requests and manages Docker objects such as images, containers, networks, and volumes. A daemon can also communicate with other daemons to manage Docker services.
### What is Docker Playground?
1. PWD is a Docker playground which allows users to run Docker commands in a matter of seconds. It gives the experience of having a free Alpine Linux Virtual Machine in browser, where you can build and run Docker containers and even create clusters in Docker Swarm Mode. Under the hood DIND or Docker-in-Docker is used to give the effect of multiple VMs/PCs.
### What are the Linx Feature?
1. Namespace, CGroups, Veth, Iptables, Union Mount
## VS
### Image vs. Container
1. An Image is the application we want to run
2. A Container is an instance of that image running as a process
3. You can have many containers running of the same image
4. In this lecture our image will be the Nginx web server
5. Docker's default image "registry" is called Docker Hub (hub.docker.com)
### Containers vs Virtual Machine (VM)
0. When you create a container with a image then this container is the instance of that image To work with this container the docker give you the id of this container so you can work with command line
1. Containers aren't Mini-VM's
2. They are just process
3. Limited to what resources they can access
4. Exit when process stops

### How Does Docker Caching Works?
1. Each layer contains the filesystem changes to the image for the state before the execution of the command and the state after the execution of the command. Docker uses a layer cache to optimize and speed up the process of building Docker images.

### Orchestration allows you to Serve on Multiple Servers acts like single Server Docker S
1. Docker Swarm
2. Kubernetes
3. Swarm vs. K8s
4. Student Q&A
5. File Reviews
6. References Galore
### What is Commit in Docker?
1. It can be useful to commit a container's file changes or settings into a new image. This allows you to debug a container by running an interactive shell, or to export a working dataset to another server. Generally, it is better to use Dockerfiles to manage your images in a documented and maintainable way.

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