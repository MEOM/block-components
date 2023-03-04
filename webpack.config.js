const path = require('path');
const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
    ...defaultConfig,
    output: {
        clean: true,
        filename: 'index.js',
        library: {
            name: '@meom/block-components',
            type: 'umd',
        },
        path: path.resolve(__dirname, 'dist'),
    },
};
