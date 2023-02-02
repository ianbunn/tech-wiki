# Apple Defaults

## Read Defaults

```shell
# Run the following command to view all of the defaults variables
defaults read
```

## Dock

### Dock Spacers

```shell
# Run the following command to add an empty app tile as a spacer in your Dock
# This can be done to separate apps by groups, etc.
# `killall` stops the process for the argument passed in, Dock in this case
defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="spacer-tile";}'; killall Dock
```

### Show Hidden Apps Dimmed On Dock

```shell
# Run the following command to show hidden apps on the Dock dimmed out
# `killall` stops the process for the argument passed in, Dock in this case
defaults write com.apple.dock showhidden -bool yes; killall Dock
```

### Instant Auto Hide/Show Dock

```shell
# Run the following command to set the wait time to 0 when hiding or showing the Dock when feature is turned on
# `killall` stops the process for the argument passed in, Dock in this case
defaults write com.apple.Dock autohide-delay -float 0; killall Dock
```

## Finder

### Show Hidden Files in Finder

```shell
# Run the following command to show all files, including hidden files in Finder
# `killall` stops the process for the argument passed in, Finder in this case
defaults write com.apple.Finder AppleShowAllFiles true; killall Finder
```
