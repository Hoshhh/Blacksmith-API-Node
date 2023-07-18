import express from 'express'
import { getAllItems, getItem, createItem, deleteItem, updateItem } from '../controllers/items'

const router = express.Router()


router.route('/').get(getAllItems).post(createItem)
router.route('/:id').get(getItem).delete(deleteItem).patch(updateItem)


export const items = router