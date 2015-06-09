---
layout: default
title: Routing
---

# Routing

In order for a page to exist a route must be created for it. There are several ways to output a page, as well as several methods
to create a route. Our first step will be to create the most basic route.

## Inline Routing

This method of creating a route is for smaller apps that do not need a PHP class structure. To get this started in your
app folder open the file **start.php**. In that file add the following:
<pre><code class="php"><?php

(new Core\Route('/hello-world'))->run(function() {
    echo "Hello World!";
});</code></pre>

Once you saved the file, visit your site by going to <mark>http://localhost/hello-world</mark>

If all goes well, you should see a blank page with just **Hello World!**

You have created your first route! Let's take a look at what we have done thus far. In order to create a new route we access
our **Core** class **Route**. The same code above could look like this instead.

<pre><code class="php"><?php

$Route = new Core\Route('/hello-world');
$Route->run(function() {
	echo "Hello World!";
});
</code></pre>

The **run** function accepts a callback and anything you echo in that file will be output to the browser.

## Adding a View

The page looks a little boring, lets connect our page to the base theme. In order to do this we need to work with HTML **views**.
For this example lets create a file called **hello-world.html** in the **/views/** folder of your app. In that file add
<pre><code class="php">Hello World with a different view!</code></pre>

Next, lets go back to our **start.php** and replace that file with
<pre><code class="php"><?php

(new Core\Route('/hello-world'))->run(function(Core\Controller $Controller) {

    return $Controller->render('hello-world.html');
});</code></pre>

Now when you visit <mark>http://localhost/hello-world</mark> you will find *"Hello World with a different view!"* in the main content area and now connected to the sites theme.

We now added a **return** using the **render** function, which is part of the **Core\Controller** class.
<pre><code class="php">return $Controller->render('hello-world.html');</code></pre>

<a href="/apps/controllers/" class="next">Route to Controllers</a>

