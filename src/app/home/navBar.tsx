// 'use client'

import Link from 'next/link';
import { jac,nova } from '../ui/fonts';

const Navbar = () => {
  return (
    <div className="bg-opacity-50 bg-customGreen">
        <nav className={`${nova.className} container mx-auto px-4 py-6 flex justify-between items-center`}>
          <div className="flex items-center">

          <Link href="/" className="text-black font-bold text-xl  hover:text-white mr-6" >
          Inicio
          </Link>

       
          <Link href="/home/about" className="text-black  hover:text-white mr-6">
            Sobre avedul
          </Link>
       
          <Link href="/home/services" className="text-black  hover:text-white mr-6">
            Servicios
          </Link>

          <Link href="/home/galery" className="text-black  hover:text-white mr-6">
            Galeria
          </Link>

          <Link href="/home/music" className={`text-black  hover:text-white mr-6`}>
          Musica
          </Link>

          <Link href="/home/contact" className={`text-black  hover:text-white mr-6`}>
            Contacto
          </Link>
          </div>

        </nav>

    </div>
       
  );
};

export default Navbar;