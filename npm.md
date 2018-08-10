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

![package-json-sample](/images/package-json-sample.png)