## REDIS

### Command to Run Redis in Interactive Mode
1. docker exec -it 8b4c24bda0af redis-cli
2. 127.0.01:6379> KEYS *
3. 127.0.01:6379> MSET test "a test string"
4. 127.0.01:6379> MGET test
5. 127.0.01:6379> exit

### Docker Compose Settings
```java
version: '3.8'
services:
  cache:
    image: redis:6.2-alpine
    restart: always
    ports:
      - '6379:6379'
    command: redis-server --save 20 1 --loglevel warning --requirepass eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81
    volumes: 
      - cache:/data
volumes:
  cache:
    driver: local
```

### Add Redis Exsisting Project
```java
version: '3.8'
services:
  db:
    image: postgres:14.1-alpine
    restart: always
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
    ports:
      - '5432:5432'
    volumes: 
      - db:/var/lib/postgresql/data
      - ./db/init.sql:/docker-entrypoint-initdb.d/create_tables.sql
  cache:
    image: redis:6.2-alpine
    restart: always
    ports:
      - '6379:6379'
    command: redis-server --save 20 1 --loglevel warning --requirepass eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81
    volumes: 
      - cache:/data
  api:
    container_name: quotes-api
    build:
      context: ./
      target: production
    image: quotes-api
    depends_on:
      - db
      - cache
    ports:
      - 3000:3000
    environment:
      NODE_ENV: production
      DB_HOST: db
      DB_PORT: 5432
      DB_USER: postgres
      DB_PASSWORD: postgres
      DB_NAME: postgres
      REDIS_HOST: cache
      REDIS_PORT: 6379
      REDIS_PASSWORD: eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81
    links:
      - db
      - cache
    volumes:
      - ./:/src
volumes:
  db:
    driver: local
  cache:
    driver: local
```

