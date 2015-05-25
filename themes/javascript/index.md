---
layout: default
title: Editing your sites Javascript with PHPfox
---
# Editing your Themes Javascript
![](/assets/img/editing-javascript.png)

When you are working with JavaScript you need to make sure to place any code within our **$Ready** function. This function is called
whenever a page is loaded and is fired when the document is ready.

We use [jQuery](https://jquery.com/) as our main library of choice.

<pre><code class="javascript">$Ready(function() {
	// add JS here... jQuery is supported!
});
</code></pre>