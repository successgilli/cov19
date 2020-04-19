const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        app: './src/index.jsx',
    },
    plugins: [
        // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: './src/index.html'
        }),
    ],
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(css|scss|saas)$/i,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        url: true
                    }
                }, 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg|ttf)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            }
        ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../build'),
    },
    resolve: {
        alias: {
            Components: path.resolve(__dirname, '../src/components/'),
            Containers: path.resolve(__dirname, '../src/containers/'),
            Images: path.resolve(__dirname, '../src/assets/img/'),
            Fonts: path.resolve(__dirname, '../src/assets/font/')
          },
          extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx', '.svg', '.ttf']
    }
};
