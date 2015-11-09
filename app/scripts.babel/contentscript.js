'use strict';

var rules = {
  '^https?:\/\/gunosy\.com\/': [
    '<p><a href="(.+?)">元記事を読む</a>',
    '<a class="btn" target="_blank" href="(.+?)">続きを読む</a>'
  ],
  '^https?:\/\/newspicks\.com\/': [
    '<a class="read-more center" href="(.+?)" target="_blank">続きを読む</a>'
  ],
  '^https?:\/\/news\.line\.me\/': [
    '<a class=".+?" href="(http:\/\/news\.line\.me\/image_link\/.+?)" target="_blank">'
  ],
  '^https?:\/\/antenna\.jp\/': [
    '<a href="(https:\/\/antenna.jp\/news\/.+?\/transition)'
  ]
};

function skip(rule) {
  var match = document.body.innerHTML.match(new RegExp(rule));
  if (match !== null) {
    location.replace(match[1]);
  }
}

var currentUrl = window.location.href;
for (var url in rules) {
  if (currentUrl.match(new RegExp(url))) {
    rules[url].forEach(skip);
  }
}
