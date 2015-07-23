---
layout: default
title: AJAX
---

# Working with AJAX

You can create your own AJAX calls using built-in features that jQuery provides and simply send them to your routes.

Place all your JavaScript in the **autoload.js** file, which should be placed in your **/assets/** folder.

An example of how an **autoload.js** file could look
{% highlight javascript %}$Ready(function() {
	$('.my-ajax-link').click(function() {
		var t = $(this);

		$.ajax({
			url: t.data('url'),
			success: function(e) {
				$('#ajax-response-custom').html(e);
			}
		});

		return false;
	});
});{% endhighlight %}

Your HTML view could then be
{% highlight html %}{% raw %}<a href="#" data-url="{{ url('/ajax-custom') }}" class="my-ajax-link">Click Me</a>
<div id="ajax-response-custom"></div>
{% endraw %}{% endhighlight %}

Your PHP route, which for this example we are placing in our **start.php** file
{% highlight php %}new Core\Route('/ajax-custom', function(Core\Controller $controller) {
	echo '<div class="message">Howdy! I am an AJAX response.</div>';
});
{% endhighlight %}

Once you click the link the AJAX response should output in the HTML div **#ajax-response-custom**, which in this case should be

> Howdy! I am an AJAX response.

## Using the internal AJAX method

You can also use our own internal AJAX method.

In a new example, your link could then be
{% highlight html %}{% raw %}
<a href="{{ url('/ajax-get') }}" class="ajax">Click Me</a>
<div id="ajax-response"></div>
{% endraw %}{% endhighlight %}

We pick up on the **.ajax** selector and to catch this request we have the following PHP route.

{% highlight php %}new Core\Route('/ajax-get', function(Core\Controller $controller) {

	return [
		'run' => "$('#ajax-response').html('<div class=\"message\">Hello World! Me is AJAX response.</div>');"
	];
});
{% endhighlight %}

Unlike our first example, we return the output as an ARRAY. Any response that is an ARRAY we output as JSON. Our AJAX
function has several built-in options and if you simply wish to run your code, add it in the **run** key.

