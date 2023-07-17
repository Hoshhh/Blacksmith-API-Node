import { Request, Response } from "express";

export const getInventoryItems = (req: Request, res: Response) => {
    res.send('Get all items in inventory')
}

export const getInventoryItem = (req: Request, res: Response) => {
    res.json({id: req.params.id})
}

export const addInventoryItem = (req: Request, res: Response) => {
    res.json(req.body)
}

export const deleteInventoryItem = (req: Request, res: Response) => {
    res.send('Delete an item from inventory')
}
