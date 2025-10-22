import React from 'react';
import { FaStar } from 'react-icons/fa';
import { NavLink } from 'react-router';

const SkillsCard = ({ data }) => {
  const { image, skillName, rating, price, skillId } = data;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-5 flex flex-col  ">
      <img
        src={image}
        alt={skillName}
        className="w-full h-52 object-cover rounded-xl mb-4"
      />

      <div className="">
        <h3 className="text-xl font-semibold mb-2">{skillName}</h3>
        <p className="text-yellow-500 font-medium mb-2 flex items-center gap-2">
          Rating: <FaStar /> {rating}
        </p>
        <p className="text-gray-700 mb-4">Price: ${price}</p>
      </div>

      {/*  Button */}
      <NavLink
        to={`/skills/${skillId}`}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg transition"
      >
        View Details
      </NavLink>
    </div>
  );
};

export default SkillsCard;
