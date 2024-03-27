import express from 'express'
import {get_orders} from '../controllers/order_controller.js'

const router = express.Router()

router.get('/order/:id',get_orders);

export default router;
