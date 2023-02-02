# Shell Commands

```sh
# Open VSCode, usage example: `code .` to open dir in VSC
code () { VSCODE_CWD="$PWD" open -n -b "com.microsoft.VSCode" --args $* ;}

# Open WebStorm, usage example: `op .` to open dir in WebStorm
alias op="open -a WebStorm"

# List all details in dir
alias ls="ls -all"

# Docker
alias dc="docker-compose"

# Git
alias gs="git status"

alias gpud="git pull upstream develop"
```

## 
