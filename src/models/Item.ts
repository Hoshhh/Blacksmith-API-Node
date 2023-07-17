import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
    name: String,
    type: String,
    description: String,
})

export const Item = mongoose.model('Item', ItemSchema)