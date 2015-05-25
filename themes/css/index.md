---
layout: default
title: Editing your sites CSS with PHPfox
---
# Editing your Themes CSS

When editing CSS from the AdminCP you will notice the editor is blank when first opening it. This is designed to allow you to
append any custom CSS you wish to overwrite.

To find out what CSS ID's &amp; classes to modify you can use [Firebug](http://getfirebug.com/).

<a href="/themes/javascript/" class="next">Editing JavaScript</a>

> **Developers Note:**
> *We use [Less](http://lesscss.org/) as our CSS pre-preprocessor.*
> Less variables can be found in the file: **/PF.Site/themes/{$THEME_ID}/flavor/{$FLAVOR_ID}.less**