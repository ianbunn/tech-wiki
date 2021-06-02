# SSH

Secure Shell is used to provide secure access to remote systems.

## Using SSH Public Key / Private Key Access

1. Generate SSH key pair

```shell
ssh-keygen -o -a 100 -t ed25519
```

* Follow the prompts for:
  * Path to file
    * By default, it's `/.ssh/id_rsa`
  * Passphrase for using key
    * Used to encrypt key, so DO NOT LEAVE BLANK
      * Save this passphrase somewhere you'll have access to in the future
  * Re-enter passphrase
    * To make sure your ass saved it!

2. Verify the results

* Both keys should be in the path indicated above

3. Copy the public key to remote host

* Add public key, `id_rsa` on remote host

4. Connect using SSH using generated key

```shell
ssh -i ~/.ssh/id_rsa user@remote_host_ip
```

## Using `ssh-agent`

A program that runs in background and stores keys in memory.

1. Enable `ssh-agent` in background

```shell
eval "$(ssh-agent -s)"
```

2. Add SSH key to `ssh-agent`

```shell
ssh-add ~/.ssh/id_rsa
```

* If SSH key was named differently than `id_rsa`, replace the key's name in the above command.

3. Enter your key's passphrase to connect

* The first connection will always ask for the passphrase, aftewards, it should be passphrase free

4. Connect to remote host

```shell
ssh -i ~/.ssh/id_rsa user@remote_host_ip
```

### `ssh-agent` Forwarding

`ssh-agent` is used for when a service requires our SSH authentication, i.e. Github to pull updated repos.

`ssh-agent` allows you to use local SSH keys instead of leaving keys (without passphrases) on the server.

1. Setting up `ssh-agent` forwarding

* Navigate to `~/.ssh/config` to enter the following text for your remote host

```shell
Host myhost.com
    ForwardAgent yes
```

* If we don't want to create a `config` file, we can add an `-A` to the `ssh` command
  * `-A` flag enables forwarding of the authenticated agent connection, so it forwards your SSH authentication schema to the remote host

```shell
ssh -A -i ~/.ssh/id_rsa user@remote_host_ip
```

2. Test `ssh-agent` forwarding

* SSH into GitHub by running the command below:

```shell
ssh -T git@github.com
```

* Note that you can forward as many keys as you'd like, in case your repos use different keys

[Back home](./README.md)
