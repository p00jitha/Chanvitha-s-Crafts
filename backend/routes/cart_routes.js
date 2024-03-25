import express from 'express'
import { get_cart_items,add_cart_item,delete_cart_item } from '../controllers/cart_controller';
const router = express.Router()

router.get('/:id',get_cart_items);
router.post('/:id',add_cart_item);
router.delete('/:userId/:itemId',delete_cart_item);

export default router;