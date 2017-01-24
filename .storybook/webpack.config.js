const genDefaultConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js');

const tsConfig = JSON.stringify({
    configFileName: 'tsconfig.storybook.json'
});

const typescript = {
    test: /\.tsx?$/,
    exclude: /(node_modules)/,
    loaders: ['babel', `ts-loader?${tsConfig}`]
};


/** A loader to compile Sass files and inject them into a document. */
const sass = {
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader']
};

/** Used to load font-awesome fonts. */
const woff = {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader?mimetype=application/font-woff&name=/Scripts/app/[name].[ext]'
};

/** Used to load font-awesome fonts. */
const icon = {
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader?name=/Scripts/app/[name].[ext]'
};

/** Used to load images. */
const gif = {
    test: /\.gif$/,
    loader: 'url-loader?name=/Scripts/app/[name].[ext]'
};

const png = {
    test: /\.png$/,
    loader: 'file-loader'
}

module.exports = function (config, env) {
    const storybookDefaults = genDefaultConfig(config, env);

    const loaders = storybookDefaults.module
        .loaders
        .concat([typescript, sass]);
    const extensions = storybookDefaults.resolve.extensions.concat(['.ts', '.tsx']);

    storybookDefaults.module.loaders = loaders;
    storybookDefaults.resolve.extensions = extensions;

    return storybookDefaults;
}