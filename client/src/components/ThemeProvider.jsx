import { useSelector } from 'react-redux';

export default function ThemeProvider({ children }) {
   // Uso del hook useSelector para acceder al estado del tema desde el estado global de Redux
  // La estructura `state.theme` hace referencia a la clave bajo la cual se almacena el estado del tema
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div className='bg-white text-gray-700 dark:text-gray-200 dark:bg-[rgb(16,23,42)] min-h-screen'>
        {children}
      </div>
    </div>
  );
}
