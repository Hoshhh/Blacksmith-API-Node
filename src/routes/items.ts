import express from 'express'
import { getAllItems, getItem, createItem, deleteItem } from '../controllers/items'

const router = express.Router()


router.route('/').get(getAllItems).post(createItem)
router.route('/:id').get(getItem).delete(deleteItem)


export const items = router