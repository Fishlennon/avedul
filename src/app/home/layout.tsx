import React, { ReactNode } from 'react';
import Navbar from './navBar'; // Ajusta la ruta según la ubicación de tu componente NavBar

interface LayoutProps {
  children: ReactNode;
}

const Homelayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar /> {/* Renderiza el componente NavBar */}
      <div>
        {children} {/* Renderiza el contenido de las páginas hijas */}
      </div>
    </div>
  );
};

export default Homelayout;