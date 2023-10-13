import { Router } from 'express';
import { cargarInformacion, habilitarEmpresa, home, verEmpresas } from '../controllers/empresas.controllers.js';
const router = Router();
router.get('/', home);
router.get('/verEmpresas', verEmpresas);
router.post('/cargarInformacion', cargarInformacion);
router.patch('/habilitarEmpresa', habilitarEmpresa);
export default router;