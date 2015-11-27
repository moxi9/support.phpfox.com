---
layout: default
title: Manually Uploading Files
---
# Upgrading to PHPfox (Manually Uploading Files)

This guide will help you through the upgrade process of PHPfox v4 or higher.

## Downloading

Download the latest version of PHPfox from [here](http://store.phpfox.com/download).

Once you have downloaded and unzipped the package, you should see something like this...

![](/assets/img/files.png)

You are to upload those files and folders to your sites root directory.

> *Hint: If you have cPanel you will have a File Manager that has an Unzip feature. You could ZIP up those files/folders and upload the one ZIP file.
> Then unzip it on your server.*

## Folder Permissions

Once you have uploaded all the files/folders. You need to grant full read/write access (usually 0777) to the following 2 folders:

* PF.Base/
* PF.Site/

![](/assets/img/permission.png)

> *Note: Once you have completed the install you can return the permissions for the folder **PF.Base** back to what it originally was set to.*

{% assign isUpgrade = true %}
{% include web-installer.md %}