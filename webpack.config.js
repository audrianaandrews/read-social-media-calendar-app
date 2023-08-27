const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        modules: [
            __dirname,
            'node_modules',
            './src/components'
        ],
        alias: {
            applicationStyles: 'app/styles/main.scss'
        },
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "./dist/css/style.css",
            chunkFilename: "[name].css"
        }),
        new HtmlWebpackPlugin({
            title: 'Social Media Calendar App',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            { 
                test: /\.tsx?$/, 
                use: 'ts-loader',
                exclude: /node_modules/, 
            },
            {
                test: /.(?:sass|scss)$/,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    {
                        // Compiles Sass to CSS
                        loader: 'sass-loader',
                        options: {
                            includePaths: [path.resolve(__dirname, 'node_modules')]
                        }
                    }
                ],
            },
            {
                test: /\.exec\.js$/,
                use: ['script-loader']
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3000,
        hot: true,
    },
    devtool: 'inline-source-map',
    mode: 'development'
};
