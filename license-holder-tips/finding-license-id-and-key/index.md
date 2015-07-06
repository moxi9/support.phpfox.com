---
title: Finding your License ID &amp; Key
layout: default
---

# Finding your License ID &amp; Key

When installing an app, theme or when downloading PHPfox you are asked to enter your sites License ID and Key. This information is emailed
to you when you first purchase a license. If you have lost this information you can retrieve from [here](http://store.phpfox.com/download?lost=id).

## Access license key from web server

If you are running Neutron (v4 or higher) you can access your sites license information by opening the file **/PF.Base/file/settings/license.sett.php**.

In that file you will find something like:
<pre><code class="php">define('PHPFOX_LICENSE_ID', 'c5daa43d32eabb6da3e3ad6966ffa87d');
define('PHPFOX_LICENSE_KEY', 'f353c6edf0293240a372d7876f27832f');
</code></pre>

The 32 character jumble of letters and numbers is your license ID and Key.