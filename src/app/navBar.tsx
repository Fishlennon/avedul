// 'use client'

import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
        <nav>
          <Link href="/home">
            Inicio
          </Link>
       
          <Link href="/about">
            Acerca de
          </Link>
       
          <Link href="/contact">
            Contacto
          </Link>

        </nav>

    </div>
       
  );
};

export default Navbar;