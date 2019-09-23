const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

let devConfig = require('./webpack.dev');
let prodConfig = require('./webpack.prod');

module.exports = (env) => {
    let isDev = env.development;
    let baseConfig = {
        entry: './src/index.ts',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, '../dist')
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    use: ['vue-loader']
                },
                {
                    test: /\.tsx?$/,
                    use: ['babel-loader']
                },
                {
                    test: /\.js$/,
                    use: ['babel-loader']
                },
                {
                    test: /\.css$/,
                    use: [ isDev ? 'style-loader' : MiniCssExtractPlugin.loader
                    , 'css-loader', 'postcss-loader']
                },
                {
                    test: /\.scss$/,
                    use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
                },
                {
                    test: /\.(png|jpe?g|bmp|gif)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[contenthash:8].[ext]'
                        }
                    }
                },
                {
                    test: /\.(ttf|otf|woff|eot|svg)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: 'icons/[contenthash:8].[ext]',
                            limit: 100*1024
                        }
                    }
                }
            ]
        },
        plugins: [
            !isDev && new MiniCssExtractPlugin({
                filename: 'style.css'
            }),
            new VueLoaderPlugin(),
            new HtmlWebpackPlugin({
                template: './public/index.html',
                filename: 'index.html',
                minify: !isDev ? {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true
                } : {}
            })
        ].filter(Boolean)
    }
    if (isDev) {
        return merge(baseConfig, devConfig);
    } else {
        return merge(baseConfig, prodConfig);
    }
}