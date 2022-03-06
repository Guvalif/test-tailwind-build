const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const webpack_config = {
  target: 'web',

  entry: {
    // ※ TypeScript を導入せずに Test しているので、実際に使う際には変更してください
    'assets/js/app': `${__dirname}/src/index.js`,
  },

  output: {
    path: __dirname,
    filename: '[name].js',
  },

  resolve: {
    extensions: ['.js'],
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [
                  require('tailwindcss'),
                  require('postcss-nested'),
                ],
              },
            },
          }
        ],
      }
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/css/index.css',
    }),
  ],
};

module.exports = webpack_config;
