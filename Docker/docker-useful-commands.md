# Docker Useful Commands

# `docker`

## `docker ps`

`docker ps` - list only running containers

`docker ps -a` - flag `-a` is used to list all containers

## `docker build`

### Build image from `Dockerfile`

`docker build -t image_name .`

## `docker run`

### Run container

`docker run -d --name container_name image_name`

### Pass environment variables to docker

Use flag `-e` or `--env` to pass specific variables and replace `container` below:

```sh
docker run -it -e TEST=123 --env TEST2=456 --rm container /bin/bash

# Write in terminal
echo $TEST
# Output: 123
```

### Pass environment FILE to docker

Use flag `--env-file` and replace `container` below:

```sh
docker run -it --env-file ./path/to/env-file <container-id> /bin/bash
```

Contents of environment file should look like this:

```sh
TEST=123
TEST2=456
```

### Run and remove when stopped

Using option `--rm` will remove container after it is finished.

Replace `container` below:

```sh
docker run -it --rm container /bin/ash
```

## `docker exec`

### Execute command in container

Flags:
- `-i`: specifies interactive
- `t`: enables a terminal typing interface

```sh
# Logs in to <container-id>
$ docker exec -it <container-id> /bin/bash
```

## `docker cp`

### Copy file from Docker container to local machine

```sh
# From local machine's terminal
docker cp container_id:/file/path/within/container /host/path/target
```

## `docker logs`

### See logs from container

```sh
docker logs -f <container>
```

## `docker stop`

### Stop all containers

`docker stop $(docker ps -q)` - stop only active

`docker stop $(docker ps -aq)` - stop all

## `docker rm`

### Remove all containers with `status=exited`

When running multiple containers, there could be many containers with `status=exited`. 

```sh
docker rm $(docker ps -q -f status=exited)
```

### Remove all docker images

`docker rmi $(docker images -q)` - image should NOT have reference to container

### **Error** - no space left on device

BE CAREFUL when running this, if you want to keep some data:

```sh
docker volume rm $(docker volume ls -qf dangling=true)
```

# `docker-compose`

User `docker-compose` when running multiple containers using `docker-compose.yml`:

```sh
docker-compose up
```

## Troubleshoot container issues using `docker-compose`

Replace `container` below:

```sh
docker-compose rm container
```

If the `container` is running, you will be informed `no stopped containers` for that name, so run:

```sh
docker-compose stop container
```

Confirm the prompt by entering `y`, and then re-build running:

```sh
docker-compose up container
```

## Stop, remove containers, remove images and networks what was created by `docker-compose up`

Replace `docker-compose.yml` with the name of the docker file in environment:

```sh
docker-compose -f docker-compose.yml down --rmi all
```

# Troubleshooting

## Access localhost DB from Docker container

Instead of using `localhost` as DB_HOST, use `host.docker.internal`.