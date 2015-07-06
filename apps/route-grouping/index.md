---
layout: default
title: Route Grouping
---

# Route Grouping

If your App has a lot of routes it might be easier to group them if your base URL stays the same.

<pre><code class="php">new Core\Group('/base', function() {

    new Core\Route('/', function() {
        echo "Base Index";
    });

    new Core\Route('/hello-world', function() {
        echo "Base / Hello World";
    });

});</code></pre>

In this example we have a route group with the name **/base**. This will then be the parent route (url) for all its
child routes. So for the first route we have **/**, this would translate to **/base/**. For our 2nd route we have **/hello-world**
this would translate to **/base/hello-world**.

<a href="/apps/models-and-database/" class="next">Working with the Database via Models</a>