# Git

`git status` will always give you the branch, untracked files, and committed files

`git add` adds it to the local branch

`git log` displays all commits' details

`git log -1` displays the last commit's details

`git config -l` lists git user info

## Git Branch

`git branch -d <branch>` - removes branch name indicated in command

`git branch -D <branch>` - removes branch name indicated in command, capital `-D` flag is added to force a branch delete that contains unmerged changes (**BE CAREFUL!**)

`git branch replace_this_branch_name $(echo "replace this message" | git commit-tree HEAD^{tree})` - cleans all commits to relevant feature commits

### Delete All Merged Branches That Are Not Current, Master or Dev

`git branch --merged | egrep -v "(^\*|master|dev|main|staging|releagit se)" | xargs git branch -d`

1. `git branch --merged` - lists branches whose tips are reachable from the specified commit (HEAD if not specified)
2. `egrep -v "(^\*|master|dev)"` - searches for all lines that DO NOT start with `*`, since it is the current branch, or don't have `master` or `dev` in it
3. `xargs git branch -d` - executes the command to delete all found branches from step 2

## Git Pull

`git pull --allow-unrelated-histories` - forces a merge to happen after cleaning commits

## Git Push

`git push origin --delete <branch>` removes a branch from remotes

## Git Stash

`git stash list` lists all stashes

`git stash` saves a stash

`git stash drop stash@{i}` drops/removes a stash indicated as `i` based on the position in the stashes

`git stash show -p` to see the most recent stash

`git stash show -p stash@{i}` to check diff against selected stash (i)

* NOTE: Windows Powershell does not like curly brackets, so use the following syntax when using PowerShell:

`git stash show -p stash@'{'i'}'` wrapping the stash index in single apostrophes

`git stash show -p stash@{i}:<file_name>` to check diff against a selected stash's file (file_name)

## Git Tag

`git tag` to list tags

`git tag -n` to list tags with an extensive description

`git tag -l <pattern>` followed with a tag pattern for example, `v1*` or `0.13*`

More `git tag` commands for reference: https://devconnected.com/how-to-list-git-tags/

## Reset Branch To `origin/master`

```shell
# Make sure you got the latest changes
$ git fetch origin

# Reset to origin/master
$ git reset --hard origin/master
```

## Clone Repo And Make PR On Another Account

1. Clone local repo and cd into it: `git clone <repo>` & `cd <repo>`
2. Remove origin to then add your repo as origin: `git remote remove origin`
3. Set main repo as upstream: `git remote add upstream git@github.com:<account>/<repo>.git`
4. Add your repo as origin: `git remote add origin <your-fork>.git`

## Cloning Existing Repo

Run the following command to clone an existing repository:

```unix
git clone https://github.com/<enter-your-github-username>/<enter-your-repo-name>.git
```

Run the following command to clone an existing repository into a different named folder:

```unix
git clone https://github.com/<enter-your-github-username>/<enter-your-repo-name>.git tech-notes
```

## Create New Repo Using CLI (macOS Terminal)

- Run the following commands in the folder you are creating your repository and in the order below:

```unix
echo "# <enter message> README.md
```

```unix
git add README.md
```

```unix
git add .gitignore
```

Here is a collection of templates; language and framework specific: [Github - .gitignore details](https://github.com/github/gitignore)

```unix
git commit -m "<enter your message>"
```

```unix
git remote add origin https://github.com/<enter-your-github-username>/<enter-your-repo-name>.git
```

```unix
git push -u origin master
```

## Push Changes To Repo

Run the following commands in the following order:

```unix
git add .
```

```unix
git commit -m "<enter your message>"
```

```unix
git push -u origin master
```

## Generate New SSH Key For SSH-Agent

[Github - generate a new SSH key and addding it to SSH agent](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)

### Generating a new SSH Key

Follow the steps below:

- Open Terminal
- Paste the command below, substituting your Github email address

```unix
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

- This creates a new SSH key, using the provided email as a label
  - `Generating public/private rsa key pair.`
- When you're prompted to "Enter a file in which to save the key", press `Enter`
  - This accepts the default file location
    - `Enter a file in which to save your SSH key: /Users/your-user/.ssh/id_rsa [PRESS ENTER]`
- At the prompt, type a secure passphrase
  - `Enter passphrase (empty for no passphrase): [Type a passphrase]`
  - `Enter same passphrase again: [Type passphrase again]`

### Adding your SSH key to the SSH-Agent

Follow the steps below:

- Start the SSH-Agent in the background

```unix
$ eval "$(ssh-agent -s)"
Agend pid 59566
```

- If you're using macOS Sierra 10.12.2 or later, you will need to modify your `~/.ssh/config` file to auto-load keys into the SSH-Agent and store passphrases in your Keychain

```unix
Host *
    AddKeysToAgent yes
    UseKeychain yes
    IdentityFile ~/.ssh/id_rsa
```

- Add your SSH private key to the SSH-Agent and store your passphrase in Keychain
  - If you created your key with a different name, or if you are adding an existing key that has a different name, replace `id_rsa` in the command with the name of your private key file

```unix
ssh-add --apple-use-keychain --apple-load-keychain ~/.ssh/path-to-key
```

- TIP: the `--apple-use-keychain --apple-load-keychain` option is a version of `ssh-add`, which stores the passphrases in your Apple MacOs Keychain for you when you add a SSH key to the SSH-Agent
- Then, add your SSH key to your Github account (instructions below)

## Add SSH key to your Github account

[Github - add SSH to account](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/)

Follow the steps below:

- Copy the SSH key to your clipboard
- If your SSH key file has a different name than the example code, modify the filename to match your current setup
  - When copying your key, don't add any newlines or whitespace
    - Use the command below to copy straight to your clipboard without any newlines or whitespace:

```unix
pbcopy < ~/.ssh/<ssh-filename>.pub
```

- TIP: if `pbcopy` isn't working, you can locate the hidden `.ssh` folder, open the file in your favorite text editor, and copy it to your clipboard
  - Make sure there are no newlines or whitespace
- In the upper-right corner of any Github page, click your profile photo, then click **Settings**

- In the user settings sidebar, click **SSH** and **GPG** keys
- Click **New SSH key** or **Add SSH key**
- In the "Title" field, add a descriptive label for the new key
  - For example, if you're using a personal MAC, you might call this key "Personal MacBook Air"
- Paste your key into the "Key" field
- Click **Add SSH key**
- If prompted, confirm your Github password

## How to check your username in GitHub

Run the following query in your Terminal (MAC) to verify your username:

`ssh -T git@github.com`

Enter your password when prompted

## Resources

[Duplicating a repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/duplicating-a-repository) - to duplicate a repo w/out forking it, run a special clone command, then mirror-push to the new repo

[Fetching private GitHub repos from a Docker container](https://medium.com/paperchain/fetching-private-github-repos-from-a-docker-container-273f25ec5a74) - 2 solutions, via SSH and via HTTPS w/Access Token method

[Using a private GitHub repo as a dependency with NPM or Yarn](https://dotlayer.com/how-to-use-a-private-github-repo-as-a-dependency-with-yarn-npm/)

## Other Github resources

[Fork a repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)

[Configuring a remote for a fork](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork)

[Syncing a fork](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork)

[Github@DianaEromsele - Notes](https://gist.github.com/DianaEromosele/fa228f6f6099a8996d3cb891109ab975)

[Back home](../README.md)
