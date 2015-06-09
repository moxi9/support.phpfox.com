---
layout: default
title: Working with the Database via Models
---

# Working with the Database via Models

If you need to interact with the database or simply want to separate your Controller logic, you can create PHP Model classes that extend
the **Core\Model** class. Similar to Controllers, we use PHP namespaces to connect to PHP class files.

Accessing a PHP Model can be done by adding this into your Controller
<pre><code class="php">$Model = new \Apps\Vendor\Acme\Model\Process();</code></pre>

In this example, **Vendor** is our company and **Acme** is our app. So the relative path to the PHP file **/PF.Site/Apps/Vendor/Acme/Model/Process.php**

Our **Process.php** class file would look something like
<pre><code class="php"><?php

namespace Apps\Vendor\Acme\Model;

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

<a href="/apps/api/" class="next">Working with the API</a>