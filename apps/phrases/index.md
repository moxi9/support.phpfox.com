---
layout: default
title: Phrases
---

# Phrases

> **Requires:** PHPfox >= 4.0.1

## Phrase Variables

The product comes with over 7k phrases to use and can be found from the AdminCP by going to

> Site > Phrases

Let's visit that page and run a search for **sample_phrase**. Make sure to select **Phrase Variable Name Only**

![](/assets/img/search-phrase.png)

Your search should find the phrase **Sample Phrase**.

![](/assets/img/phrase-search-results.png)

The variable for this phrase is **core.sample_phrase**. In any of your HTML views or PHP controllers, well anywhere your App is connected to our
core you can use the internal function **_p()** to call a phrase.

In an HTML file it could look like:
{% raw %}
<pre><code class="html">{{ _p('core.sample_phrase') }}
</code></pre>
{% endraw %}

Using PHP
<pre><code class="php"> new Core\Route('/test-phrase', function() {
    echo _p('core.sample_phrase');
});
</code></pre>

## Phrasing without Variables

The product may come with over 7k phrases, however these are used internally and your app will likely need its own phrasing. You don't
need to create new phrases from the AdminCP, however you can if you want to. The easiest way to create a phrase is by doing so on the fly.

HTML...
{% raw %}
<pre><code class="html">{{ _p('Very Fly Sample Phrase') }}
</code></pre>
{% endraw %}
In this example we output your phrase if one does not exist in the clients database.

## Passing variables to phrases
Your phrases may need variables passed to it, and in HTML this can be done like so
{% raw %}
<pre><code class="html">{{ _p('Sample {{ phrase }}', {phrase: 'Phrase'}) }}
</code></pre>
{% endraw %}

Phrase variables must always being with double brackets and a space in-between each other.
{% raw %}
> {{ phrase }}
{% endraw %}