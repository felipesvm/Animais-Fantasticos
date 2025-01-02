const path = require("path"); // Adicione esta linha caso não esteja no código
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  entry: "./js/script.js",
  output: {
    path: path.resolve(__dirname, "public"), // Altere o diretório de saída para 'public'
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // Extrai o CSS em um arquivo separado
          "css-loader", // Processa os @imports no CSS
          {
            loader: "postcss-loader", // Processa o CSS
            options: {
              postcssOptions: {
                plugins: [
                  require("autoprefixer")(), // Adiciona prefixos automaticamente
                ],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // Usa o arquivo HTML existente como modelo
      filename: "index.html", // Nome do arquivo gerado na pasta pública
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css", // Nome do arquivo CSS gerado
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "img", to: "img" }, // Copia a pasta 'imagem' para 'public/imagem'
      ],
    }),
  ],
};
