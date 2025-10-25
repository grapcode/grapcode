import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router';
import { toast } from 'react-toastify';

const SkillsDetails = () => {
  const { id } = useParams();
  const allSkills = useLoaderData();

  const skill = allSkills.find((s) => s.skillId == id);

  const {
    skillName,
    providerName,
    providerEmail,
    price,
    rating,
    slotsAvailable,
    description,
    image,
    category,
  } = skill;

  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Session booked successfully!');
    setFormData({ name: '', email: '' });
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center bg-white rounded-2xl shadow-md p-6">
        {/* Left side - Image */}
        <div className="flex justify-center">
          <img
            src={image}
            alt={skillName}
            className="rounded-xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Right side - Details */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            {skillName}
          </h1>
          <p className="text-gray-600 mb-4">{description}</p>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < Math.round(rating) ? 'text-yellow-500' : 'text-gray-300'
                  }
                />
              ))}
            </div>
            <span className="text-gray-700 font-semibold">({rating})</span>
          </div>

          <p className="text-lg font-semibold text-blue-600 mb-2">
            Price: ${price}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Category:</span> {category}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Available Slots:</span>{' '}
            {slotsAvailable}
          </p>
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">Provider:</span> {providerName}
          </p>
          <p className="text-gray-700 mb-6">
            <span className="font-semibold">Contact:</span> {providerEmail}
          </p>

          {/* Booking Form */}
          <div className="border-t pt-4">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">
              Book a Session
            </h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 max-w-sm"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="border p-2 rounded-md focus:outline-blue-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="border p-2 rounded-md focus:outline-blue-500"
              />
              <button
                type="submit"
                className="bg-[#3b25c1] hover:bg-[#ac55e2] text-white font-medium px-5 py-2 rounded-lg transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsDetails;
