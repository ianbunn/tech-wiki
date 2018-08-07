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

Run the following commands in the folder you are creating your repository:

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