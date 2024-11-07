const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/twitter-clone', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Rotas
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts.js');

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
