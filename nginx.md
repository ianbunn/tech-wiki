# Nginx

## What is Nginx

[This is the Wikipedia article for Nginx](https://en.wikipedia.org/wiki/Nginx)

Nginx is a web server which can also be used as a:

- Reverse proxy
- Load balancer
- Mail proxy
- HTTP cache

## Restart Nginx web server

Run the following ommands as a root user:

First:

```php
service nginx restart
```

Second:

```php
service nginx reload
```

## Resolve Nginx: 413: Request Entity Too Large Error

This solution allows you to upload 2M size image files using Nginx reverse proxy. To resolve this, follow the steps below:

- Navigate to `nginx.conf` to edit file
  - You can use the command `vi /etc/nginx/nginx.conf`
- Add the following line to the `nginx.conf` file in the http/server/location context to increase the upload size limit
- The section you will edit in the `nginx.conf` file looks like this:

```php
//set client body size to 2M
client_max_body_size 2m;
```

- Reload the Nginx server by running the command `service nginx reload`

The steps above should have fixed the upload size error