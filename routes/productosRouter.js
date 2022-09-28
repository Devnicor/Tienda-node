const express = require('express');
const ProductosService = require('../servicios/productosService');
const validatorHandler = require('./../middlewares/validadorHandler')
const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schemas/productoSchema');
const router = express.Router();

const servicio = new ProductosService();

router.get('/', async (req, res) => {
  const productos = await servicio.find();
  res.json(productos);
});

router.get('/filtro', (req, res) => {
  res.send('Soy un filtro');
});

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const productos = await servicio.findOne(id);
      res.json(productos);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await servicio.create(body);
    res.status(201).json(newProduct);
  });

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const producto = await servicio.update(id, body);
      res.json(producto)
    } catch (error) {
      next(error);
    }
  });

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const eliminado = await servicio.delete(id);
  res.json(eliminado);
});

module.exports = router;
