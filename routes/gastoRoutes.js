import express from 'express'
import { nuevoGasto, obtenerGastos } from '../controllers/gastoController.js';
import upload from '../middlewares/subidaImagen.js';
import verificarAuth from '../middlewares/verificarAuth.js';

const router = express.Router()

router.post('/nuevo-gasto',upload.single('imagen'),verificarAuth,nuevoGasto);
router.get('/getAll',verificarAuth,obtenerGastos);

export default router