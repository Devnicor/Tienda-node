const express = require('express');
const productosRouter = require('./productosRouter');
const categoriasRouter = require('./categoriasRouter');
const usuariosRouter = require('./usuariosRouter');

function routerApi(app){
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/productos', productosRouter);
    router.use('/usuarios', usuariosRouter);
    router.use('/categorias', categoriasRouter);
}

module.exports = routerApi;