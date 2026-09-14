import { Router } from 'express';
const router = Router();

const hora = new Date().toLocaleString('es-CO');
router.get('/', (req,res) => res.render ('index', {etiqueta: 'Inicio', hora:hora}));
router.get('/homeAdm', (req,res) => res.render ('homeAdm', {etiqueta: 'Home administrador'}));
router.get('/homeVig', (req,res) => res.render ('homeVig', {etiqueta: 'Home Vigilantes'}));
router.get('/contactos', (req,res) => res.render ('contactos', {etiqueta: 'Página de contactos'}));
router.get('/registro', (req,res) => res.render ('registro', {etiqueta: 'Página de registro'}));

//Ruta GET para login (unica con mensajes incluidos)
router.get('/login', (req, res) => {
    res.render('login', { 
        etiqueta:'Vista de inicio de sesión', mensaje: null });
});


export default router;