import express from 'express'
import { getInventoryItems, addItem, getItem, deleteItem } from '../controllers/inventory'

const router = express.Router()


router.route('/').get(getInventoryItems)
router.route('/:id').get(getItem).post(addItem).delete(deleteItem)


export const inventory = router