//服务器核心文件

let koa = require("koa")
let koaRouter = require("koa-router")

//1.生成应用及路由实例
const app = new koa()
const router = new koaRouter()


// *****核心代码*****
router.get("/",(ctx,next)=>{
    // 1.获取请求的参数

    //2.根据请求的数据处理参数

    // 3.响应数据
    ctx.body="服务器请求的数据"

})


// 2.使用路由器及路由
app
    .use(router.routes())  //声明使用路由
    .use(router.allowedMethods()) //声明使用路由的方法

// 3.监听端口
app.listen('3000',()=>{
    console.log("服务器启动")
    console.log("服务器地址:http://localhost:3000")
})