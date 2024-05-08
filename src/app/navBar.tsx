// 'use client'

import Link from 'next/link';
import { jac,nova, Popin } from './ui/fonts';

const Navbar = () => {
  return (
    <div className=" bg-customGreen">
        <nav className={`${Popin.className} container mx-auto px-4 py-6 flex justify-between items-center`}>
          <div className="flex items-center">

          <Link href="/" className="text-white font-bold text-xl  hover:text-white mr-6" >
          Inicio
          </Link>

       
          <Link href="/about" className="text-white  hover:text-white mr-6">
            Sobre avedul
          </Link>
       
          <Link href="/services" className="text-white  hover:text-white mr-6">
            Servicios
          </Link>

          <Link href="/galery" className="text-white  hover:text-white mr-6">
            Galeria
          </Link>

          <Link href="/music" className={`text-white  hover:text-white mr-6`}>
          Musica
          </Link>

          <Link href="/contact" className={`text-white  hover:text-white mr-6`}>
            Contacto
          </Link>
          </div>

        </nav>

    </div>
       
  );
};

export default Navbar;