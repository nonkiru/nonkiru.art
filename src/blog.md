---
title: Blog ⁑ nonkiru.art
layout: silly.njk
h1: My Blog
---

My various little ramblings about anything I feel like writing about!

<!-- Test, trying to fix why the order is incorrect on live but working fine on hotreload? -->

<ul>
{%- for blog in collections.blog reversed  -%}
  <li><a href="{{ blog.url }}">{{ blog.data.title }}</a> ~ <small>{{ blog.data.datepost }}</small> </li>
{%- endfor -%}
</ul>