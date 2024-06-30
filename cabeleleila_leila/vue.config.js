const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .end()

    config.plugin('define')
      .tap(args => {
        args[0].__VUE_PROD_DEVTOOLS__ = false
        args[0].__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false

        return args
      })
  }
})
