import React, { useState } from 'react';  
import emailjs from 'emailjs-com';

function Contacto() {
  const [formData, setFormData] = useState({
    email: '',
    nombre: '',
    mensaje: '',
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
    // Verificar si los campos ocultos están llenos
    if (formData.secretCode !== '' || formData.trackingId !== '') {
      alert('Se detectó actividad sospechosa de bot. El formulario no se enviará.');
      console.error('Se detectó actividad sospechosa de bot.');
      return; // No proceder con el envío del email
    }
    sendEmail(); // Proceder a enviar el email si los campos están limpios
  };

  const sendEmail = () => {
    const params = {
      name: formData.nombre,
      email: formData.email,
      message: formData.mensaje,
    };
    emailjs.send("service_c61akaa", "template_5wfacvl", params)
      .then(() => {
        alert("¡Email enviado exitosamente!");
        // Resetear el formulario a su estado inicial
        setFormData({
          email: '',
          nombre: '',
          mensaje: '',
          secretCode: '',
          trackingId: ''
        });
      })
      .catch((error) => {
        console.error('Error al enviar email:', error);
      });
  };

  React.useEffect(() => {
    emailjs.init("WvUl0DMBSH5r2gDXW");
  }, []);

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <h2>¿Contactamos?</h2>
      <div style={{ margin: '10px 0' }}>
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
      <div style={{ margin: '10px 0' }}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ margin: '10px 0' }}>
        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
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
