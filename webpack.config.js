const path = require("path"); // Adicione esta linha caso não esteja no código

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
    ],
  },
};
