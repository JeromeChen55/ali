'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  // http://localhost:7001/
  async index() {
    const { ctx } = this;
    const params = ctx.query;
    // if(params.name='刘学炜'){
    //   ctx.body = {
    //     success: false,
    //     message: '没有权限',
    //     code: 403
    //   };
    // }
    ctx.body = `<p>hi, ${params.name || 'egg'}</p>`;
  }
  // http://localhost:7001/say-hello.json?name=马跃
  // http://localhost:7001/say-hello.json?name=刘学炜
  async sayHello() {
    const { ctx } = this;
    const params = ctx.query;
    // if(params.name='刘学炜'){
    //   ctx.body = {
    //     success: false,
    //     message: '没有权限',
    //     code: 403
    //   };
    // }
    ctx.body = {
      success: true,
      message: '请求成功',
      data: `hi, ${params.name || 'egg'}`
    };
  }
  //http://localhost:7001/index.htm?name=马跃
  //http://localhost:7001/index.htm?name=刘学炜
  async home() {
    const { ctx } = this;
    const params = ctx.query;
    const result = {
      name: params.name || 'egg',
      title: '前端练习生'
    }
    // nunjucks 模版引擎 插件
    // npm install egg-view-nunjucks --save
    ctx.body = await ctx.renderView('home.html', result);
    // await ctx.render('home.html', result);
    
  }
}

module.exports = HomeController;
