const Joi = require('joi');

const id = Joi.string().uuid();
const nombre = Joi.string().min(3).max(20);
const precio = Joi.number().integer().min(8);
const imagen = Joi.string().uri();

const createProductSchema = Joi.object({
  nombre: nombre.required(),
  precio: precio.required(),
  imagen: imagen.required()
});

const updateProductSchema = Joi.object({
  nombre: nombre,
  precio: precio
});

const getProductSchema = Joi.object({
  id: id.required()
});

module.exports = {createProductSchema, updateProductSchema, getProductSchema}
