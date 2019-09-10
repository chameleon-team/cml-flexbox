
// 设置静态资源的线上路径
const publicPath = 'https://startheart.github.io/cml-flexbox/dist';
// 设置api请求前缀
const apiPrefix = 'https://api.chameleon.com';
const path = require('path')
cml.config.merge({
  templateLang: "cml",
  templateType: "html",
  builtinNpmName: 'cml-quickapp-ui-builtin',
  extPlatform: {
    quickapp: 'cml-quickapp-plugin',
  },
  babelPath: [
    path.join(__dirname,'node_modules/cml-quickapp-ui-builtin'),
    path.join(__dirname,'node_modules/cml-quickapp-runtime'),
    path.join(__dirname,'node_modules/cml-quickapp-api'),
    path.join(__dirname,'node_modules/cml-quickapp-ui'),
    path.join(__dirname,'node_modules/cml-quickapp-store'),
    path.join(__dirname,'node_modules/cml-quickapp-mixins'),
    path.join(__dirname,'node_modules/mobx'),
  ],
  baseStyle:{
    wx: true,
    web: true,
    weex: true,
    alipay: true,
    baidu: true,
    qq: true,
    quickapp: true,
  },
  // platforms: ['quickapp'],
  platforms: ["web","weex","wx","quickapp"],
  buildInfo: {
    wxAppId: '123456'
  },
  quickapp: {
    dev: {
      // moduleIdType: 'name',
      minimize: false,
      increase: true
    },
    build: {
      minimize: true,
      hash: false
    }
  },
  wx: {
    dev: {
    },
    build: {
      apiPrefix
    }
  },
  web: {
    dev: {
      analysis: false,
      console: false
    },
    build: {
      analysis: false,
      publicPath: `${publicPath}/web/`,
      apiPrefix
    }
  },
  weex: {
    dev: {
    },
    build: {
      publicPath: `${publicPath}/weex/`,
      apiPrefix
    },
    custom: {
      publicPath: `${publicPath}/wx/`,
      apiPrefix
    }
  }
})

