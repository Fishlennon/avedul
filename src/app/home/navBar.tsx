// 'use client'

import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="bg-gray-800">
        <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">

          <Link href="/contact" className="text-white font-bold text-xl mr-6">
          Inicio
          </Link>

       
          <Link href="/about" className="text-white hover:text-gray-300 mr-6">
            Sobre avedul
          </Link>
       
          <Link href="/contact" className="text-white hover:text-gray-300 mr-6">
            Servicios
          </Link>

          <Link href="/contact" className="text-white hover:text-gray-300 mr-6">
            Galeria
          </Link>

          <Link href="/home" className="text-white hover:text-gray-300 mr-6">
          Musica
          </Link>

          <Link href="/contact" className="text-white hover:text-gray-300">
            Contacto
          </Link>
          </div>

        </nav>

    </div>
       
  );
};

export default Navbar;