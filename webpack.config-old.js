var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [new HtmlWebpackPlugin({ filename: "index.html", template: "./public/index.html" })],
    // Add the babel-loader and presets
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['env', 'react'],
                            plugins: ['transform-object-rest-spread']
                        }
                    }]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
    // end of babel-loader
}