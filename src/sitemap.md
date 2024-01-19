---
title: Sitemap ⁑ nonkiru.art
layout: silly.njk
h1: Sitemap
---

{% include 'partials/nav.njk' %}

## OCs
<ul>
    <li><a href="/ocs/myuri/">Myuri Nohn</a></li>
    <li><a href="/ocs/billie/">Billie Tae-Gloria</a></li>
    <li><a href="/ocs/jupiter/">Jupiter Scottson</a></li>
    <li><a href="/ocs/estelle/">Estelle Linne</a></li>
    <li><a href="/ocs/donnie/">Donnie Linne</a></li>
</ul>

## Other Links
<ul>
    <li><a href="/accessibility/">Accessibility</a></li>
    <li><a href="/sitemap/">Sitemap</a></li>
    <li><a href="/not_found/">404 Not Found</a></li>
    <li><a href="/art/2024/">2024 Gallery</a></li>
    <li><a href="/art/2023/">2023 Gallery</a></li>
    <li><a href="/art/2022/">2022 Gallery</a></li>
    <li><a href="/layouts/cheesecake/">Website Layouts ~ Cheesecake</a></li>
</ul>

<h2>Blog Posts</h2>
<ul>
{%- for blog in collections.blog reversed  -%}
  <li><a href="{{ blog.url }}">{{ blog.data.title }}</a></li>
{%- endfor -%}
</ul>