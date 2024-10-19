---
layout: default
title: blog
---
<h1>latest rambles</h1>

{% for post in site.posts %}

  <h2><a href="{{ post.url }}">{{ post.title }}</a> ~ {{ post.date | date_to_string }}</h2>
  {{ post.excerpt }}

{% endfor %}