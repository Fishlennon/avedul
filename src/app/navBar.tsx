'use client'
import { jac,nova, Popin } from './ui/fonts';

const Navbar = () => {

  const scrollToSelector = (selector: string) => {
    if (typeof window === 'undefined') return;
  
    const element = document.querySelector(selector);
    if (element) {
      const navHeight = document.querySelector('nav')?.offsetHeight || 0;
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      window.scrollBy(0, -navHeight);
    }
  };



  return (
    <div className=" bg-customGreen">
        <nav className={`${Popin.className} container mx-auto px-4 py-6 flex justify-between items-center`}>
          <div className="flex items-center">

          <a href="/" className="text-white font-bold text-xl  hover:text-white mr-6" >
          Inicio
          </a>

       
          <a onClick={() => scrollToSelector('#about')} className="text-white  hover:text-white mr-6">
            Sobre avedul
          </a>
       
          <a onClick={() => scrollToSelector('#services')} className="text-white  hover:text-white mr-6">
            Servicios
          </a>

          <a onClick={() => scrollToSelector('#gallery')} className="text-white  hover:text-white mr-6">
            Galeria
          </a>

          <a onClick={() => scrollToSelector('#music')} className={`text-white  hover:text-white mr-6`}>
          Musica
          </a>

          <a onClick={() => scrollToSelector('#contact')} className={`text-white  hover:text-white mr-6`}>
            Contacto
          </a>
          </div>

        </nav>

    </div>
       
  );
};

export default Navbar;