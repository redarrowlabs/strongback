const typescript = {
    test: /\.tsx?$/,
    exlcude: /(node_modules)/,
    loaders: ['babel', 'ts-loader']
}

const css = {
    test: /\.css$/,
    exlcude: /(node_modules)/,
    loaders: ['style', 'css']
}

const webpackConfig = {
    module: {
        loaders: [
            typescript,
            css
        ]
    },
    resolve:{
        extensions: ['', '.ts', '.tsx', '.js']
    }
}

module.exports = webpackConfig