const express = require('express')
const app =express()
app.set('view engine', 'ejs')
app.use(express.json())
require('dotenv').config()
const sequelize = require('./DB/db')
app.get ('/', (req,res) =>{
    
    res.send('Welcome to the home page')
})
const userRouter = require('./routers/user')
app.use('/user', userRouter)
const productRouter = require('./routers/product')
app.use('/product', productRouter)
const User = require('./models/user')
const Product = require('./models/product')
sequelize.sync({ alter: true })
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(err => {
    console.error('Error creating database or tables:', err);
  });
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