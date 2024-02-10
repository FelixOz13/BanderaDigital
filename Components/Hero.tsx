import React from 'react';
import Particle from './Particle';
import TextEffect from './TextEffect';
import Image from 'next/image';
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid';
import PlayCircleIcon from '@heroicons/react/16/solid/esm/PlayCircleIcon';

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[25px] md:text-[35px] text-white font-bold">
           BANDERA <span className="text-orange-400"> DIGITAL</span>
          </h1>
        
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
            "Adéntrate al reino digital, donde el código transforma la imaginación en realidad. Con precisión y pasión, elaboramos soluciones innovadoras a partir de la complejidad. Vamos a desafiar los límites y desbloquear nuevas posibilidades."</p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <a href="/cv.pdf" download className="block">
            <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#1E90FF] text-black flex items-center space-x-2">
            <p>LISTA DE PRECIOS</p>
            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
            </a>
            <button className="flex items-center space-x-2">
              <PlayCircleIcon className ="w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#1E90FF] "/>
              <p className="text-[20px] font-semibold text-white">"Ver el video"</p>
            </button>
          </div>
        </div>
        <div data-aos="zoom-in"
          className="w-[500px] hidden bg-[#1E90FF] relative lg:flex items-center rounded-full h-[500px]">
          <div className="relative w-full h-full">
            <Image
              src="/images/programmer.gif"
              alt="user"
              className="rounded-full object-cover"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
