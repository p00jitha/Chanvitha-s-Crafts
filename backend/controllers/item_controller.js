import Item from '../models/item_model.js'

export const get_items = async(req,res)=>{
    Item.find().sort({data:-1})
    .then(items=>{
        res.json(items);
    })
}

export const post_items = async(req,res)=>{
    const newItem = new Item(req.body);
    newItem.save()
    .then(item=>{
        res.json(item)
    })
}

export const update_items = async(req,res)=>{
    Item.findByIdAndUpdate({_id:req.params.id})
    .then(function(item){
        Item.findOne({_id:req.params.id})
        .then(function(item){
            res.json(item);
        })
    })
}

export const delete_items = async(req,res)=>{
    Item.findByIdAndDelete({_id:req.params.id})
    .then(function(item){
        res.json({success:true});
    })
}