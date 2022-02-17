import express from 'express';
const app = express();
import products from './data/data.js'
import cors from 'cors'

app.use(express.json());
app.use(cors())

//Fetching all services
app.get('/api/services', (req, res) => {
     res.send(products)
     
})

//Fetching a single service
app.get('/api/services/:id', (req, res) => {
 const product = products.find(p => p.id === Number(req.params.id))
   res.send(product)
})


const PORT = 5000;
app.listen(PORT, () => {
 console.log(`server listening in port ${PORT}`)
})