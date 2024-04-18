import React, { ReactNode } from 'react';
import Navbar from './navBar'; // Ajusta la ruta según la ubicación de tu componente NavBar

interface LayoutProps {
  children: ReactNode;
}

const Homelayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar /> 
      <div className="text-black">
        {children} 
      </div>
    </div>
  );
};

export default Homelayout;