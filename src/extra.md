---
title: Extra ⁑ nonkiru.art
layout: silly.njk
h1: Extras
---

<div class="linksbox">
<div class="flex">

<div class="linksbox">

## Blog Posts

<br>
my little spot to ramble about stuff!!
<br>Posts are from newest to oldest.

<ul>
{%- for blog in collections.blog reversed  -%}
  <li><a href="{{ blog.url }}">{{ blog.data.title }}</a> ~ <small>{{ blog.data.datepost }}</small> </li>
{%- endfor -%}
</ul>

</div>

<div class="linksbox">

## Guestbook

<div class="flex" style="margin: auto;max-width: 400px;">
<div>
<img src="/assets/website/buttons/guestbook.png" alt="">
</div>
<div style="padding-top: 15%;">
<a href="/guestbook/">leave a little message for me to read?</a>
</div>
</div>

</div>

</div>
</div>

<div class="linksbox">
<div class="flex">

<div class="linksbox">

## OCs

<img src="/assets/website/buttons/ocs.png" alt="">
<br><a href="/ocs/">check out how normal i am about my funny little guys</a>

</div>

<div class="linksbox">

## Website Resources

### stuff i've made
<a href="/resources/">free to use pixels!!</a>
<br>
<a href="/layouts/">free to use layouts!!</a>

### bookmarks
<a href="https://www.w3schools.com/">w3schools</a>
<br>
<a href="https://sadgrl.online/learn/">sadgrl.online guides</a>
</div>

</div>
</div>