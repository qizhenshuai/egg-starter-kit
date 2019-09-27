'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  // 创建用户
  async create(payload) {
    const {
      ctx,
    } = this;
    const params = {
      name: payload.name,
      username: payload.username,
      password: payload.password,
      created_at: Date.now(),
      updated_at: Date.now(),
    };
    return ctx.model.User.create(params);
  }
  findAll() {
    return this.ctx.model.User.findAll();
  }
}

module.exports = UserService;
