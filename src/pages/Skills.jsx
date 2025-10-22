import React, { use } from 'react';
import SkillsCard from './SkillsCard';

const skillPromise = fetch('/skills.json').then((res) => res.json());

const Skills = () => {
  const skillsData = use(skillPromise);
  console.log(skillsData);

  return (
    <div>
      <h3 className="text-3xl font-bold">Top categories</h3>
      <div className="grid grid-cols-3 gap-8">
        {skillsData.map((data) => (
          <SkillsCard key={data.skillId} data={data}></SkillsCard>
        ))}
      </div>
    </div>
  );
};

export default Skills;
