# Docker + NodeJS + MongoDB

1. Install [Docker](https://docker.com)
2. Run MongoDB Docker container:
```console
docker run -d -p 27019:27017 --name my-mongodb-container -e MONGO_INITDB_ROOT_USERNAME=myuser -e MONGO_INITDB_ROOT_PASSWORD=mypassword mongo
```
3. Run index.js:
```console
npm start
```

* Docs:
[Docker Hub](https://hub.docker.com)


## Usefull Docker commands

* List containers running:
```console
docker ps
```

* List all containers:
```console
docker ps -a
```

* Stop container:
```console
docker stop <CONTAINER ID>
```

* Delete container:
```console
docker rm <NAMES>
```

* Create named container:
```console
docker create --name my-db-container mongo
```

* Run named container:
```console
docker start my-db-container
```

* Port mapping:
```console
docker create -p27017:27017 --name my-db-container mongo
```

* Logs:
```console
docker logs my-db-container
```

* Follow logs:
```console
docker logs --follow my-db-container
```
