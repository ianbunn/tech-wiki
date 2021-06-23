# WordPress

WordPress (WP) = Content Management System (CMS)

## [Change & Update WP URLs in DB when Site is Moved to New Host](https://wpbeaches.com/updating-wordpress-mysql-database-after-moving-to-a-new-url/)

## [Configure the WP Domain Name in `wp-config.php`](https://docs.bitnami.com/installer/apps/wordpress/administration/configure-domain/)

## [WP Permissions Update Error](https://aaronjholbrook.com/wordpress-permissions-update-error-resolved/)

## Changing domain names in WP

To change the domain name in WordPress, you have to SSH into the server:

- Navigate to `wp_config.php` within the server
- Edit domain name within the file

Then, DB needs to be updated with the new domain name:

- Use Sequel Pro to connect to your DB
- Run the following query to update the occurrences below in the `wp-options` table:

```sql
UPDATE wp_options SET option_value = replace(option_value, 'oldurl', 'newurl') WHERE option_name = 'home' OR option_name = 'siteurl';
```

- `wp_options` is the table the query will update
- `option_value` is the field the query will look for to replace the value you are passing
- `oldurl` is the old domain name
- `newurl` is the new domain name

- Run the following query to update the `posts` table:

```sql
UPDATE wp_posts SET guid = replace(guid, 'oldurl','newurl');
```

- `wp_posts` is the table the query will update
- `guid` is the field the query will look for to replace the value you are passing
- `oldurl` is the old domain name
- `newurl` is the new domain name

- Run the following query to update the `wp_posts` table:

```sql
UPDATE wp_posts SET post_content = replace(post_content, 'oldurl', 'newurl');
```

- `wp_posts` is the table the query will update
- `post_content` is the field the query will look for to replace the value you are passing
- `oldurl` is the old domain name
- `newurl` is the new domain name

- Run the following query to update the `wp_postmeta` table:

```sql
UPDATE wp_postmeta SET meta_value = replace(meta_value,'oldurl','newurl');
```

- `wp_postmeta` is the table the query will update
- `meta_value` is the field the query will look for to replace the value you are passing
- `oldurl` is the old domain name
- `newurl` is the new domain name

## Edit `php.ini` to increase upload size

The `php.ini` file should be located in the `home` folder in server, and the section to look for the code below should be titled `File Uploads`:

```shell
upload_max_filesize: 64M
post_max_size: 90M
memory_limit: 128M
```

## Fix 404 - not found error

There are a few possible causes for the "Not Found" error:

- Permalink structure
- `.htaccess` file CHMOD settings

More information in [Turbofuture - WP not found error fix](https://turbofuture.com/internet/wordpress-not-found-error-fix)

## WP theme development using Ansible by [@roots](https://github.com/roots/trellis) (NOTES NOT COMPLETED)

### Helpful links

- [Ansible - install guide](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#latest-releases-via-pip)
- [Left off here, since I stopped working on a local environment and decided to go the long, easy way via FTP, BORING!](https://docs.ansible.com/ansible/latest/reference_appendices/config.html#ansible-configuration-settings-locations)
- [Video I was following to set up Trellis (left off on min marker 5:35)](https://www.youtube.com/watch?v=E8lRan53ZgoGithub/roots/Trellis)
- [Github - @roots/trellis](https://github.com/roots/trellis)

**Make sure you have the latest `pip` installed (version 10 >=)**

Start by running the following commands:

```shell
sudo easy_install pip
sudo pip install ansible
```

After installation is complete, you will receive this message:

```shell
Successfully installed MarkupSafe-1.1.0 ansible-2.7.4 asn1crypto-0.24.0 bcrypt-3.1.4 cffi-1.11.5 cryptography-2.4.2 ipaddress-1.0.22 jinja2-2.10 paramiko-2.4.2 pycparser-2.19 pynacl-1.3.0
```

[Back home](../README.md)
