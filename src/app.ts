import express from 'express'
import path from 'path'
import { inventory } from './routes/inventory';

const app = express();
const PORT = process.env.PORT || 3500;

//Middleware
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/api/v1/inventory', inventory)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))