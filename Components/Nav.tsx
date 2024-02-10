import { Bars3Icon } from '@heroicons/react/16/solid/index.js';
import React from 'react';

interface Props {
  openNav: () => void;
}

const Nav = ({openNav}:Props) => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-full">
        <h1 className="flex-grow cursor-pointer text-[20px] text-white font-bold">
          BANDERA
          <span className="text-orange-400"> DIGITAL  </span>
         </h1>
        
        <div className="hidden md:flex space-x-4">
          <div className="nav-link">INICIO</div>
          <div className="nav-link">SERVICIOS</div>
          <div className="nav-link">ACERCA</div>
          <div className="nav-link">PROYECTOS</div>
          <div className="nav-link">BLOG</div>
          <div className="nav-link">CONTACTO</div>
        </div>
        <div onClick={openNav}>
          <Bars3Icon className="w-6 h-6 md:hidden cursor-pointer text-yellow-300"/>
        </div>
      </div>
    </div>
  );
};

export default Nav;

