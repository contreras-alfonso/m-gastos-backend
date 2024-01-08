import {Categoria} from "../models/index.js"

const obtenerCategorias = async (req,res) => {
    const categorias = await Categoria.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] }, 
    });
    res.json(categorias)
}

export {
    obtenerCategorias
}