const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = env => {
    console.log(env)
    return {
        output: {
            filename: 'bundle.js'
        },
        plugins: [new HtmlWebPackPlugin(), new webpack.ProgressPlugin()]
    };
};