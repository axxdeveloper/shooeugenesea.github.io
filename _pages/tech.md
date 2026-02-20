---
layout: archive
title: "Tech"
permalink: /tech/
---

{% for post in site.posts %}
  {% unless post.categories contains 'macro' %}
    {% include archive-single.html type="list" %}
  {% endunless %}
{% endfor %}
