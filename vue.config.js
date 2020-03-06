module.exports = {
  chainWebpack: (config) => {
    config.module.rule('js')
    .use('istanbul')
    .loader('istanbul-instrumenter-loader')
    .options({ esModules: true })
    .before('babel-loader')
  }
}