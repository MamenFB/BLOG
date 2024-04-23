import express from 'express';
import nodemailer from 'nodemailer';
import { body, validationResult } from 'express-validator';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

dotenv.config();


const router = express.Router();

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Límite cada 15 minutos por IP
  message: "Demasiadas solicitudes, por favor intente de nuevo pasados 15 minutos"
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
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

    const mailOptions = {
      from: req.body.email, // Usar el email del formulario
      to: 'fbmaricarmen@gmail.com', 
      subject: `Nuevo mensaje de contacto de ${req.body.nombre || 'un visitante'}`,
      text: `Mensaje: ${req.body.mensaje}\nEmail: ${req.body.email}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error al enviar el email' });
      }
      res.status(200).json({ message: "Datos del formulario recibidos y email enviado correctamente" });
    });
  }
);

export default router;
