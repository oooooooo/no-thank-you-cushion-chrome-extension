"use strict";function skip(a){var b=document.body.innerHTML.match(new RegExp(a));null!==b&&location.replace(b[1])}var rules={"^https?://gunosy.com/":['<p><a href="(.+?)">元記事を読む</a>','<a class="btn" target="_blank" href="(.+?)">続きを読む</a>'],"^https?://newspicks.com/":['<a class="read-more center" href="(.+?)" target="_blank">続きを読む</a>'],"^https?://news.line.me/":['<a class=".+?" href="(http://news.line.me/image_link/.+?)" target="_blank">'],"^https?://antenna.jp/":['<a href="(https://antenna.jp/news/.+?/transition)']},currentUrl=window.location.href;for(var url in rules)currentUrl.match(new RegExp(url))&&rules[url].forEach(skip);