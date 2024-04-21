import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';
import logo from '../assets/logo3.webp';
import ReCAPTCHA from 'react-google-recaptcha';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [recaptchaValue, setRecaptchaValue] = useState(null); // Estado para reCAPTCHA
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleRecaptcha = (value) => {
    setRecaptchaValue(value); // Actualiza el valor de reCAPTCHA cuando el usuario interactúa con él
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password || !recaptchaValue) {
      return dispatch(signInFailure('Please fill all fields and verify the CAPTCHA.'));
    }
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({...formData, recaptcha: recaptchaValue}),
      });
      const data = await res.json();
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
        <div className='flex-1'>
          <Link to="/" className='font-bold dark:text-white text-4xl'>
            <img src={logo} alt="Logo de Mamen" className='w-21 h-21' style={{ display: 'inline', verticalAlign: 'middle' }} />
          </Link>
          <p className='text-sm mt-5'>
            Puedes iniciar sesión con tu correo electrónico y contraseña o con Google.
          </p>
        </div>
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Tú email' />
              <TextInput type='email' placeholder='nombre@company.com' id='email' onChange={handleChange}/>
            </div>
            <div className='flex-1'>
              <Label value='Tu contraseña' />
              <TextInput type='password' placeholder='**********' id='password' onChange={handleChange}/>
            </div>
            <ReCAPTCHA
              sitekey="6LeZrMIpAAAAAJohnNCenHyb8snzBqicfGfBchl7"
              onChange={handleRecaptcha}
            />
            <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Cargando..</span>
                </>
              ) : (
                'Inicia sesión'
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
            <Alert color='failure' className='mt-5'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
