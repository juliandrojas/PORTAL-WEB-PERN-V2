import express from 'express';
import morgan from 'morgan';
//import './db/database.js';
import empresasRoutes from './routes/empresas.routes.js';
const app = express();
app.use(morgan('dev'));
app.use(express.json());
//Usamos las rutas
app.use('/', empresasRoutes);
export default app;