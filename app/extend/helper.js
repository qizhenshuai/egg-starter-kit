'use strict';
const moment = require('moment');

// 格式化时间
exports.formatTime = time => moment(time).format('YYYY-MM-DD HH:mm:ss');
//  string => int
exports.parseInt = str => {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str) || 0;
};
// 处理成功响应
exports.success = ({
  ctx,
  res = null,
  msg = '请求成功',
}) => {
  ctx.body = {
    code: 0,
    data: res,
    success: true,
    msg,
  };
  ctx.status = 200;
};
// 处理错误响应
exports.error = ({
  ctx,
  code = 422,
  res = null,
  msg = '获取失败',
  status = 200,
}) => {
  ctx.body = {
    data: res || {},
    success: false,
    code,
    msg,
  };
  ctx.status = status;
};
