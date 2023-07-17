import express from 'express'
import { getInventoryItems, addInventoryItem, getInventoryItem, deleteInventoryItem } from '../controllers/inventory'

const router = express.Router()


router.route('/').get(getInventoryItems)
router.route('/:id').get(getInventoryItem).post(addInventoryItem).delete(deleteInventoryItem)


export const inventory = router