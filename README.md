# No Thank You, Cushion

Gunosy や NewsPicks などのクッションページをスキップして元記事に飛ばす Chrome Extension です。

## インストール

Chrome の拡張機能でデベロッパーモードを ON にして、「パッケージ化されていない拡張機能を読み込む...」から dist/ を選択。

## ビルド

[yeoman/generator-chrome-extension](https://github.com/yeoman/generator-chrome-extension) 0.4.2 を使っているんだけど、
grunt build すると imagemin:dist で

```
Fatal error: Cannot read property 'contents' of undefined
```

が出る。

原因は grunt-contrib-imagemin 0.9.4 が古い imagemin を使っているからなので、
node_modules/grunt-contrib-imagemin/package.json の imagemin を最新版に書き換える。

```
  "dependencies": {
    "async": "^0.9.0",
    "chalk": "^1.0.0",
    "gulp-rename": "^1.2.0",
    "imagemin": "^4.0.0", # ←ここ
    "pretty-bytes": "^1.0.1"
  },
```

その後 npm install を忘れずに。

## 対応クッションページ

- Antenna
- Gunosy
- LINE NEWS
- NewsPicks

## ライセンス

MIT
