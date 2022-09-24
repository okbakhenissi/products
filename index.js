const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({'extended':'true'}))

let products = [
  {id : 1, name : 'Canapé', price : 250},
  {id : 2, name : 'Table', price : 150},
  {id : 3, name : 'Buffet', price : 70},
  {id : 4, name : 'Chaise', price : 45},
  {id : 5, name : 'Télévision', price : 250},
  {id : 6, name : 'Four', price : 90},
]


app.get('/products', (req, res) => {
  res.json({products})
});

app.post('/products', (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const price = req.body.price;

  const newProduct = {
    id, name, price
  };
  products.push(newProduct);
  res.json({msg : 'product is added with success'})
});

app.delete('/products/:id', (req, res) => {
  console.log(req.params.id);
  res.json({msg : 'product deleted with success'});
});

app.put('/products/:id', (req, res) => {
  console.log(req.params.id);
  res.json({msg : 'product was updated with success'});
});

console.log('Hey I am running')

app.listen(3000, () => {
  console.log('The server is running on port 3000');
});