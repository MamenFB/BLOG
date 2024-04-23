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
    if (formData.secretCode !== '' || formData.trackingId !== '') {
      console.error('Se detectó actividad sospechosa de bot.');
      return;
    }

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const url = 'http://tu-servidor.com/api/contact';

    axios.post(url, formData, config)
      .then(response => {
        console.log('Datos enviados correctamente:', response.data);
      })
      .catch(error => {
        console.error('Error enviando los datos:', error);
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
          required
        />
      </div>
      <input type="hidden" name="secretCode" value={formData.secretCode} />
      <input type="hidden" name="trackingId" value={formData.trackingId} />
      <button className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 rounded-lg text-white' type="submit">Enviar</button>
    </form>
  );
}

export default Contacto;
