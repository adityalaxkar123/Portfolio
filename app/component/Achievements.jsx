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
    <section id="achievements" className="section-shell">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h4 className="mb-2 text-sm sm:text-base md:text-lg font-Ovo text-blue-600 dark:text-blue-400">Milestones</h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Ovo text-gray-800 dark:text-white">
            My Achievements
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-300 font-Ovo text-xs sm:text-sm md:text-base">
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
                className="mt-4 w-full rounded-xl p-4 transition-all duration-300 bg-white/70 backdrop-blur border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 dark:bg-white/5 dark:border-white/10"
              >
                <p className="text-xs sm:text-sm leading-relaxed text-gray-700 dark:text-gray-200">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
