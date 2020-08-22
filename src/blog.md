---
layout: 'layouts/feed.html'
pagination:
  data: collections.blog
  size: 5
permalink: '{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
---
