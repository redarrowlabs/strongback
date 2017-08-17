const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

const tsConfig = JSON.stringify({
    configFileName: 'tsconfig.storybook.json'
});

const typescript = {
    test: /\.tsx?$/,
    exclude: /(node_modules)/,
    loaders: ['babel-loader', `ts-loader?${tsConfig}`]
};

const fonts = {
    test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/,
    exclude: /(node_modules)/,
    loaders: ['file-loader?name=[name].[ext]']
}

module.exports = function (config, env) {
    const storybookDefaults = genDefaultConfig(config, env);

    const loaders = storybookDefaults.module
        .rules
        .concat([typescript, fonts]);

    const extensions = storybookDefaults
        .resolve
        .extensions
        .concat(['.ts', '.tsx']);

    storybookDefaults.module.rules = loaders;
    storybookDefaults.resolve.extensions = extensions;

    return storybookDefaults;
}