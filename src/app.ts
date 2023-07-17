import express from 'express'
import { connectDB } from './db/connect';
import 'dotenv/config'
import path from 'path'
import { items } from './routes/items';

const app = express();
const PORT = process.env.PORT || 3500;

//Middleware
app.use(express.json())
app.use('/api/v1/items', items)


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()