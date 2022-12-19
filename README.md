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
PWD is a Docker playground which allows users to run Docker commands in a matter of seconds. It gives the experience of having a free Alpine Linux Virtual Machine in browser, where you can build and run Docker containers and even create clusters in Docker Swarm Mode. Under the hood DIND or Docker-in-Docker is used to give the effect of multiple VMs/PCs.
### What are the Linx Feature?
Namespace, CGroups, Veth, Iptables, Union Mount

## VS
### Image vs. Container
1. An Image is the application we want to run
2. A Container is an instance of that image running as a process
3. You can have many containers running of the same image
4. In this lecture our image will be the Nginx web server
5. Docker's default image "registry" is called Docker Hub (hub.docker.com)
### Containers vs Virtual Machine (VM)
1. Containers aren't Mini-VM's
2. They are just process
3. Limited to what resources they can access
4. Exit when process stops