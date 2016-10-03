const path = require('path');
module.exports = {
    context: __dirname + "/build",
    externals: {
        vue: "Vue"
    },
    entry: {
        main: './preview-card/preview-card.js'
    },
    output: {
        libraryTarget: "commonjs",
        path: __dirname + "/dist",
        filename: "[name].js"
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