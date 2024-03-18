import mongoose from 'mongoose'

const cartSchema = new mongoose.Schema({
    userId:{
        type:String
    },
    items:[
        {
            productId:{
                String
            },
            name:String,
            quantity:{
                type: Number,
                required: true,
                default: 1
            },
            price:Number
        },
    ],
    bill: {
        type: Number,
        required: true,
        default: 0
    }
})

const Cart =  mongoose.model("Cart",cartSchema)
export default Cart;
