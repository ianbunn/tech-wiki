# Git

`git status` will always give you the branch, untracked files, and committed files

`git add` adds it to the local branch

`git log` displays all commits' details

`git log -1` displays the last commit's details

`git branch -d <branch>` removes branch name indicated in command

`git branch -D <branch>` removes branch name indicated in command, capital `-D` flag is added to force a branch delete that contains unmerged changes (**BE CAREFUL!**)

`git push origin --delete <branch>` removes a branch from remotes

`git stash list` lists all stashes

`git stash` saves a stash

`git stash drop stash@{i}` drops/removes a stash indicated as `i` based on the position in the stashes

`git stash show -p` to see the most recent stash

`git stash show -p stash@{i}` to see the stash indicated as `i` based on the position in the stashes

`git branch replace_this_branch_name $(echo "replace this message" | git commit-tree HEAD^{tree})` to clean all commits to relevant feature commits

## Cloning an existing repository

Run the following command to clone an existing repository:

```unix
git clone https://github.com/<enter-your-github-username>/<enter-your-repo-name>.git
```

Run the follwoing command to clone an existing repository into a different named folder:

```unix
git clone https://github.com/<enter-your-github-username>/<enter-your-repo-name>.git tech-notes
```

## Create a new repository using CLI (MacOS Terminal)

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

## Push new changes to your repository

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

## Generate a new SSH key and add it to the SSH-Agent

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
ssh-add -K ~/.ssh/id_rsa
```

- TIP: the `-K` option is a version of `ssh-add`, which stores the passphrases in your Keychain for you when you add an SSH key to the SSH-Agent
- Then, add your SSH key to your Github account (instructions below)

## Add SSH key to your Github account

[Github - add SSH to account](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/)

Follow the steps below:

- Copy the SSH key to your clipboard
- If your SSH key file has a different name than the example code, modify the filename to match your current setup
  - When copying your key, don't add any newlines or whitespace
    - Use the command below to copy straight to your clipboard without any newlines or whitespace:

```unix
pbcopy < ~/.ssh/<ssh-filename>.pub>
```

- TIP: if `pbcopy` isn't working, you can locate the hidden `.ssh` folder, open the file in your favorite text editor, and copy it to your clipboard
  - Make sure there are no newlines or whitespace
- In the upper-right corner of any Github page, click your profile photo, then click **Settings**

![User-bar-account-settings](https://help.github.com/assets/images/help/settings/userbar-account-settings.png)

- In the user settings sidebar, click **SSH** and **GPG** keys
- Click **New SSH key** or **Add SSH key**

![SSH-add-key](https://help.github.com/assets/images/help/settings/ssh-add-ssh-key.png)

- In the "Title" field, add a descriptive label for the new key
  - For example, if you're using a personal MAC, you might call this key "Personal MacBook Air"
- Paste your key into the "Key" field

![SSH-key-paste](https://help.github.com/assets/images/help/settings/ssh-key-paste.png)

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