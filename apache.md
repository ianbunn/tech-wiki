# Apache

## Install Apache web server

```shell
yum install httpd -y
```

## Start your Apache web server

```shell
service httpd start
```

## Restart Apache web server

Run the command below to restart Apache, so it will stop and restart the web server:

```shell
service httpd restart
```

## Turn on Apache web server automatically after every reboot

Run the command below:

```shell
chckconfig httpd on
```

[Back home](./README.md)
