# NPM

## Start a new project

Run the following command in Terminal for MacOS:

```shell
npm init
```

The terminal will prompt you the following:

```shell
Package name (project): <input the name of your project>
Version: (X.X.X) <input the version>
Entry point: (index.js) <leave blank and press `Enter`>
Keywords: <enter keywords related to your project>
Author: <enter author name>
License: (ISC) <leave blank and press `Enter`>
```

## Add new `devDependencies` to your package.json using NPM

Run the following command in terminal in your project's folder:

```shell
npm install @type/<input package name>
```

The new package should be added to your package.json, and looks like below:

![package-json-sample](./images/package-json-sample.png)

## Interesting NPM packages

Cross-Site Request Forgery (CSRF) Protection

- [csurf](https://www.npmjs.com/package/csurf)

## Troubleshoot

### Reinstall Node or Fix "No Such File..." Error

Symptom:

* Running `npm -v` or any `npm...` command will give the error message: `env: node: No such file or directory`

Solution:

* Fully uninstall node with the command below:

```shell
curl -ksO https://gist.githubusercontent.com/nicerobot/2697848/raw/uninstall-node.sh
chmod +x ./uninstall-node.sh
./uninstall-node.sh
rm uninstall-node.sh
```

* Using `brew` run the following command to reinstall node after uninstalling from step above:

```shell
brew install node
```

* Run the following command to link `node` to `brew`:

```shell
brew link node
```
