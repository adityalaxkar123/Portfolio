'use client';

import Image from 'next/image';
import { assets } from '../../assets/assets';

const Achievements = ({ isDarkMode }) => {
  const achievementImages = [
    {
      src: assets.codathon,
      alt: 'Codathon Achievement',
      description: '🏆 Won 1st prize in the Codathon coding competition organized by IIIT Manipur'
    },
    {
      src: assets.hacksagom,
      alt: 'Hacksagon Achievement',
      description: '🎯 Finalist in Hacksagon hackathon organized by IIIT Gwalior (among 1000+ teams)'
    },
    {
      src: assets.gssoc,
      alt: 'GSSOC Achievement',
      description: '💻 Contributed to open-source web projects in GirlScript Summer of Code(70th rank in india)'
    },
    {
      src: assets.edunet,
      alt: 'EduNet Achievement',
      description: '🤖 Completed EduNet X Shell internship program, built garbage classification AI model'
    }
  ];

  return (
    <section id="achievements" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className={`text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}
          >
            My Achievements
          </h2>
          <p
            className={`text-lg ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Milestones and accomplishments in my journey
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievementImages.map((achievement, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center"
            >
              {/* Clickable Image */}
              <a
                href={achievement.src.src}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src={achievement.src}
                  alt={achievement.alt}
                  width={600}
                  height={400}
                  className={`w-full h-48 ${
                    achievement.alt.includes('EduNet')
                      ? 'object-contain'
                      : 'object-cover'
                  } rounded-xl transition-transform duration-300 group-hover:scale-105`}
                />
              </a>

              {/* Modern Text Card */}
              <div
                className={`mt-4 w-full rounded-lg p-4 shadow-lg border border-white/20 backdrop-blur-md transition-all duration-300 
                ${
                  isDarkMode
                    ? 'bg-white/10 text-gray-200 hover:bg-white/20'
                    : 'bg-gray-50 text-gray-800 hover:bg-gray-100'
                }`}
              >
                <p className="text-sm leading-relaxed">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
