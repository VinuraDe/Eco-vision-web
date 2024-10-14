import React from 'react'
import { teamMembers } from '../../constants/Team';

const TeamSection = () => {
  return (
    <section id="team" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden group"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover group-hover:opacity-80 transition"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
                <div className="mt-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-blue-500"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin fa-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-blue-400"
                    aria-label="Twitter"
                  >
                    <i className="fab fa-twitter fa-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-800"
                    aria-label="GitHub"
                  >
                    <i className="fab fa-github fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

