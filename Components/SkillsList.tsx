import React from 'react';
import skillsData from '@/pages/skillsData.json';
import SkillsItem from '@/Components/SkillsItem'; // Assuming the correct file name is SkillItem

const SkillsList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {skillsData.map((skill, index) => (
        <SkillsItem key={index}
          title={skill.title}
          year={skill.year}
          description={skill.description}
          
        />
      ))}
    </div>
  );
};

export default SkillsList;
