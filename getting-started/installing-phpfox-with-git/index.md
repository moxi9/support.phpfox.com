---
layout: default
title: Installing PHPfox with Git
---
> **Notice:** This requires SSH access to your server

# Installing PHPfox with Git

This guide will help you through the installation process of PHPfox v4 or higher using Git.
This is not the most common method for our clients, but it is the preferred route. Upgrades via Git are a breeze
and installing nightly builds care free.

## Clone PHPfox

First step will be to clone a distribution copy of PHPfox from Github.

```
git clone https://github.com/moxi9/phpfox-dist.git .
```

## Folder Permissions

Once you have cloned PHPfox, you need to grant full read/write access to the following 2 folders:

```
chmod 0777 PF.Base/
```

```
chmod 0777 PF.Site/
```

{% include web-installer.md %}