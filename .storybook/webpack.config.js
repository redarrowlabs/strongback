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

const gif = {
    test: /\.gif$/,
    loader: 'url-loader?mimetype=image/png'
}

const woff = {
     test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/, 
     loader: "url-loader?mimetype=application/font-woff"
}

const ttf = {
    test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/, 
    loader: "url-loader"
}

const webpackConfig = {
    module: {
        loaders: [
            typescript,
            css,
            gif,
            woff,
            ttf
        ]
    },
    resolve:{
        extensions: ['', '.ts', '.tsx', '.js']
    }
}

module.exports = webpackConfig