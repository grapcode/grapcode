// src/components/FAQ.jsx
import React, { useState } from 'react';

const faqs = [
  {
    question: 'How can I share a skill?',
    answer:
      "First, log in to your account, then click the 'Add Skill' button and fill in the details of your skill to post it.",
  },
  {
    question: 'How can I find top-rated providers?',
    answer:
      "Go to the 'Top Rated Providers' section on the homepage. Providers are displayed based on their ratings.",
  },
  {
    question: 'How can I exchange skills with others?',
    answer:
      'Select the skill you are interested in and contact the provider through their profile to arrange an exchange.',
  },
  {
    question: 'Is there any fee to use this website?',
    answer:
      'The basic features are free to use. Some premium services may have separate charges.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="font-medium text-lg flex justify-between items-center">
                {faq.question}
                <span>{openIndex === index ? '−' : '+'}</span>
              </h3>
              {openIndex === index && (
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
