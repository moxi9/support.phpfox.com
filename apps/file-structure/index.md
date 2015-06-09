---
layout: default
title: Understanding the App File Structure
---

# Understanding the App File Structure

Apps are based on a basic MVC (Model-View-Controller) infrastructure. Model classes give access to our database
layer, which by default uses MySQLi.

For **views** you use HTML and can take advantage of using [Twig](http://twig.sensiolabs.org/) as this is our HTML pre-parser for apps.

All apps are located in the folder **/PF.Site/Apps/**

Name | Info
--- | ---
/assets/ | Javascript, CSS &amp; Images
/Controller/ | PHP controller classes. Used to connect routes to PHP classes.
/Model/ | PHP classes you can use to interact with the sites database.
/views/ | HTML files to control the look of each page.
/app.json | Main config file for each app.
/app.lock | App is installed when this file exists.
/start.php | File is loaded on every page and is designed to be used to create routes.

## Assets

When creating a new app we include default JavaScript and CSS assets to get you started.

**/assets/autoload.js**

If an app has an asset named *autoload.js*, we load it on every page. This is where you can add any JavaScript you may need.

> Note: Make sure to add Javascript/jQuery inside the **$Ready** function as this fires when the document is ready and when any new
> data has been added to the document.

<pre><code class="javascript">$Ready(function() {
    // JavaScript/jQuery goes here...
});</code></pre>

**/assets/autoload.css**

If an app has a file named *autoload.css*, we will include it on every page.

> Note: We create a **autoload.less** file by default and this allows you to work with our less variable. Try to use an IDE with Less support
> or simply rename the file to **autoload.css**

In the default less file we provide it imports the variables from our Base variable file.

<pre><code class="css">@import "../../../../../PF.Base/less/variables";</code></pre>

<a href="/apps/configuration/" class="next">App Configuration with app.json</a>