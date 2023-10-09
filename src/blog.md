---
title: Blog ⁑ nonkiru.art
layout: layout.njk
h1: Blog
---

<br>
My little spot for writing about things that I like. Or maybe, things that I dislike, too!
<br>Posts are from newest to oldest.a
<ul>
{%- for blog in collections.blog reversed  -%}
  <li><a href="{{ blog.url }}">{{ blog.data.title }}</a> ~ <small>{{ blog.date | readableDate }}</small></li>
{%- endfor -%}
</ul>