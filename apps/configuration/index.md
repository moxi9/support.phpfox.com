---
layout: default
title: App Configuration with app.json
---

# App Configuration with app.json

Each app has an **app.json** file. This file is used to configure how an app is to be loaded, product versioning, install instructions.

The base app.json file will look something like this:
<pre><code class="json">{
    "id": "Acme",
    "name": "Acme",
    "version": 1,
    "icon": "http:\/\/cdn.com\/acme.png",
    "settings": {
    	"foo": {
    		"info": "Foo Setting for Bar"
    	}
    },
    "js": [
    	"http://cdn.com\/acme.js"
    ]
    "menu": {
    	"name": "Acme",
    	"url": "/acme",
    	"icon": "smile-o"
    }
}</code></pre>

## Config Params

Name | Info
--- | ---
id | Products ID. Must be a valid path in the **PF.Site/Apps/** directory. When creating this id, keep in mind that it can only contain alphanumeric characters and/or an underscore.
name | Name of your product.
version | Version of your product.
icon | Full path to where icon is located.
settings | Define settings Admins can edit from the Admin Control Panel.
js | If you wish to include external JavaScript files you can add them here as an (array).
menu | Define if a menu should be created on the initial install.

> When making changes to this file and it may require clearing your sites cache in some instances.

<a href="/apps/routing/" class="next">Working with Routes</a>