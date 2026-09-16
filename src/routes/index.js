import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  const hora = new Date().toLocaleString('es-CO');
  res.render('index', { etiqueta: 'Inicio', hora, currentPath: req.path });
});

router.get('/homeAdm', (req, res) =>
  res.render('homeAdm', { etiqueta: 'Home administrador', currentPath: req.path })
);

router.get('/homeVig', (req, res) =>
  res.render('homeVig', { etiqueta: 'Home Vigilantes', currentPath: req.path })
);

router.get('/support', (req, res) =>
  res.render('support', { etiqueta: 'Atención y Soportes', currentPath: req.path })
);

router.get('/norvativa_tarifas', (req, res) =>
  res.render('norvativa_tarifas', { etiqueta: 'Norvativa y Tarifas', currentPath: req.path })
);

// Ruta GET para login (única con mensajes incluidos)
router.get('/login', (req, res) => {
  res.render('login', {
    etiqueta: 'Vista de inicio de sesión',
    mensaje: null,
    currentPath: req.path,
  });
});

export default router;