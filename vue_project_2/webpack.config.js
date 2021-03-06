let HtmlPlugin = require ('html-webpack-plugin');
let MiniCssPlugin = require ('mini-css-extract-plugin');
let VueLoaderPlugin = require ('vue-loader/lib/plugin')

module.exports = {
    devServer: {
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://localhost:8080/',
                pathRewrite: { '^/api': '' },
                secure: false,
                changeOrigin: true
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssPlugin.loader,
                        options: {
                            publicPath: '../',
                            hmr: process.env.NODE_ENV === 'development'
                        }
                    },
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlPlugin ({
            template: './src/public/index.html'
        }),
        new MiniCssPlugin ({
            filename: 'style/[name].css',
            chunkFilename: '[id].css',
        }),
        new VueLoaderPlugin()
    ]
}