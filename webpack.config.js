const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin')
const entries = require('./config/entries')

const isProduction = process.argv.indexOf('--production') >= 0

const webpackConfig = () => {
    let options = {
        stats: 'minimal',
        entry: Object.assign(
            {
                'bundle/bundle': './src/main.js'
            },
            entries()
        ),
        output: {
            path: resolve('./dist'),
            filename: `[name].js`,
            publicPath: '/'
        },
        resolve: {
            extensions: ['.js', '.json', '.vue', '.scss'],
            alias: {
                '@': resolve('./src'),
                assets: resolve('./src/assets'),
                scss: resolve('./src/assets/scss'),
                components: resolve('./src/components'),
                modules: resolve('./src/assets/js/modules'),
                utils: resolve('./src/assets/js/utils'),
                node_modules: resolve('./node_modules')
            }
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    include: [resolve('./src')]
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        'style-loader',
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: !isProduction
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                sourceMap: !isProduction,
                                plugins: (loader) => [
                                    require('autoprefixer')()
                                ]
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: !isProduction,
                                sassOptions: {
                                    outputStyle: isProduction ? 'compressed' : 'expanded',
                                    includePaths: [
                                        resolve('./src/assets/scss')
                                    ]
                                }
                            }
                        }

                    ]
                },
                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    exclude: /(a-z A-Z 0-9)*\/(font?s)\//,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/images',
                            publicPath: '/assets/images'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true
                        }
                    }
                    ]
                },
                {
                    test: /\.(eot|ttf|svg|woff|woff2)$/i,
                    exclude: /(a-z A-Z 0-9)*\/(img|image?s)\//,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/fonts',
                            publicPath: '/assets/fonts'
                        }
                    }]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: `[name].css`
            }),
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: 'index.html',
                excludeAssets: [/styles.*.(css|js)/]
            }),
            new HtmlWebpackExcludeAssetsPlugin(),
            new VueLoaderPlugin()
        ],
        performance: {
            hints: false
        }
    }

    if (!isProduction) {
        options = Object.assign(options, {
            mode: 'development',
            devtool: 'source-map',
            devServer: {
                contentBase: './dist',
                open: true,
                compress: false,
                hot: true,
                port: 3000,
                historyApiFallback: true
            }
        })
    }

    if (isProduction) {
        options = Object.assign(options, {
            mode: 'production',
            optimization: {
                minimizer: [new TerserPlugin()]
            }
        })
    }

    return options
}

module.exports = webpackConfig
