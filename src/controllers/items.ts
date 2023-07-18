import { Request, Response } from "express";
import { Item } from "../models/Item";


//Get all items in the database and send back json or error
export const getAllItems = async (req: Request, res: Response) => {
    try {
        const items = await Item.find({})
        res.status(201).json({ items }) 
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}


//Get a specific item in the database and send back json or error
export const getItem = async (req: Request, res: Response) => {
    try {
        const item = await Item.find({_id: req.params.id})
        if (!item) {
            return res.status(404).json({ msg: `No item with the id: ${req.params.id}`})
        }

        res.status(201).json({ item }) 
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}


//Create an item and send back json or error
export const createItem = async (req: Request, res: Response) => {
    try {
        const item = await Item.create(req.body)
        res.status(201).json({ item }) 
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}


//Delete an item and send back json or error
export const deleteItem = async (req: Request, res: Response) => {
    try {
        const item = await Item.findOneAndDelete({ _id: req.params.id })
        if (!item) {
            return res.status(404).json({ msg: `No item with the id: ${req.params.id}`})
        }

        res.status(200).json({ item }) 
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}


//Update an item and send back json or error
export const updateItem = async (req: Request, res: Response) => {
    try {
        const item = await Item.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true
        })
        if (!item) {
            return res.status(404).json({ msg: `No item with the id: ${req.params.id}`})
        }

        res.status(200).json({ id:item.id, data:req.body }) 
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}