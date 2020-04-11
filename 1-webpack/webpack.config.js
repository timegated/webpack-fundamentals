const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/loadPresets");
module.exports = ({ mode, presets } = {mode: "production", presets: []})  => {
    return webpackMerge({
        mode,
        output: {
            filename: 'bundle.js'
        },
        plugins: [new HtmlWebPackPlugin(), new webpack.ProgressPlugin()]
    },
        modeConfig(mode),
        presetConfig({mode, presets})
    );
};