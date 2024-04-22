import React, { useState } from 'react';

function Contacto() {
  const [formData, setFormData] = useState({
    email: '', // Un campo visible para el email del usuario.
    secretCode: '', // Primer campo oculto.
    trackingId: '' // Segundo campo oculto.
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
      return; // No enviar el formulario
    }

    console.log('Datos enviados:', formData);
    // Aquí puedes enviar los datos a un servidor o manejarlos como necesites.
    // Asegúrate de realizar la validación final del lado del servidor también.
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
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Contacto;
