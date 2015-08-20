---
layout: default
title: Blocks
---

# Blocks

Your app may not need full out controllers and may focus on creating features by providing sites with additional blocks.

You can define a specific controller where the block should show up on.

In your **start.php** add the following
{% highlight php %}
new Core\Block('core.index-member', 1, function(Core\Block $block) {
	$block->title('Hello World!');
	$block->content('I am a block...');
});
{% endhighlight %}

In this example we attach a block to the **core.index-member** controller, as defined by the first argument.
 
The 2nd argument is the location of the block. **1** is the main side panel. 

Your options are...

* 1 = Main side panel
* 3 = Secondary side panel
* 2 = Main content
* 4 = Secondary content

The 3rd argument is a callback, which is where you can do your work.

The above example will output...

![](/assets/img/block.png)

To find out what the name of a controller is, lets first visit your sites dashboard as a user. View the HTML source of the page.

Look for...
{% highlight html %}
<body id="page_core_index-member"
{% endhighlight %}

So, when looking for the controller name you first remove **page__** and then replace the first underscore with a dot. So the controller for this page is

    core.index-member
    
If you visit your blog section, the body ID will be **page_blog_index**, so the controller would then be **blog.index**.

## Creating an Empty Block

**Requires:** PHPfox >= 4.0.7

You can also create an empty block by just returning an HTML string.

{% highlight php %}
new Core\Block('route_hello-world', 1, function(Core\Block $block) {
	return 'Hello!';
});
{% endhighlight %}

## Attaching Blocks to Routes
 
**Requires:** PHPfox >= 4.0.7

If you are developing routes in your apps, you can attach a block to that route without having to define the controller name.
{% highlight php %}
new Core\Route('/hello-world', function(Core\Controller $controller) {
	$controller->block(1, function(Core\Block $block) {
		return 'Empty Block...';
	});
	
	return $controller->render('index.html');
});
{% endhighlight %}
