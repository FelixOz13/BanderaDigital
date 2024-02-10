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
          <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]"> Frontend</h1>
          <p className="text-[15px] text-[#d3d2d2] font-normal">HTML, CSS y JavaScript para el desarrollo frontend, con experiencia en estilizado utilizando Bootstrap, Material UI y Tailwind CSS. Experimentado en TypeScript y Next.js para la construcción de aplicaciones web robustas y eficientes.</p>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="300">
         <div className="bg-green-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]">
          <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
          <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]"> Backend</h1>
          <p className="text-[15px] text-[#d3d2d2] font-normal">Especializados en Node.js, Express.js y MongoDB para una arquitectura backend robusta. Experimentado en GraphQL para un desarrollo eficiente de API, junto con SQL para la gestión de bases de datos relacionales, y Docker para soluciones de implementación escalables.</p>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="500">
         <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
          <DevicePhoneMobileIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
          <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]"> Desarollo Movil</h1>
          <p className="text-[15px] text-[#d3d2d2] font-normal">Proficientes en el desarrollo de aplicaciones móviles multiplataforma utilizando Flutter y React Native. Hábil en la creación de experiencias nativas para las plataformas iOS y Android, con experiencia en diseño de UI/UX, gestión de estado e integración con servicios backend para aplicaciones móviles fluidas.</p>
        </div>
        </div> 
        </div>
      
    </div>
  )
}

export default Services