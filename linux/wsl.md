# Windows Sub-Linux (WSL)

## Troubleshoot

### Issues with `systemctl`

There are some errors when using `systemctl` in WSL2.

The following errors are:

```shell
$ sudo systemctl status mysql
# OUTPUT 
Failed to get properties: Connection reset by peer
```

```shell
$ sudo systemctl start mysql
# OUTPUT
Warning! D-Bus connection terminated.
Failed to start mysql.service: Connection reset by peer
See system logs and 'systemctl status mysql.service' for details.
```

Run the following command to see if `snapd` is unavailable, if so, then run the second set of commands below:

```shell
$ snap version
# OUTPUT
snap    2.55.5+20.04
snapd   unavailable
series  -
```

```shell
$ sudo apt-get update && sudo apt-get install -yqq daemonize dbus-user-session fontconfig

$ sudo daemonize /usr/bin/unshare --fork --pid --mount-proc /lib/systemd/systemd --system-unit=basic.target

$ exec sudo nsenter -t $(pidof systemd) -a su - $LOGNAME

$ snap version
# OUTPUT
snap    2.56.2
snapd   2.56.2
series  16
ubuntu  20.04
kernel  5.10.102.1-microsoft-standard-WSL2
```

For more information see the following pages with work arounds:

- [Running Snaps on WSL2 (Insiders only for now)](https://forum.snapcraft.io/t/running-snaps-on-wsl2-insiders-only-for-now/13033)
- [alyleite / wsl.md gist](https://gist.github.com/alyleite/ca8b10581dbecd722d9dcc35b50d9b2b)