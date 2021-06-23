# Vagrant Box

## What is Vagrant

[Vagrant official page](https://www.vagrantup.com/)

Development environments made easy to allow:

- Unified workflow
  - It leverages a declarative config file which describes all your:
    - Software requirements
    - Packages
    - OS configuration
    - Users
    - More
- Enforces consistency
  - Vagrant aims to mirror PROD environments by providing the same config files
  - Integrates with existing config mgmt tooling like:
    - Chef
    - Puppet
    - Ansible
    - Salt

[Vagrant official docs](https://www.vagrantup.com/docs/index.html)

## Log in to Homestead's Vagrant virtual box

Run the following commands in the `homestead` folder in local machine:

```php
vagrant up
```

Then:

```php
vagrant ssh
```

[Back home](../README.md)
