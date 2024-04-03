const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development', // sets to development mode

    entry: path.resolve(__dirname, 'src/index.js'), // sets the source javascript
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    }, //outputs the javascript from src to dist

    module: {
        rules: [
        {
            test: /\.s[ac]ss$/i,
            use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
            ],
        },
    ],
},

    plugins: [
        new HtmlWebpackPlugin({  // takes the html in the source file to update in the dist fi
          title: 'Webpack App',
          filename: 'index.html',
          template: 'src/template.html',
        }),
      ],
}