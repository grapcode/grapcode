import React from 'react';
import { FaStar } from 'react-icons/fa';

const FilteredCard = ({ filteredSkill }) => {
  const { image, skillName, rating, price } = filteredSkill;
  // console.log(filteredSkill);
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-5 flex md:flex-row gap-5  ">
      <img
        src={image}
        alt={skillName}
        className="w-9/12 h-52 object-cover rounded-xl mb-4"
      />

      <div className="">
        <h3 className="text-xl font-semibold mb-2">{skillName}</h3>
        <p className="text-yellow-500 font-medium mb-2 flex items-center gap-2">
          Rating: <FaStar /> {rating}
        </p>
        <p className="text-gray-700 mb-4">Price: ${price}</p>
      </div>
    </div>
  );
};

export default FilteredCard;
