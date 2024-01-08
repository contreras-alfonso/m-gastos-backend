import express from 'express'
import { obtenerCategorias } from '../controllers/categoriaController.js';
import verificarAuth from '../middlewares/verificarAuth.js';

const router = express.Router()

router.get('/getAll', verificarAuth,obtenerCategorias);

export default router