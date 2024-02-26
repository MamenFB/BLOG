import { Footer } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom';
import { BsInstagram, BsTwitter, BsGithub, BsFacebook, BsLinkedin } from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
          <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
          
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 rounded-lg text-white'>
                Mamen Blog
              </span>
          </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'></div>
          <div>
              <Footer.Title title='Acerca de' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.100jsprojects.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  100 JS Proyectos
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Mamen Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Sígueme' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://github.com/MamenFB'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='#'>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Política de privacidad</Footer.Link>
                <Footer.Link href='#'>Terminos &amp; Condiciones</Footer.Link>
              </Footer.LinkGroup>
            </div>
        </div>
      </div>
      <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="Mamen blog"
            year={new Date().getFullYear()}
          />
           <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
           
            <Footer.Icon href='https://instagram.com/' icon={BsInstagram}/>
            <Footer.Icon href='https://twitter.com/' icon={BsTwitter}/>
            <Footer.Icon href='https://github.com/MamenFB' icon={BsGithub}/>
            <Footer.Icon href='https://www.facebook.com/' icon={BsFacebook}/>
            <Footer.Icon href='https://www.linkedin.com/in/mamen-fb/' icon={BsLinkedin}/>
          </div>
        </div>

      
       </Footer>
    
  );
}
