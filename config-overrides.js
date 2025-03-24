const { override, addBabelPlugin, addWebpackPlugin } = require('customize-cra');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = override(
  // Add Babel plugin to remove PropTypes in production
  process.env.NODE_ENV === 'production' &&
    addBabelPlugin(['transform-react-remove-prop-types', { removeImport: true }]),
  
  // Add bundle analyzer in analyze mode
  process.env.ANALYZE &&
    addWebpackPlugin(new BundleAnalyzerPlugin({ analyzerMode: 'static' })),
); 