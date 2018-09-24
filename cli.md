# Command Line Interface (CLI)

## Basic Vi commands for Vi editor

Here is a [cheat sheet](https://assets.digitalocean.com/articles/linux_basics/ls-l.png) by the Colorado State University Computer Science Department

- `:wq` = write changes and quit Vi editor
- `:q!` = DO NOT write changes and quit Vi editor

## Create a text file by accessing Nano editor

Run `nano index.html`

TIP: For a web page or app, make sure the `index.html` is created in the path `var/html/public`

Then, press `Control + "C"` to exit Nano editor

- Nano editor will ask you to save, append, etc.
  - Press `"Enter"`

## Create a file in Terminal for MacOS

Run `touch <name-of-file.txt>`

## Move a file to a different folder

Run `mv <name-of-file.txt> <folder-name>`

## Change PEM key permissions for SSH

Run `chmod 400 <enter-name-of-key.pem>`

## SSH into an EC2 instance

Run `ssh ec2-user@<enter.IP> -i <enter-key-name.pem>`

## iOS Computers - Terminal

### How to empty your trash

Steps to empty your trash using Terminal:

1. Open Terminal
2. Run the following command: `sudo rm -rf ~/Trash/*`