---
layout: default
title: Managing Themes with PHPfox
---
# Managing Themes with PHPfox
![](/assets/img/managing-a-theme.png)

Each theme comes with the ability to add several **Flavors**. Flavors control the color scheme for your theme. When you first
open the Theme Manager it will allow you to manage the base controllers for a flavor. This is from colors, fonts, dimensions.

You can also export and set a theme as the sites default theme from here.

<a href="/themes/html/" class="next">Editing HTML</a>

> **Developers Note:**
> *We use [Less](http://lesscss.org/) as our CSS pre-preprocessor.*
> The variables found within the Theme Manager are from the file: **/PF.Site/themes/{$THEME_ID}/flavor/{$FLAVOR_ID}.less**