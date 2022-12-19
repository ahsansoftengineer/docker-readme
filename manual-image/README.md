## CREATING IMAGE USING CLI
Terminal 1
1. docker run -it alpine sh
2. / # apk add --update redis
Terminal 2
1. docker ps
2. Copy the sh Container id
3. docker commit -c 'CMD ["redis-server"]' 725b
4. Then you will have another container id
5. docker run 71bf