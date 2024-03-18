import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    userId:{
        type:String
    },
    items:[{
            productId:{
                type:String,
            },
            name:String,
            quantity:{
                type:Number,
                required:true,
                min:[1]
            },
            price:Number,
        }],
    bill:{
        type:Number,
        required:true
    },
    data_added:{
        type:Date,
        default:Date.now
    }
})

const Order = mongoose.model("Order",orderSchema)
export default Order