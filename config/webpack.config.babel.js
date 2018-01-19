import { paths } from './paths'
import webpack from 'webpack'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin'
import FontMagician from 'postcss-font-magician'

const extractCSS = new ExtractTextWebpackPlugin('css/[name].css')

import { info } from '@beautiful-code/console-utils'

info('Running Webpack Build')

export default {
    entry: {
        polyfills: paths.resolveModules('babel-polyfill'),
        app: paths.resolveSrc('js/app/index.js'),
        style: paths.resolveSrc('js/style/index.js')
    },
    output: {
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[name].chunk.js',
        path: paths.resolvePublic()
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: extractCSS.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        config: {
                            path: paths.resolveConfig('postcss.config.js')
                        }
                    }
                }]
            })
        }, {
            test: /\.(jpg|png|svg)$/,
            use: {
                loader: "url-loader",
                options: {
                    limit: 25000,
                },
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            inject: '#Scripts'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    FontMagician({
                        foundries: ['google']
                    })
                ]
            },
          }),
        extractCSS,

    ],
    resolve: {
        alias: {
            '@config': paths.resolveConfig(),
            '@libs': paths.resolveLibs(),
            '@modules': paths.resolveModules(),
            '@public': paths.resolvePublic(),
            '@src': paths.resolveSrc(),
        },
        modules: [
			paths.resolveLibs(),
			paths.resolveModules()
		]
    }
}