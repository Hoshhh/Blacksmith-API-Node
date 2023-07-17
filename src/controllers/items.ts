import { Request, Response } from "express";
import { Item } from "../models/Item";

export const getAllItems = (req: Request, res: Response) => {
    res.send('Get all items')
}

export const getItem = (req: Request, res: Response) => {
    res.json({id: req.params.id})
}

export const createItem = async (req: Request, res: Response) => {
    const item = await Item.create(req.body)
    res.status(201).json({ item })
}

export const deleteItem = (req: Request, res: Response) => {
    res.send('Delete an item from inventory')
}
