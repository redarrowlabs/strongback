const typescript = {
    test: /\.tsx?$/,
    exlcude: /(node_modules)/,
    loaders: ['babel', 'ts-loader']
}

const webpackConfig = {
    module: {
        loaders: [
            typescript
        ]
    }
}

module.exports = webpackConfig