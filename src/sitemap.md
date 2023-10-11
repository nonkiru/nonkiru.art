---
title: Sitemap ⁑ nonkiru.art
layout: layout.njk
h1: Sitemap
---

{% include 'partials/nav.njk' %}

## Other Links
<ul>
    <li><a href="/accessibility/">Accessibility</a></li>
    <li><a href="/sitemap/">Sitemap</a></li>
    <li><a href="/not_found/">404 Not Found</a></li>
    <li><a href="/art_2023/"></a>2023 Gallery</li>
</ul>

<h2>Blog Posts</h2>
<ul>
{%- for blog in collections.blog reversed  -%}
  <li><a href="{{ blog.url }}">{{ blog.data.title }}</a></li>
{%- endfor -%}
</ul>