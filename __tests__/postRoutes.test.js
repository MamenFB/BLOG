import request from 'supertest';
import app from '../api/index'; // Asegúrate de que la ruta es correcta

describe('Pruebas de Rutas de Posts', () => {
  test('Crear un post', async () => {
    const postData = {
      title: 'Nuevo Post',
      content: 'Contenido del post',
      userId: '12345'
    };
    const response = await request(app)
      .post('/api/post/create')
      .set('Authorization', `Bearer token-aquí`)
      .send(postData);
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('title', 'Nuevo Post');
  });

  test('Obtener posts', async () => {
    const response = await request(app)
      .get('/api/post/getposts');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });

  test('Actualizar un post', async () => {
    const updateData = {
      title: 'Post Actualizado'
    };
    const response = await request(app)
      .put('/api/post/updatepost/12345/67890') // Asume '12345' es un ID de post y '67890' un ID de usuario
      .set('Authorization', `Bearer token-aquí`)
      .send(updateData);
    expect(response.statusCode).toBe(200);
    expect(response.body.title).toEqual('Post Actualizado');
  });

  test('Eliminar un post', async () => {
    const response = await request(app)
      .delete('/api/post/deletepost/12345/67890') // Asume '12345' es un ID de post y '67890' un ID de usuario
      .set('Authorization', `Bearer token-aquí`);
    expect(response.statusCode).toBe(200);
  });
});
