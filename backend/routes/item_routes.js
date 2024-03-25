import express from 'express'
import {get_items,post_items,update_items,delete_items} from '../controllers/item_controller.js'

const router = express.Router()

router.get('/items',get_items)

router.post('/items',post_items)

router.put('items/:id',update_items)

router.delete('items/:id',delete_items)

export default router;