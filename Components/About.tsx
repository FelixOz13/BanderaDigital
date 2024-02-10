import React from 'react'
import Image from 'next/image';
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid';

const About = () => {
  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem] ">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#1E90FF] md-1[1rem]">ACERCA
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem]leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Transformando <span className="text-orange-400">Visiones</span>
          </h2>
        
        <div className="mb-[3rem] flex items-center md:space-x-10">
          <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
          <p className="text-[19px] text-slate-300 w-[80%]">Donde la creatividad se encuentra con la innovación, podemos ayudar a que tus sueños de desarrollo web cobren vida. "Construyamos algo extraordinario juntos".</p>

          </div>
          <a href="/cv.pdf" download className="block">
          <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#1E90FF] text-black flex items-center space-x-2">
          <p>LISTA DE PRECIOS</p>
          <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
          </button>
          </a>
          </div>
          <div data-aos="fade-left" className ="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
           <Image
              src="/images/programmer2.gif"
              alt="user"
              layout="fill"
              objectFit="contain" 
              className="relative z-[11] w-[100%] object-container"
              unoptimized={true}
          />
          <div className="absolute w-[100%] h-[100%] z-[10] bg-[#1E90FF] top-[-2rem] right-[-2rem]"></div>
        </div>
      </div>
    </div>
  )
}

export default About