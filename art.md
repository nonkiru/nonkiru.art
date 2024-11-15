---
layout: default
title: art
images2024:
  - image_path: /assets/images/art/tomoka.png
    title: tomoka
  - image_path: /assets/images/art/miku.png
    title: hatsune miku
  - image_path: /assets/images/art/latham.png
    title: commission for latham
  - image_path: /assets/images/art/adam_2.png
    title: commission for adam, 2
  - image_path: /assets/images/art/patchouli.png
    title: art of patchouli knowledge from touhou
  - image_path: /assets/images/art/adam.png
    title: commission for adam
  - image_path: /assets/images/art/jynx.png
    title: gift for zombiejynx
  - image_path: /assets/images/art/lachfinniel.png
    title: commission for lachfinniel
sketches2024:
  - image_path: /assets/images/art/iris.png
    title: iris simple sketch
  - image_path: /assets/images/art/mio.png
    title: mio simple sketch
  - image_path: /assets/images/art/nemi.png
    title: nemi simple sketch
  - image_path: /assets/images/art/yule.png
    title: yule simple sketch
pixel2024:
  - image_path: /assets/images/art/eden.png
    title: eden pixel art
  - image_path: /assets/images/art/romarique.png
    title: romarique pixel art
  - image_path: /assets/images/art/non.gif
    title: non pixel art
  - image_path: /assets/images/art/jynx.gif
    title: jynx pixel art
---

# 2024
## illustrations
<ul class="photogallery">
  {% for image in page.images2024 %}
    <li><a href="{{ image.image_path }}" target="_blank"><img src="{{ image.image_path }}" alt="{{ image.title}}"/></a></li>
  {% endfor %}
</ul>

## simple sketches
<ul class="photogallery">
  {% for image in page.sketches2024 %}
    <li><a href="{{ image.image_path }}" target="_blank"><img src="{{ image.image_path }}" alt="{{ image.title}}"/></a></li>
  {% endfor %}
</ul>

## pixel art
<ul class="photogallery">
  {% for image in page.pixel2024 %}
    <li><a href="{{ image.image_path }}" target="_blank"><img class="pixelart" src="{{ image.image_path }}" alt="{{ image.title}}"/></a></li>
  {% endfor %}
</ul>