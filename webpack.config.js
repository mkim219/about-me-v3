const path = require('path');
const Dotenv = require('dotenv-webpack');
module.exports = {
    mode: 'development',
    entry: './src/App.jsx',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', 'css', 'scss']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'assets')
    },
    plugins: [
        new Dotenv({
            path: './.env', // Path to .env file
            safe: true, // Load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
        }),
    ],
}