module.exports = {
    // 这里面直接写webpack的配置即可 
    // 打包的时候会自动合并到webpack.config.js中
    configureWebpack: {
    //   plugins: [
    //     new MyAwesomeWebpackPlugin()
    //   ]
    // 抽取 bundle 打包的时候 直接忽略
    externals: {
        // jquery: 'jQuery'
        'vue':'Vue',
        'vue-router':"VueRouter",
        'vuex':'Vuex',
        'axios':'axios',
        'moment':"moment"
      }
    }
  }