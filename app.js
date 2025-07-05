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
const sequelize = require('./DB/db')
async function test(){
    try{
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')}
    catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}
test()
app.listen(3000)