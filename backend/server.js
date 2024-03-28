import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth_routes.js'
import itemRoutes from './routes/item_routes.js'
import cartRoutes from './routes/cart_routes.js'
import orderRoutes from './routes/order_routes.js'
import connectdatabase from './db/db_connection.js'

const app = express()

dotenv.config()
app.use(express.json())

const PORT = process.env.PORT

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.use('/api/auth',authRoutes); 
app.use('/api/item',itemRoutes);
app.use('/api/cart',cartRoutes);
app.use('/api/order',orderRoutes);

app.listen(5000,()=>{
    connectdatabase()
    console.log(`server is running on port ${PORT}`)
})
