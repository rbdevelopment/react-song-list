const path = require('path');

module.exports = {
    entry: ['./app/index.jsx', './app/app.scss'],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.scss']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    preLoaders: [
        {
            test: /\.js$/,
            loaders: ['eslint'],
            include: [new RegExp(path.join(__dirname, 'app'))]
        }
    ],
    devServer: {
        port: 3000,
        contentBase: './build',
        inline: true
    },
    devtool: 'source-map'
};
