---
layout: default
title: Working with the API
---

# Working with the API

You can access the products API internally via your PHP app files or externally via REST.

## Internal Access

To access the API internally, we use PHP namespaces to connect to the PHP class files. Since the API is also built
to respect the RESTful architecture (e.g. GET, PUT, DELETE, POST), the function names for each resource uses the request method.

As a quick example, if we wanted to retrieve info about a user the PHP code would be
<pre><code class="php">$User = new \Api\User();
$object = $User->get(1);</code></pre>

This will retrieve a user, with the USER ID# 1. Translated to REST it would be <mark>http://localhost/api/user/1</mark>

Let's try another example. Say we wanted to get a list of users. The REST URL would be <mark>http://localhost/api/user</mark>.

Using PHP this would then be
<pre><code class="php">$User = new \Api\User();
$object = $User->get();</code></pre>

The code looks similar to what we added earlier, however this time we did not pass the User ID# 1 and instead just called the
**->get()** method directly. This will now return an array of users.

## External Access

If you prefer to develop your app externally or you need RESTful access because you are developing an iPhone app you can access
a clients site by using a unique ID and Key we provide to you when a client installs your product.

This requires setting up a Developers Account with us so you can provide a webhook URL so we can send you the clients
endpoint and unique authentication ID and Key. Once you have this information you will be able to access the clients API resources.

We use HTTP Basic Authentication to pass the ID & Key.

Here is the API at its most basic form using cURL.
<pre><code class="curl">curl -X GET -u {AUTH_ID}:{AUTH_PASS} http://localhost/api/user/</code></pre>

<a href="/apps/examples-and-resources/" class="next">Check out some Examples & Resources</a>