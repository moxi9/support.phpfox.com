---
layout: default
title: Getting started with Apps
---

# Getting Started with Apps

Each app is stored on a clients web server and is developed in PHP.
However, Neutron supports API calls to a clients web server via a unique ID &amp; Key. This allows you to create
an app in any language of choice, including mobile apps.

## Creating a New App

From your Admin Control Panel click on **Apps** and then **NEW APP**.

In the modal popup add the name of your app and hit **Submit** to be on your way.

![](/assets/img/new-app.png)

> Note: You can import Apps from Github. Just paste the URL to the .git file and it will clone it if your server supports git.

> Product name can only contain alphanumeric characters and/or an underscore.

## Guidelines

Before you jump to the next article. In many of the upcoming examples we use terms such as **Acme**, which is used to resemble your
products name. When accessing a URL we use <mark>http://localhost/</mark> and in the examples we provide we always use Short URLs.

If your developing Apps locally and using PHP we suggest to use an IDE. It will be easier to navigate between classes
and to understand what a method does.

<a href="/apps/file-structure/" class="next">Understanding the App File Structure</a>