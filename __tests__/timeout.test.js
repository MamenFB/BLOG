import request from 'supertest';
import express from 'express';
import bodyParser from 'body-parser';
import { limitLogin } from '../api/middlewares/timeout';

const app = express();
app.use(bodyParser.json());

// Simulación de un endpoint de login que utiliza el middleware limitLogin
app.post('/login', limitLogin, (req, res) => {
 

  res.status(200).send('Login exitoso');
});

describe('Rate Limiting on Login Endpoint', () => {
  it('should allow 3 login attempts', async () => {
    for (let i = 0; i < 3; i++) {
      const response = await request(app).post('/login').send({ username: 'user', password: 'pass' });
      expect(response.status).not.toBe(429);
    }
  });

  it('should block more than 3 login attempts within 15 minutes', async () => {
    for (let i = 0; i < 3; i++) {
      await request(app).post('/login').send({ username: 'user', password: 'pass' });
    }
    const response = await request(app).post('/login').send({ username: 'user', password: 'pass' });
    expect(response.status).toBe(429);
    expect(response.text).toBe('Demasiadas solicitudes fallidas, intente nuevamente en 15 minutos.');
  });
});

