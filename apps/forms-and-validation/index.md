---
layout: default
title: Forms & Form Validation
---

# Forms & Form Validation

You can create forms for your apps using your own methods as well as validating forms with your favorite libs. However,
if you want, especially when it comes to build forms you can use our built-in features. When it comes to working
with the HTML part of the form, if you us our built-in methods it will match the sites theme. Plus its a lot less work when
it comes to writing down the HTML.

## HTML

In our HTML view files you can create forms that look like this

{% highlight html %}
{% raw %}
<form method="post" action="{{ url('/acme') }}">
    {{ Form.text('field_1', 'Text Input') }}
    {{ Form.submit('Submit') }}
</form>
{% endraw %}
{% endhighlight %}

Once we pre-parse the HTML file your form will turn into
{% highlight html %}
<form method="post" action="http://localhost/acme/">
	<div class="table">
		<div class="table_left">Text Input</div>
		<div class="table_right">
			<input type="text" id="__form_field_1" name="val[field_1]" value="" placeholder="">
		</div>
	</div>
	<div class="table_clear">
		<input type="submit" value="Submit" class="button">
	</div>
</form>
{% endhighlight %}

As you can see in this small example it can help save on rewriting a lot of extra HTML. Plus it gets easier
when dealing with select drop downs since you can just pass a PHP array.

## Validation

In your PHP controllers you can validate your forms using our core Validator class. An example of how validation works
{% highlight php %}
(new Core\Validator())
	->rule('field_1')->required()->min(4)
	->make();
{% endhighlight %}

This is the short hand method and you could also call this like
{% highlight php %}
$Validator = new Core\Validator();
$Validator->rule('field_1')->required()->min(4);
$Validator->make();
{% endhighlight %}

You can place the validation code anywhere in your controller since the **make()** method only checks a form validation when a form has been posted.

<a href="/apps/api/" class="next">API Access</a>