# Git

## Cloning an existing repository

Run the following command to clone an existing repository:

```unix
git clone https://github.com/<enter-your-github-username>/<enter-your-repo-name>.git
```

Run the follwoing command to clone an existing repository into a different named folder:

```unix
git clone https://github.com/<enter-your-github-username>/<enter-your-repo-name>.git tech-notes
```

## Create a new repository using MacOS Terminal

Run the following commands in the folder you are creating your repository and in the order below:

```unix
echo "# <enter message> README.md
```

```unix
git add README.md
```

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

## Add SSH key to your Github account

https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/

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

<img src="https://help.github.com/assets/images/help/settings/userbar-account-settings.png"
     alt="User-bar-account-settings"
     style="align: middle;" />