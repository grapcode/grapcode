import React, { use } from 'react';
import SkillsCard from './SkillsCard';
import FilteredCard from './FilteredCard.jsx';

const skillPromise = fetch('/skills.json').then((res) => res.json());

const Skills = () => {
  const skillsData = use(skillPromise);
  // console.log(skillsData);

  return (
    <div>
      <h3 className="text-3xl font-bold mt-12 border-b border-gray-300 pb-2 text-center">
        All categories
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        {skillsData.map((data) => (
          <SkillsCard key={data.skillId} data={data}></SkillsCard>
        ))}
      </div>
      <section>
        <h3 className="text-3xl font-bold mt-12 border-b border-gray-300 pb-2 text-center ">
          Top Rated Providers
        </h3>
        <div className="flex flex-col">
          {/* ⚡ skills card */}
          <div className="space-y-10">
            {skillsData
              .filter((skill) => skill.rating >= 4.8)
              .map((filteredSkill) => (
                <FilteredCard
                  key={filteredSkill.skillId}
                  filteredSkill={filteredSkill}
                ></FilteredCard>
              ))}
          </div>
          {/* ⚡ How it works section */}
          <section className="my-12 p-6 bg-[#3b25c1] rounded-lg text-center">
            <h3 className="text-3xl font-bold mb-6 text-white">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-white rounded shadow hover:bg-[#ac55e2] hover:text-white hover:scale-105 transition">
                <h4 className="font-semibold text-lg mb-2">1. Browse Skills</h4>
                <p>
                  Explore skills offered by local providers in various
                  categories.
                </p>
              </div>
              <div className="p-4 bg-white rounded shadow hover:bg-[#ac55e2] hover:text-white hover:scale-105 transition">
                <h4 className="font-semibold text-lg mb-2">
                  2. Book a Session
                </h4>
                <p>
                  Choose your skill and book a session easily when logged in.
                </p>
              </div>
              <div className="p-4 bg-white rounded shadow hover:bg-[#ac55e2] hover:text-white hover:scale-105 transition">
                <h4 className="font-semibold text-lg mb-2">3. Learn & Rate</h4>
                <p>
                  Attend the session, improve your skills, and rate your
                  experience.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Skills;
