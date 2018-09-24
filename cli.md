# Command Line Interface (CLI)

## Basic Vi commands for Vi editor

- `:wq` = write changes and quit Vi editor
- `:q!` = DO NOT write changes and quit Vi editor
- `pwd` = print working directory's name
- `cat [filename]` = used when you want to view the contents of a file
- `ls` = list all contents of a directory
- `ls -a` = list all contents of a directory with hidden files

### Create a text file by accessing Nano editor

Run `nano index.html`

TIP: For a web page or app, make sure the `index.html` is created in the path `var/html/public`

Then, press `Control + "C"` to exit Nano editor

- Nano editor will ask you to save, append, etc.
  - Press `"Enter"`

### Create a file

Run `touch <name-of-file.txt>`

### Move a file to a different folder

Run `mv <name-of-file.txt> <folder-name>`

## iOS Computers - Terminal

### How to empty your trash

Steps to empty your trash using Terminal:

1. Open Terminal
2. Run the following command: `sudo rm -rf ~/Trash/*`