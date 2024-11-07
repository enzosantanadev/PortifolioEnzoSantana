const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const authMiddleware = require('../middleware/auth');

// Criação de postagem
router.post('/', authMiddleware, async (req, res) => {
  const { content } = req.body;
  const post = new Post({ userId: req.userId, content });
  await post.save();
  res.status(201).send('Postagem criada');
});

// Listar postagens
router.get('/', async (req, res) => {
  const posts = await Post.find().populate('userId');
  res.json(posts);
});

module.exports = router;
