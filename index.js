import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import gastoRoutes from './routes/gastoRoutes.js'
import categoriaRoutes from './routes/categoriaRoutes.js'
import db from './config/db.js'


const app = express()

app.use(express.json())

dotenv.config()
//conectar db
try {
    await db.authenticate();
    db.sync();
    console.log('Conexion a la base de datos exitosa.')
} catch (error) {
    console.log(error);
}

const corsOptions = {
    origin: "*" 
} 

app.use(cors(corsOptions))

//rutas
app.use('/api/gastos',gastoRoutes);
app.use('/api/categorias',categoriaRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`Proyecto ... Port ${process.env.PORT}`)
})
