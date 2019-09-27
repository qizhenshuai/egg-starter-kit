'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const {
      ctx,
      service,
    } = this;
    ctx.body = await service.user.findAll();
  }
  // 创建用户
  async create() {
    const {
      ctx,
      service,
    } = this;
    const payload = {
      name: 'qizhenshuai',
      username: 'beicheng',
      password: '12345678',
    };
    const result = await service.user.create(payload);
    ctx.body = result.dataValues;
  }
}

module.exports = UserController;
