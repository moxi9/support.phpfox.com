---
layout: default
title: Controllers
---

# Controllers

If your app starts to grow, it might be a good idea to move away from <a href="/apps/routing/#inline-routing">Inline Routing</a> and organize routes to controllers.

## Routing

In your **start.php** file for your app replace the file with
<pre><code class="php"><?php

(new Core\Route('/hello-world'))->call('\Apps\Vendor\Acme\Controllers\Base@index');</code></pre>

We use PHP namespaces to access PHP class files. Any class that starts with **Apps** will be picked up by our register.
The rules for our namespacing is to use the relative path to the PHP file. So in this example,
**Vendor** is our company and **Acme** is our app.
So the relative path to the PHP file **/PF.Site/Apps/Vendor/Acme/Controllers/Base.php**

In your **Base.php** add
<pre><code class="php"><?php

namespace Apps\Vendor\Acme\Controllers;

class Base extends \Core\Controller {
    public function index() {

        return $this->render('hello-world.html');
    }
}</code></pre>

In this route we used **@index**, which identifies what the name of the function we should call.
Similar to <a href="/apps/routing/#inline-routing">Inline Routing</a>, we have access to the **Core\Controller** class since this
controller extends it. We use the **render** function to connect to the HTML view **hello-world.html** (to be found in the */views/* folder).

<a href="/apps/models-and-database/" class="next">Working with the Database via Models</a>