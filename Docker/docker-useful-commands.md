# Docker Useful Commands

## `docker`

### All existing containers

`docker ps` - show only running containers

`docker ps -a` - show all containers

### Build image from `Dockerfile`

Replace `image-name` below:

`docker build -t image-name`

(See [Docker Docs](dockerDocs.md) for resource to writing better Dockerfiles)

### Pass environment variables to docker

Use the flag `-e` or `--env` to pass specific variables and replace `container` below:

```sh
docker run -it -e TEST=123 --env TEST2=456 --rm container /bin/ash

# Write in terminal
echo $TEST
# Output: 123
```

### Pass environment FILE to docker

Use the flag `--env-file` and replace `container` below:

```sh
docker run -it --env-file ./env.list container /bin/ash
```

Contents of file should look like this:

```sh
TEST=123
TEST2=456
```

### Execute command in container

Replace `container` below:

```sh
docker exec container echo "hola container"
```

### Run and remove when stopped

Using option `--rm` will remove container after it is finished.

Replace `container` below:

```sh
docker run -it --rm container /bin/ash
```

### See logs from container

Replace `container` below:

```sh
docker logs -f container
```

### Remove all containers with `status=exited`

When running multiple containers, there could be many containers with `status=exited`. Remove all with such status with:

```sh
docker rm $(docker ps -q -f status=exited)
```

### Remove all docker images

`docker rmi $(docker images -q)` - image should NOT have reference to container

### Stop all containers

`docker stop $(docker ps -q)` - stop only active

`docker stop $(docker ps -aq)` - stop all

## `docker-compose`

User `docker-compose` when running multiple containers using `docker-compose.yml`:

```sh
docker-compose up
```

### Troubleshoot container issues using `docker-compose`

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

### Stop, remove containers, remove images and networks what was created by `docker-compose up`

Replace `docker-compose.yml` with the name of the docker file in environment:

```sh
docker-compose -f docker-compose.yml down --rmi all
```

### Error - no space left on device

BE CAREFUL when running this, if you want to keep some data:

```sh
docker volume rm $(docker volume ls -qf dangling=true)
```