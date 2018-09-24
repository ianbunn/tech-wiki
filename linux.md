# Linux

## Secure Shell commands

SSH (Secure Shell) commands - network protocol for remote login to computer systems

- `$sudo service ssh restart` = restart OpenSSH server
- `$sudo service ssh start` = start OpenSSH server
- `$sudo service ssh stop` = stop OpenSSH server
- `$sudo USE_KDUMP=1` = enable KDUMP kernel
- `$sudo vi /etc/default/kdump-tools` = configure local kernel crash dumps

### Change PEM key permissions for SSH

Run `chmod 400 <enter-name-of-key.pem>`

### SSH into an EC2 instance

Run `ssh ec2-user@<enter.IP> -i <enter-key-name.pem>`

## Review file permissions

Run the command below to see file permissions:

```shell
ls -al
```

See the diagram below for Linux file permissions:
![permissions diagram](/images/linux-permissions-diagram.png)

## Change to super-user

Run `sudo su` to change to root user

## Update Linux

Run `yum update`