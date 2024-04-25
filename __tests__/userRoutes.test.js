import request from 'supertest';
import app from '../api/index'; // Asegúrate de que la ruta es correcta

describe('Pruebas de Rutas de Usuarios', () => {
  test('Obtener datos de un usuario', async () => {
    const response = await request(app)
      .get('/api/user/12345') // Asume '12345' es un ID de usuario válido
      .set('Authorization', `Bearer token-aquí`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('username');
  });

  test('Actualizar datos de usuario', async () => {
    const updateData = {
      username: 'updateduser'
    };
    const response = await request(app)
      .put('/api/user/update/12345') // Asume '12345' es un ID de usuario válido
      .set('Authorization', `Bearer token-aquí`)
      .send(updateData);
    expect(response.statusCode).toBe(200);
    expect(response.body.username).toEqual('updateduser');
  });

  test('Eliminar un usuario', async () => {
    const response = await request(app)
      .delete('/api/user/delete/12345') // Asume '12345' es un ID de usuario válido
      .set('Authorization', `Bearer token-aquí`);
    expect(response.statusCode).toBe(200);
  });
});
