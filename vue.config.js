module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/first-plugin/'
    : '/'
}
  // 部署参考
/*
Vue CLI3.0
https://cli.vuejs.org/zh/guide/deployment.html
https://cloud.tencent.com/developer/article/1372483
https://cli.vuejs.org/zh/config/#publicpath
*/