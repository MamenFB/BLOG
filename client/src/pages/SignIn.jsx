
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure,} from '../redux/user/userSlice';
import OAuth from '../components/OAuth';
import logo from '../assets/logo3.webp';


export default function SignIn() {
  const [formData, setFormData] = useState({});// Estado local para almacenar los datos del formulario.
  const { loading, error: errorMessage } = useSelector((state) => state.user);// Usa el hook useSelector para acceder al estado de usuario y obtener las propiedades loading y error.
  const dispatch = useDispatch();// Hook useDispatch para enviar acciones a la store de Redux.
  const navigate = useNavigate();// Hook useNavigate para programar la navegación entre vistas.
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });// Actualiza el estado del formulario
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      // Verifica si el correo electrónico y la contraseña
      return dispatch(signInFailure('Please fill all the fields'));
    }
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', { // Realiza una solicitud POST al endpoint de inicio de sesión
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), // Envía los datos del formulario como JSON
      });
      const data = await res.json();// Espera la respuesta y la convierte a JSON
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
        <div className='flex-1'>
          <Link to="/" className='font-bold dark:text-white text-4xl'>
            <img src={logo} alt="Logo de Mamen" className='w-21 h-21' style={{ display: 'inline', verticalAlign: 'middle' }} />

          </Link>
          <p className='text-sm mt-5'>
            Puedes iniciar sesión con tu correo electrónico y contraseña o con Google.
          </p>
          </div>
        {/* right */}
        
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Tú email' />
              <TextInput type='email'placeholder='nombre@company.com'id='email' onChange={handleChange}/>
            </div>
            <div className='flex-1'>
              <Label value='Tu contraseña' />
              <TextInput type='password'placeholder='**********'id='password' onChange={handleChange}/>
            </div>
            
            <Button gradientDuoTone='purpleToPink' type='submit' 
            disabled={loading}>
              {
                loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Cargando..</span>
                </>
              ) : (
                'Regístrate'
              )}
            </Button>
            <OAuth />
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>¿No tienes una cuenta?</span>
            <Link to='/sign-up' className='text-blue-500'>
              Regístrate
            </Link>
          </div>
          {errorMessage && (
            <Alert  className='mt-5' color='failure'>
              {errorMessage}
            </Alert> 
          )}

        </div>
      </div>
    </div>
  );
}



