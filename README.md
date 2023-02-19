# Docker + NodeJS + MongoDB

## Option 1: MongoDB Container + NodeJS Local

1. Install [Docker](https://docker.com)
2. Pull Docker mongo image:
```console
docker pull mongo
```
3. Run MongoDB Docker container:
```console
docker run -d -p 27019:27017 --name my-mongodb-container -e MONGO_INITDB_ROOT_USERNAME=myuser -e MONGO_INITDB_ROOT_PASSWORD=mypassword mongo
```
4. Set _index.js_:
```js
const thisIsContainer = false
```
5. Run _index.js_:
```console
npm start
```

## Option 2: MongoDB Container + NodeJS Container

1. Install [Docker](https://docker.com)
2. Pull Docker mongo image:
```console
docker pull mongo
```
3. Create a network to connect both containers:
```console
docker network create my-net
```
4. Run MongoDB Docker container in network:
```console
docker run --name my-mongodb-container --network my-net -e MONGO_INITDB_ROOT_USERNAME=myuser -e MONGO_INITDB_ROOT_PASSWORD=mypassword -p 27017:27017 -d mongo
```
4. Set _index.js_:
```js
const thisIsContainer = true
```
5. Set _Dockerfile_:
```
FROM node:18

RUN mkdir -p /home/app

COPY . /home/app

EXPOSE 3000

CMD ["node", "/home/app/index.js"]
```
6. Create image from _Dockerfile_:
```console
docker build -t my-node-app:1.0.0 .
```
7. Run NodeJS Docker container in network:
```console
docker run --name my-node-app --network my-net -p 3000:3000 -d my-node-app:1.0.0
```


## Docs:
[Docker Hub](https://hub.docker.com)


## Usefull Docker commands

### Images

* List images:
```console
docker images
```

### Containers

* List containers running:
```console
docker ps
```

* List all containers:
```console
docker ps -a
```

* Create named container:
```console
docker create --name my-db-container mongo
```

* Run named container:
```console
docker start my-db-container
```

* Stop container:
```console
docker stop my-db-container
```

* Delete container:
```console
docker rm my-db-container
```

### Ports

* Port mapping:
```console
docker create -p27017:27017 --name my-db-container mongo
```

### Logs

* Logs:
```console
docker logs my-db-container
```

* Follow logs:
```console
docker logs --follow my-db-container
```

### Network

* List docker networks
```console
docker network ls
```

* Create Docker network
```console
docker network create my-net
```

* Remove Docker network
```console
docker network rm my-net
```