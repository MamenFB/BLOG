import express from 'express';
import { body, validationResult } from 'express-validator';
import rateLimit from 'express-rate-limit';

const router = express.Router();

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Límite cada 15 minutos por IP
  message: "Demasiadas solicitudes, por favor intente de nuevo pasados 15 minutos"
});

router.post('/',
  contactLimiter,
  [
    body('email').isEmail().withMessage('Ingrese una dirección de correo válida'),
    body('secretCode').isEmpty().withMessage('Se detectó actividad de bot'),
    body('trackingId').isEmpty().withMessage('Se detectó actividad de bot')
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });

    }
    res.status(200).json({ message: "Datos del formulario recibidos y procesados" });
  }
);

export default router;
