import React from 'react';
import Image from 'next/image';

const Projects = () => {
  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <h1 className="heading">
        Proy<span className="text-yellow-400">ectos</span>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        {/* Image 1 */}
        <div data-aos="fade-up">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
            <Image
              src="/images/oui.png"
              alt="portfolio"
              className="object-contain"
              layout="fill"
            />
          </div>
        </div>

        
        <div data-aos="fade-up" data-aos-delay="300">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
            <Image
              src="/images/bm.png"
              alt="portfolio"
              className="object-contain"
              layout="fill"
            />
          </div>
        </div>

        {/* Image 3 */}
        <div data-aos="fade-up" data-aos-delay="600">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
            <Image
              src="/images/tiangero.png"
              alt="portfolio"
              className="object-contain"
              layout="fill"
            />
          </div>
        </div>

        {/* Add more images here with similar structure */}
        <div data-aos="fade-up" data-aos-delay="900">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
            <Image
              src="/images/projectmgmt.png"
              alt="portfolio"
              className="object-contain"
              layout="fill"
            />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="1200">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
            <Image
              src="/images/merch.png"
              alt="portfolio"
              className="object-contain"
              layout="fill"
            />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="1500">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
            <Image
              src="/images/bmplaystore.png"
              alt="portfolio"
              className="object-contain"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
