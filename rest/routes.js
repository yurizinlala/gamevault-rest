const express = require('express');
const router = express.Router();
const { readData, writeData, getNextId } = require('./database');

router.get('/', (req, res) => {
  res.json(readData());
});

router.get('/:id', (req, res) => {
  const games = readData();
  const game = games.find(g => g.id === Number(req.params.id));
  game ? res.json(game) : res.status(404).json({ error: 'Jogo não encontrado' });
});

router.post('/', (req, res) => {
  const games = readData();
  const newGame = { 
    id: getNextId(),
    ...req.body,
    status: req.body.status || 'Backlog',
    rating: req.body.rating || 0
  };
  games.push(newGame);
  writeData(games);
  res.status(201).json(newGame);
});

router.put('/:id', (req, res) => {
  const games = readData();
  const index = games.findIndex(g => g.id === Number(req.params.id));
  
  if (index === -1) return res.status(404).json({ error: 'Jogo não encontrado' });
  
  games[index] = { ...games[index], ...req.body };
  writeData(games);
  res.json(games[index]);
});

router.delete('/:id', (req, res) => {
  let games = readData();
  const initialLength = games.length;
  games = games.filter(g => g.id !== Number(req.params.id));
  
  if (games.length === initialLength) {
    return res.status(404).json({ error: 'Jogo não encontrado' });
  }
  
  writeData(games);
  res.json({ message: 'Jogo deletado com sucesso' });
});

module.exports = router;