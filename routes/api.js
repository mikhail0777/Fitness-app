
const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.get('/exercise', async (req, res) => {
  const name = req.query.name || 'pushup';
  const response = await fetch(`https://api.api-ninjas.com/v1/exercises?name=${name}`, {
    headers: { 'X-Api-Key': 'FzmUIsjz+OWNtPlgA+WJlw==BFiV0eU08WkCudPW' }
  });
  const data = await response.json();
  res.json(data);
});

module.exports = router;
