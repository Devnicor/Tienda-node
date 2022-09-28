const faker = require('faker');
const boom = require('@hapi/boom');

class UsuarioService {
    constructor(){
        this.usuarios = [];
        this.generateU();
    }

    generateU() {
        const limit = 80;
        for (let i = 0; i < limit; i++) {
          this.usuarios.push({
            id: faker.datatype.uuid(),
            nombre: faker.commerce.productName(),
            precio: parseInt(faker.commerce.price(), 10),
            imagen: faker.image.imageUrl(),
            isBlock: faker.datatype.boolean(),
          });
        }
      }
    
      async create(data) {
        const newProduct = {
          id: faker.datatype.uuid(),
          ...data
        }
        this.productos.push(newProduct);
        return newProduct;
      }
    
      find() {
        return new Promise((resolve, reject) =>{
          setTimeout(() => {
            resolve(this.productos);
          }, 4000);
        })
    
      }
    
      async findOne(id) {
        const producto = this.productos.find(item => item.id === id);
        if(!producto){
          throw boom.notFound('Producto no encontrado');
        }
        if (producto.isBlock){
          throw boom.conflict('Producto esta bloqueado');
        }
        return producto;
      }
    
      async update(id, cambios) {
        const index = this.productos.findIndex(item => item.id === id);
        if (index === -1) {
          throw boom.notFound('Producto no encontrado');
        }
        const producto = this.productos[index];
        this.productos[index] = {
          ...producto,
          ...cambios
        }
        return this.productos[index];
      }
    
      async delete(id) {
        const index = this.productos.findIndex(item => item.id === id);
        if (index === -1) {
          throw boom.notFound('Producto no encontrado');
        }
        this.productos.splice(index, 1);
        return { id };
      }
    }
    
    module.exports = ProductosService;
}