import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        maxlength: [20, 'name can not be more than 20 characters']
    },
    type: {
        type: String,
        required: [true, 'must provide item type'],
        maxlength: [15, 'type can not be more than 15 characters']
    },
    description: {
        type: String,
        required: [true, 'must provide item description'],
        maxlength: [150, 'item description can not be more than 150 characters']
    },
})

export const Item = mongoose.model('Item', ItemSchema)