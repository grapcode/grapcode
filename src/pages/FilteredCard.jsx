import React from 'react';
import { FaStar } from 'react-icons/fa';
import { NavLink } from 'react-router';

const FilteredCard = ({ filteredSkill }) => {
  const { image, skillName, rating, price, skillId } = filteredSkill;
  // console.log(filteredSkill);
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-5 flex md:flex-row flex-col   gap-5  ">
      <img
        src={image}
        alt={skillName}
        className="md:w-9/12 h-52 object-cover  rounded-xl mb-4"
      />

      <div className=" md:text-left text-center ">
        <div className="">
          <h3 className="text-xl font-semibold mb-2">{skillName}</h3>
          <p className="text-yellow-500 font-medium mb-2 flex md:justify-start justify-center items-center gap-2">
            Rating: <FaStar /> {rating}
          </p>
          <p className="text-gray-700 mb-4">Price: ${price}</p>
        </div>
        {/*  Button */}

        <NavLink
          to={`/skills/${skillId}`}
          className="bg-[#3b25c1] hover:bg-[#ac55e2] text-white font-medium px-5 py-2 rounded-lg transition"
        >
          View Details
        </NavLink>
      </div>
    </div>
  );
};

export default FilteredCard;
