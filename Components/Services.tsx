import { CodeBracketSquareIcon, DevicePhoneMobileIcon, RocketLaunchIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Services = () => {
  return (
    <div className="bg-[#121212] pt-[4rem] md:pt:-[8rem] pb-[5rem]">
      <p className="heading"> Servi<span className="text-orange-400">cios</span>
      </p>
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        <div data-aos="fade-right">
        <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
          <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
          <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]"> Diseño Web</h1>
          <p className="text-[15px] text-[#d3d2d2] font-normal">
Transformamos ideas en experiencias digitales impactantes. Nuestro equipo fusiona diseño innovador, tecnología avanzada y estrategias de usuario para crear sitios web excepcionales.</p>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="300">
         <div className="bg-green-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]">
          <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
          <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]"> Desarollo Movil</h1>
          <p className="text-[15px] text-[#d3d2d2] font-normal">Potenciamos tu presencia en dispositivos móviles con aplicaciones personalizadas. Desde el diseño hasta la implementación, creamos soluciones móviles intuitivas y atractivas para tu negocio.</p>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="500">
         <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
          <DevicePhoneMobileIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
          <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]"> Redes Sociales </h1>
          <p className="text-[15px] text-[#d3d2d2] font-normal">Maximiza tu visibilidad y compromiso en línea con nuestra experiencia en publicidad y gestión de redes sociales. Desde estrategias de contenido hasta campañas publicitarias, impulsamos tu presencia digital.</p>
        </div>
        </div> 
        </div>
      
    </div>
  )
}

export default Services