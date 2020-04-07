const koa = require('koa')
const views = require('koa-views')
const path = require('path')
const app = new koa()

// 加载模板引擎
app.use(views(path.join(__dirname,'./views'),{
    extension:'ejs'
}))

app.use(async(ctx)=>{
    let title = 'hello koa2'
    await ctx.render('index',{
        title
    })
})

app.listen(3000,()=>{
    console.log('on 3000')
})