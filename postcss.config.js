module.exports = {
  plugins: [
    require('postcss-icss-values')({ /* ...options */ }),
    require('postcss-smart-import')({ /* ...options */ }),
    require('precss')({ /* ...options */ }),
    require('postcss-flexbugs-fixes')({ /* ...options */ }),
    require('autoprefixer')({ /* ...options */ })
  ]
};
