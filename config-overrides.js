const { override, fixBabelImports, addLessLoader,addPostcssPlugins } = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@btn-primary-bg': '#f00' },
    }),
    addPostcssPlugins([require('postcss-pxtorem')({
        rootValue: 75,
        propList: ['*'],
        // propList: ['*', '!border*', '!font-size*', '!letter-spacing'],
        // propWhiteList: []
        selectorBlackList: []
     }),])
);