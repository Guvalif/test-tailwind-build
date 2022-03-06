## 最低限必要なもの

1. `postcss-loader`: 独自拡張を含む CSS の処理に必要
    - `postcss.config.js`: 動作に必要な設定ファイル (今回は webpack の設定ファイルにまとめて記述しているので、存在しない)
    - `tailwindcss`: postcss のプラグインとして実行 (`@tailwind` 記法が処理できるようになる)
        - `tailwind.config.js`: 動作に必要な設定ファイル
1. `css-loader`: CSS をパースするために必要 (正確には、JS から分離するために必要)
1. `MiniCssExtractPlugin`: CSS をファイルとして書き出すために必要 (書き出せるのであれば、他のプラグインでも問題無い)

## webpack 側の処理

- `require` や `import` に末尾が `.css` で終わるファイルが含まれるか？
    - **Yes** ⇒ 以下の順で Loader に処理を流す
        - `postcss-loader`
        - `css-loader`
        - `MiniCssExtractPlugin.loader`
