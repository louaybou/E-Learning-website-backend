const express = require('express')
const app =express()
app.set('view engine', 'ejs')
app.use(express.json())
app.get ('/', (req,res) =>{
    //res.render('index' )ù
    res.send('Welcome to the home page')
})
const userRouter = require('./routers/user')
app.use('/user', userRouter)
const productRouter = require('./routers/product')
app.use('/product', productRouter)
app.listen(3000)