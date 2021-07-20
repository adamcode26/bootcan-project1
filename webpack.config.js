const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    mode: "development",
    entry: {
        "index": './public/js/index.js',
        "workshops-list": './public/js/workshops-list.js'
    },
    output: {
        path: path.join( __dirname, 'dist' ),
        filename: "[name].bundle.js",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Home',
            filename: './index.html',
            template: path.join( __dirname, 'public', 'index.html' ),
            inject: true,
            chunks: [ 'index' ]
        }),
        new HtmlWebpackPlugin({
            title: 'Workshops List',
            filename: './workshops-list.html',
            template: path.join( __dirname, 'public', 'workshops-list.html' ),
            inject: true,
            chunks: [ 'workshops-list' ]
        })
    ]
}