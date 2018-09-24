# SCSS

## SASS basics

To use Sass, simple pass the filename of a .sass or .scss file that contains some code written in Sass to the sass command, along w/the destination path for the compiled CSS

- Create a .sass file to test out the install
  - Make sure you either stick to spaces or tabs; I prefer tabs

```scss
.special
    Background: #990000
    P
        color: #ffffff
```

- Note that it looks like CSS, but minimalist, without all the curly braces and semicolons
- Also, SASS uses nested indentantions to set children elements
- Go back to your Terminal
  - Issue the following command: `sass test.sass test.css`
- Make sure you run the command in the appropriate folder where the `test.sass` file was saved
- It should generate a new file titled `test.css` with css code
  - There are different ways to output css from sass/scss, but here are a few commands to modify the output style, [SASS Lang - output styles](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#output_style)

### Automatically compiling to CSS

To set up the compiling to run in the background and “watch” your directories of .sass for new changes, issue the following command while in the same dir where you have your test files from before: `sass --watch test.sass:test.css`

To exit `--watch`, press `CTRL + C`

## SASS and Bourbon

[Getting started with SASS and Bourbon](https://www.sitepoint.com/getting-started-sass-bourbon/)

[Bourbon Docs](http://bourbon.io/docs/)
[SASS Lang - guide](http://sass-lang.com/guide)
[SASS Lang - reference](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)

### Using SASS

- Install Ruby gem
  - Use a development kit that includes Sass (like the Mac app Codekit)
  - Use LibSass library for native compilation performance in a language like Node or C
- Write CSS using the Sass language
- Then compile that into regular CSS that any browser can read and understand

### Installing SASS

- If using Mac, Ruby is pre-installed
  - If you don’t have Ruby installed, here are the detailed [instructions](https://www.ruby-lang.org/en/documentation/installation/)
  - If you run into any “you don’t have write permissions for the /Library/Ruby/Gems/2.0.0 dir” messages, then use the following command to open ownership in that directory

```shell
sudo chown -R $USER /Library/Ruby/Gems/2.0.0
```

- You might run into another ownership problem in the bin directory, so use the same command, but replace the directory path

```shell
sudo chown -R $USER /usr/local/bin
```

- Open Terminal and verify that you have a stable release of Ruby 1.9.3 or later installed
- Issue the following command in Terminal: `gem install sass`
- Verify that Sass is working by issuing a version check in Terminal: `sass -v`

### Installing Bourbon

Issue the following command: `gem install bourbon`

- Bourbon mixins have to be downloaded to the same folder you're working with your `test.sass` file
  - Issue the following command: `bourbon install`
  - This will create a subdir with all of the prebuilt tools
- To import Bourbon, edit your test.sass file to have: `@import bourbon/bourbon`

### First Bourbon mixin

Mixins take arguements and are invoked by using `@include`

Some predefined mixins have the ability to generate browser-specific CSS prefixes without all the duplicate code:

```scss
@import bourbon/bourbon
.special
    @include linear-gradient(#990000,#000000)
    p
        color: #ccccff
```

Run the compiler and check the output css file
