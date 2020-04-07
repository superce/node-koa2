// 路由传参
const koa = require('koa')
const Router = require('koa-router')

const app = new koa()
const router = new Router()

router.get('/',(ctx,next)=>{
    ctx.body=ctx.query
})

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000,()=>{
    console.log('start at port 3000')
})