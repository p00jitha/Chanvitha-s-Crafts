import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    date_added: {
        type: Date,
        default: Date.now
    },
})

const Item = mongoose.model("Item",itemSchema)

export default Item;