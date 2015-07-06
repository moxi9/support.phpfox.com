---
layout: default
title: Models, Database & Autoloading
---

# Models, Database & Autoloading

If you need to interact with the database or simply want to separate your Controller logic, you can create PHP Model classes that extend
the **Core\Model** class. Similar to Controllers, we use PHP namespaces to connect to PHP class files via autoloading.

Accessing a PHP Model can be done by adding this into your Controller
<pre><code class="php">$Model = new \Apps\Vendor_Acme\Model\Process();</code></pre>

In this example, **Vendor** is our company and **Acme** is our app. So the relative path to the PHP file **/PF.Site/Apps/Vendor_Acme/Model/Process.php**

> Note: The **Vendor_** is optional, but helps to keep your product names unique.

Our **Process.php** class file would look something like
<pre><code class="php"><?php

namespace Apps\Vendor_Acme\Model;

class Process extends \Core\Model {
	public function make() {

	}
}</code></pre>


## Database

When extending the **Core\Model** class you get access to the Database object layer.

In the **make** function for this Model lets add the following
<pre><code class="php">$users = $this->db->select('*')->from(':user')->limit(10)->all();
print_r($users);</code></pre>

This will print a list of users, limiting it to 10. Translated into an SQL query, this would be
```
SELECT * FROM phpfox_user LIMIT 10
```

> Note: Instead of adding **->from($this->db->table('user'))** we use the shorthand **->from(':user')**, where ":" is converted
> to the table prefix.

## Autoloading Composer Packages

[Composer](https://getcomposer.org/) provides a wonderful packaging system where you can find tons of [libs to work with](https://packagist.org/).
If your app has the **vendor/** folder and an **autoload.php** file provided by Composer we will include that file when we load your app. So
the composer autoloader is auto loaded for you.

<a href="/apps/forms-and-validation/" class="next">Forms & Form Validation</a>