---
title: Sitemap ⁑ nonkiru.art
layout: silly.njk
h1: Sitemap
---

<h2>Sitely</h2>
<ul>
    <li id="home"><a href="/index/">Home</a></li>
    <li id="sitelayouts"><a href="/layouts/">Website Layouts</a></li>
    <li id="sitelayouts"><a href="/resources/">F2U Resources</a></li>
    <li id="guestbook"><a href="/guestbook/">Guestbook</a></li>
    <li id="link"><a href="/links/">Links</a></li>
</ul>
<h2>Personal</h2>
<ul>
    <li id="about"><a href="/about/">About Me</a></li>
    <li id="art"><a href="/art/">Art</a></li>
    <li id="blog"><a href="/blog/">Blog</a></li>
    <li id="oc"><a href="/ocs/">OCs</a></li>
    <li id="reading"><a href="/reading/">Reading</a></li>
</ul>

## OCs
<ul>
    <li><a href="/ocs/myuri/">Myuri</a></li>
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