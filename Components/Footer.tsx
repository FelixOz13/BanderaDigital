import { ArchiveBoxIcon, DevicePhoneMobileIcon, EnvelopeIcon, ExclamationCircleIcon, MapIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Footer = () => {
  return (
    <div className=" pt-[8rem] pb-[4rem bg-[4rem] bg-[#02050a]">
      <div className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]">
        <div className="flex-items space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
           <EnvelopeIcon className="md:w-[3rem] md:h-[3rem] w-[2rem] h-[2rem] text-black"/> 
          </div>
          <div>
            <h1 className="text-[25px] mt-[1.5rem] mb-[0.2rem] font-semibold text-[white]">
              Correo Electronico
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">contacto@banderadigital.mx</p>
          </div>
        </div>
       <div className="flex-items space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
           <DevicePhoneMobileIcon className="md:w-[3rem] md:h-[3rem] w-[2rem] h-[2rem] text-black"/> 
          </div>
          <div>
            <h1 className="text-[25px] mt-[1.5rem] mb-[0.2rem] font-semibold text-[white]">
              Whatsapp
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">52+3324949195</p>
          </div>
        </div>
        <div className="flex-items space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
           <MapIcon className="md:w-[3rem] md:h-[3rem] w-[2rem] h-[2rem] text-black"/> 
          </div>
          <div>
            <h1 className="text-[25px] mt-[1.5rem] mb-[0.2rem] font-semibold text-[white]">
              Domicilio
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">Av Adolfo López Mateos Nte 95, Italia Providencia, 44648 Guadalajara, Jal.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[80%] mt-[2rem] mx-auto grid-cols-1 md:grid-cols-2 items-center justify-between">
        <div className=" flex items center space-x-10 text-white">
          Bandera Digital® | Derechos Reservados
        </div>
      <div className="flex items-center space-x-10">
        <p className="text-[13px] text-white"> Guadalajara, Jalisco</p>
      </div>
      </div>
      </div>
      
  )
}

export default Footer