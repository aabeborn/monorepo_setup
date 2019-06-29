// module to use Alias in un futuro potrebbero essere usati
const bpmr = require('babel-plugin-module-resolver');

// function resolvePath(sourcePath, currentFile, opts) {
//   if (sourcePath === 'markdown') {
//     const base = currentFile.substring(__dirname.length).slice(0, -3);
//     return `${__dirname}/docs/src/${base}/`;
//   }

module.exports = {
  presets: [['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }], '@babel/preset-react'],
  plugins: [
    'babel-plugin-transform-react-constant-elements',
    'babel-plugin-transform-dev-warning',
    'babel-plugin-optimize-clsx',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
    ['@babel/plugin-transform-runtime', { corejs: 3 }]
  ]
};
