const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

function WatchTimestampsPlugin(patterns) {
    this.patterns = patterns;
  };
  
  WatchTimestampsPlugin.prototype.apply = function(compiler) {
    compiler.plugin('watch-run', function(watch, callback) {
      var patterns = this.patterns;
      Object.keys(watch.compiler.fileTimestamps).forEach(function (filepath) {
        if (patterns.some(function (pat) {
          return pat instanceof RegExp ? pat.test(filepath) : filepath.indexOf(pat) === 0;
        })) {
          watch.compiler.fileTimestamps[filepath] = fs.statSync(filepath).mtime;
        }
      });
      callback();
    }.bind(this));
  }

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "build")
    },

    devtool: "inline-source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: require('html-webpack-template'),
            inject: false,
            title: 'Chess',
            appMountId: 'root',
        }),
        new webpack.WatchIgnorePlugin([
            /scss\.d\.ts$/
        ]),
        new WatchTimestampsPlugin([
            /scss\.d\.ts$/,
          ]),
        new ExtractTextPlugin({ filename: 'styles.bundle.css'})
    ],

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: "/node_modules/"
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "typings-for-css-modules-loader?modules&namedExport&camelCase"
                })
            }
        ]
    },
};