const express = require('express');
const faker = require('faker');
const Faker = require('faker/lib');
const router = express.Router();

router.get('/', (req, res) => {
    const { limit, offset } = req.query;
    const usuarios = [];

    if (limit && offset) {
      res.json({
        limit,
        offset
      });
    } else {
      res.send('Sin parametros!');
    }

    for(let i = 0; i < 40; i++){
       usuarios.push({
        nombre: faker.commerce
       }) 
    }
  });

  module.exports = router;