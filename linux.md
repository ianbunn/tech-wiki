# Linux

## Secure Shell

SSH (Secure Shell) - network protocol for remote login to computer systems

---

### SSH Into Server

#### Change PEM Key Permissions To Be Publicly Viewable

`chmod 400 <enter-name-of-key.pem>`


#### SSH into an EC2 instance

`ssh -i <enter-key-name.pem> <enter-username>@<enter.IP>`

#### Act As Root User

`sudo su`

---

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

### File Permissions

Run the command below to see file permissions:

`ls -al`

See the diagram below for Linux file permissions:
![permissions diagram](/images/linux-permissions-diagram.png)

---

## Update Linux

Run `yum update`

---

## List Open Files For Running Applications Or Processes

`lsof -i`

### Kill Specific Application Or Process

** Replace `<enter-PID>` with `PID` from `lsof -i`

`kill -9 <enter-PID>`

#### Example To Kill Port 3000

Port 3000 is sometimes used for node.js, so when developing, it will be required to kill port 3000's application/process when troubleshooting.

* `lsof -i:3000`
* Copy PID from output
* `kill -9 <enter-PID>`
