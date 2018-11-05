module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                // applied last to first: css-loader first, then style-loader
                use: [
                    { loader: "style-loader" }, 
                    { loader: "css-loader" }
                ]
            }
        ]
    }
};