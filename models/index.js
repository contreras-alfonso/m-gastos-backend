import Categoria from "./categoriaModel.js";
import Gasto from "./gastoModel.js";
import Usuario from "./usuarioModel.js";

// Relación Usuario - Gasto
Usuario.hasMany(Gasto);
Gasto.belongsTo(Usuario);

// Relación Gasto - Categoría
Gasto.belongsTo(Categoria);
Categoria.hasMany(Gasto);


export{
    Categoria,
    Gasto,
    Usuario
}