import React from 'react';
import SkillsList from "@/Components/SkillsList";
import SkillsLanguage from "@/Components/SkillsLanguage";

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">Especia<span className="text-orange-400">listas en</span></h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] items-center">
        <div>
          <div>
            <SkillsList />
          </div>
          <div className="md:col-span-2"> {/* This div spans two columns on medium screens and above */}
            <SkillsLanguage 
              skill1="Desarrollo Movil"
              skill2="Marketing Digital"
              skill3="Redes Sociales"
              skill4="Creacion de Sitios"
              skill5="Diseño Web"
              skill6="Programacion Analitica"
              level1="w-[100%]"
              level2="w-[100%]"
              level3="w-[100%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
