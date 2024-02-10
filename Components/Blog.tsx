import { UserCircleIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/16/solid"
import Image from "next/image"
import React from 'react'

const Blog = () => {
  return (
    <div className="pt[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]">
      <h1 className="heading">
        NUESTRO
        <span className="text-yellow-400"> BLOG</span>
      </h1>


      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-4[rem] gap-[3rem] w-[80%] mx-auto">
        

        <div>
          <div className="w-[100%] relative h-[400px]">
            <Image
              src="/images/mobileapps.jpg"
              alt="blog"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[-1rem] mt-[-5rem] pb-[1rem] pl-[1rem]">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[3rem] text-black font-semibold text-[17px] mx-auto">
              Febrero 7, 2024 
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4 ">
              <div className="flex items-center space-x-3">
                <UserCircleIcon className="w-[2rem] mx-auto h-[2rem] text-[#55e6a5]" />
                <p className="text-white"> Jimmy</p>
              </div>
              <div className="flex items-center space-x-2">
                <ChatBubbleLeftRightIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white">Comentarios(2)</p>
              </div>
            </div>
            <p className="mt-[1rem] text-white text-[18px] font-semibold">
              Desarollo Movil
            </p>
          </div>
        </div>
        <div>
          <div className="w-[100%] relative h-[400px]">
            <Image
              src="/images/blog3.jpg"
              alt="blog"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[-1rem] mt-[-5rem] pb-[1rem] pl-[1rem]">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[3rem] text-black font-semibold text-[17px] mx-auto">
              Febrero 9, 2024 
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4 ">
              <div className="flex items-center space-x-3">
                <UserCircleIcon className="w-[2rem] mx-auto h-[2rem] text-[#55e6a5]" />
                <p className="text-white"> Manuel</p>
              </div>
              <div className="flex items-center space-x-2">
                <ChatBubbleLeftRightIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white">Comentarios(2)</p>
              </div>
            </div>
            <p className="mt-[1rem] text-white text-[18px] font-semibold">
              Diseño de Sitios Web
            </p>
          </div>
        </div>
        <div>
          <div className="w-[100%] relative h-[400px]">
            <Image
              src="/images/blog2.jpg"
              alt="blog"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[-1rem] mt-[-5rem] pb-[1rem] pl-[1rem]">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[3rem] text-black font-semibold text-[17px] mx-auto">
              Febrero 11, 2024 
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4 ">
              <div className="flex items-center space-x-3">
                <UserCircleIcon className="w-[2rem] mx-auto h-[2rem] text-[#55e6a5]" />
                <p className="text-white"> Enrique</p>
              </div>
              <div className="flex items-center space-x-2">
                <ChatBubbleLeftRightIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white">Comentarios(2)</p>
              </div>
            </div>
            <p className="mt-[1rem] text-white text-[18px] font-semibold">
              Programacion Analytica
            </p>
          </div>
          </div>
             

      </div>
      </div>
  );
}


export default Blog;