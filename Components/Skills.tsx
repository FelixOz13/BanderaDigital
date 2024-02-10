import React from 'react';
import SkillsList from "@/Components/SkillsList";
import SkillsLanguage from "@/Components/SkillsLanguage";

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">Herra<span className="text-orange-400">mientas</span></h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] items-center">
        <div>
          <div>
            <SkillsList />
          </div>
          <div className="md:col-span-2"> {/* This div spans two columns on medium screens and above */}
            <SkillsLanguage 
              skill1="HTML"
              skill2="CSS"
              skill3="Javascript"
              skill4="Node"
              skill5="Typescript"
              skill6="Desarollo Movil"
              level1="w-[91%]"
              level2="w-[88%]"
              level3="w-[80%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
