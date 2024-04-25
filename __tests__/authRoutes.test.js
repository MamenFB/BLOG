import request from 'supertest';
import app from '../api/index'; // Asegúrate de que la ruta es correcta

describe('Pruebas de Autenticación', () => {
  test('Registro de usuario con datos válidos', async () => {
    const userData = {
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123'
    };
    const response = await request(app)
      .post('/api/auth/signup')
      .send(userData);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  test('Inicio de sesión con credenciales válidas', async () => {
    const loginData = {
      email: 'test@example.com',
      password: 'password123'
    };
    const response = await request(app)
      .post('/api/auth/signin')
      .send(loginData);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  test('Inicio de sesión con Google', async () => {
    const googleData = {
      email: 'test@example.com',
      name: 'Test User',
      googlePhotoUrl: 'http://example.com/photo.jpg'
    };
    const response = await request(app)
      .post('/api/auth/google')
      .send(googleData);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('token');
  });
});
