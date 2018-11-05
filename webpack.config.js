const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
                // applied last to first: css-loader first, then style-loader
                //     [
                //     { loader: "style-loader" }, 
                //     { loader: "css-loader" }
                // ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
};