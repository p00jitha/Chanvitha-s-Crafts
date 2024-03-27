import Order from '../models/order_model.js';
import Cart from '../models/cart_model.js';
import User from '../models/user_model.js';

export const get_orders = async(req,res)=>{
    const userId = req.params.id;
    Order.find({userId}).sort({date:-1}).then(order=>{
        res.json(order);
    })
}