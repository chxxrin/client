const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@imgs': path.resolve(__dirname, 'src/@imgs'),
      '@components': path.resolve(__dirname, 'src/@components'),
      '@hooks': path.resolve(__dirname, 'src/@hooks'),
      '@pages': path.resolve(__dirname, 'src/@pages'),
      '@style': path.resolve(__dirname, 'src/@style'),
    },
  },
};
