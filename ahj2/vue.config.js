module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        prependData: '@import "~@/assets/scss/_function.scss";@import "~@/assets/scss/_mixin.scss";',
      },
    },
  },
}
