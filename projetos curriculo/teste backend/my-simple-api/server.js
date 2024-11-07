const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let items = [];

// Rota para listar itens
app.get('/items', (req, res) => {
  res.json(items);
});

// Rota para adicionar um item
app.post('/items', (req, res) => {
  const item = req.body;
  items.push(item);
  res.status(201).json(item);
});

// Rota para remover um item
app.delete('/items/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < items.length) {
    items.splice(index, 1);
    res.status(200).json({ message: 'Item removed' });
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
