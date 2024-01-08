import {DataTypes} from "sequelize";
import db from "../config/db.js";

//nombre del model, va ser la tabla de los registros(usuarios)
const Gasto = db.define('gastos',{
    monto: {
        type: DataTypes.STRING,
        allowNull:false,

    },
    ruc:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    imagen:{
        type: DataTypes.STRING,
        allowNull:false,
    },


})


export default Gasto 