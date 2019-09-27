'use strict';

module.exports = appInfo => {
  const config = exports = {};

  config.dir = 'local';

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1569582454331_5179';

  // add your config here
  // 加载 errorHandler 中间件
  config.middleware = [ 'errorHandler' ];

  // 只对 /api 前缀的 url 路径生效
  // config.errorHandler = {
  //   match: '/api',
  // }

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ '.qq.com' ],
  };

  config.multipart = {
    fileExtensions: [ '.apk', '.pptx', '.docx', '.csv', '.doc', '.ppt', '.pdf', '.pages', '.wav', '.mov' ], // 增加对 .apk 扩展名的支持
  };

  config.bcrypt = {
    saltRounds: 10, // default 10
  };

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'bc_blog',
    username: 'root',
    password: '12345678',
    timezone: '+08:00',
  };
  config.jwt = {
    secret: 'Great4-M',
    enable: true, // default is false
    match: '/jwt', // optional
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
