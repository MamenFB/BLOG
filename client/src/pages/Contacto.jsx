import React, { useState } from 'react';
import axios from 'axios';

function Contacto() {
  const [formData, setFormData] = useState({
    email: '',
    secretCode: '', // Campo oculto como trampa para bots.
    trackingId: ''  // Otro campo oculto como trampa para bots.
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar si los campos ocultos fueron alterados
    if (formData.secretCode !== '' || formData.trackingId !== '') {
      console.error('Se detectó actividad sospechosa de bot.');
      return; // No enviar el formulario y potencialmente registrar un intento de acceso sospechoso.
    }

    // Configuración de la solicitud POST
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    // URL del endpoint de tu servidor (ajusta según tu configuración de servidor)
    const url = 'http://tu-servidor.com/api/contact';

    axios.post(url, formData, config)
      .then(response => {
        console.log('Datos enviados correctamente:', response.data);
        // Aquí puedes manejar la respuesta del servidor, como mostrar un mensaje de éxito.
      })
      .catch(error => {
        console.error('Error enviando los datos:', error);
        // Aquí puedes manejar errores de la solicitud, como mostrar un mensaje de error.
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required // Asegura que el campo email debe ser llenado.
        />
      </div>
      <input
        type="hidden"
        name="secretCode"
        value={formData.secretCode}
      />
      <input
        type="hidden"
        name="trackingId"
        value={formData.trackingId}
      />
      <button className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 rounded-lg text-white'type="submit">Enviar</button>
    </form>
  );
}

export default Contacto;
