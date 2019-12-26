# Linux

## Secure Shell basic commands

SSH (Secure Shell) commands - network protocol for remote login to computer systems

### `OpenSSH` server

#### Start

`$sudo service ssh start`

#### Stop

`$sudo service ssh stop`

#### Restart

`$sudo service ssh restart`

---

### Kernel

#### Enable `KDUMP` Kernel

`$sudo USE_KDUMP=1`

#### Configure Local kernel Crash Dumps

`$sudo vi /etc/default/kdump-tools`

---

### SSH Into Server

#### Change PEM Key Permissions To Be Publicly Viewable

`chmod 400 <enter-name-of-key.pem>`


#### SSH into an EC2 instance

`ssh -i <enter-key-name.pem> <enter-username>@<enter.IP>`

#### Act As Root User

`sudo su`

---

### File Permissions

Run the command below to see file permissions:

```shell
ls -al
```

See the diagram below for Linux file permissions:
![permissions diagram](/images/linux-permissions-diagram.png)

## Update Linux

Run `yum update`
