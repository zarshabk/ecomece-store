const express = require('express')
const server = express()
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser= require('cookie-parser')
 
const Database = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/YOUDB')
        server.listen(8000,()=>{
            console.log("server is running at 8000")
        })
    } catch (error) {
        console.log("something went wong",error)
    }
}
Database()
server.use(express.json())
server.use(cookieParser())
server.use(cors())


const product = require('./routes/productRoute')
const order = require('./routes/orderRoute')
const Category = require('./routes/CategoryRoute')
const Brand = require('./routes/brandRoute')

server.use('/api/product',product)
server.use('/api/order',order)
server.use('/api/category',Category)
server.use('/api/brand',Brand)