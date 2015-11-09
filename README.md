# No Thank You, Cushion

Gunosy や NewsPicks などのクッションページをスキップして元記事に飛ばす Chrome Extension です。

## インストール

Chrome の拡張機能でデベロッパーモードを ON にして、「パッケージ化されていない拡張機能を読み込む...」から dist/ を選択。

## 開発

開発は app/scripts.babel/ 以下を編集。

```
$ grunt debug
```

## ビルド

自前で dist/ を作る方法。

```
$ npm install
$ grunt build
```

恐らく grunt build に失敗すると思います。

[yeoman/generator-chrome-extension](https://github.com/yeoman/generator-chrome-extension) 0.4.2 を使っているんだけど、
imagemin:dist で

```
Fatal error: Cannot read property 'contents' of undefined
```

が出るはず。

原因は grunt-contrib-imagemin 0.9.4 が古い imagemin を使っているからなので、
node_modules/grunt-contrib-imagemin/package.json の imagemin を最新版の 4.0.0 に書き換える。

```
  "dependencies": {
    "async": "^0.9.0",
    "chalk": "^1.0.0",
    "gulp-rename": "^1.2.0",
    "imagemin": "^4.0.0", # ←ここ
    "pretty-bytes": "^1.0.1"
  },
```

package.json を修正したら忘れずに npm install して grunt build でうまくいくはず。

```
$ npm install
$ grunt build
```

## 対応クッションページ

- Antenna
- Gunosy
- LINE NEWS
- NewsPicks

## ライセンス

MIT

### Thank You,  Icons!

Icons made by [Freepik](http://www.freepik.com "Freepik") from [www.flaticon.com](http://www.flaticon.com "Flaticon") is licensed by [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/ "Creative Commons BY 3.0")
