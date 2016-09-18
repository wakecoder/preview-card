const path = require('path');
module.exports = {
    devtool: "source-map",
    context: __dirname + "/build",
    entry: {
        main: './example.js'
    },
    output: {
        path: __dirname + "/dist",
        filename: "preview-card.example.js"
    },
    module: {
        loaders: [
            { test: /\.html/, loader: 'html-loader?attrs=false' },
            { test: /\.css/, loader: 'style-loader!css-loader'}
        ]
    },
    resolve: {
        root: path.resolve('./')
    }
}