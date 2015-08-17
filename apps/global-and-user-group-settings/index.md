---
layout: default
title: Global & User Group Settings
---

# Global & User Group Settings

Adding both global and user group settings can be done from your **app.json** file.

## Global Settings

Global settings are used to give your app the power to control certain features in a global sense. These settings are not specific to a user
group and are mainly used to provide authentication settings or to enabling/disabling a feature.

In this example, our **app.json** file look like this...
{% highlight json %}
{
	"id": "PHPfox_Settings",
	"name": "PHPfox Settings Test",
	"version": "1.0",
	"icon": "",
	"settings": {
		"pfs_test": {
			"info": "What is your name?"
		}
	}
}
{% endhighlight %}

The part we need to focus on is...
{% highlight json %}
"settings": {
	"pfs_test": {
		"info": "What is your name?"
	}
}
{% endhighlight %}

Once you provide this set of objects, these settings will show up in the AdminCP when visiting your app.

![](/assets/img/admincp-global-setting.png)

Enter a value for this setting and you can later output it via route
{% highlight php %}
new Core\Route('/phpfox-settings-test', function() {
	echo 'My name is: ' . setting('pfs_test');
});
{% endhighlight %}

## User Group Settings

Similar to global settings, you can define user group settings in your **app.json** file
{% highlight json %}
"user_group_settings": {
		"pfs_test_setting": {
			"info": "Do be or not to be?",
			"type": "input:radio",
			"options": {
				"yes": "Yes",
				"no": "No"
			}
		}
	}
{% endhighlight %}

When visiting your App in the AdminCP, you will find
![](/assets/img/admincp-user-group-settings.png)

To get the value of a user group setting in your Route, you can use
{% highlight php %}
new Core\Route('/phpfox-settings-test', function() {
	echo 'To be or not to be: ' . user('pfs_test_setting');
});
{% endhighlight %}