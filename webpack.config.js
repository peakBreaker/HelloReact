const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// 1. Install webpack
// npm install --save-dev webpack webpack-cli
//
// 2. Install the modules you want for your project, such as lodash
// npm install --save lodash

module.exports = {
    // 3. Define the entrypoint for your code and output file
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    // 4. Add Loaders
    // npm install --save-dev css-loader style-loader sass-loader
    module: {
        rules:[
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            }
        ],

    },

    // 5. Optional add plugin to analyze sizes for optimization
    // npm install --save-dev webpack-bundle-analyzer
    // plugins: [
        // new BundleAnalyzerPlugin()
    // ],

    // 6. Development server
    // npm install --save-dev webpack-dev-server
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000
    }
};
