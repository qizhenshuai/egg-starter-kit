'use strict';
const Subscription = require('egg').Subscription;

class TimeTask extends Subscription {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    return {
      interval: '6s', // 1分钟间隔
      type: 'worker', // 执行所有的worker都需要执行
    };
  }
  // subscribe 是真正定时任务执行时被运行的函数
  subscribe() {
    console.log('正在执行');
  }
}

module.exports = TimeTask;
