---
layout: default
title: Install, Un-install & Upgrades
---

# Install, Un-install & Upgrades

As for **4.0.5** you can create a file called **installer.php** in your apps root directory.

In that file add
{% highlight php %}
<?php

$installer = new Core\App\Installer();

$installer->onInstall(function() use ($installer) {
	// do stuffs
});
{% endhighlight %}

Within the **do stuffs** you can then perform any task you wish in order to complete the install of your app.

With the **$installer** variable we have access to the database.
{% highlight php %}
$installer->db->query('SELECT * FROM phpfox_user');
{% endhighlight %}
