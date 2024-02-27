import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>Proyectos Destacados</h1>
      <p className='text-md text-gray-500'>Cómo los chatbots de IA en los motores de búsqueda cambiarán completamente Internet
Las medidas adoptadas por Google, Microsoft y Baidu para 
incorporar chatbots de inteligencia artificial a sus motores de búsqueda pueden traer grandes ventajas, pero también podrían dañar muchas industrias y cambiar la forma misma en que interactuamos con la web.</p>
      <CallToAction />
    </div>
  )
}