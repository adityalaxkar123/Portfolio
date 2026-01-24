'use client';

import { motion } from 'framer-motion';
import { assets } from '../../assets/assets';
import { SiLeetcode, SiCodechef } from 'react-icons/si';

const Achievements = ({ isDarkMode: _isDarkMode }) => {
  const competitionAchievements = [
    {
      src: assets.codathon,
      alt: 'Codathon Achievement',
      title: '1st Prize — Codathon',
      description: 'Won 1st prize in the coding competition organized by IIIT Manipur',
      badge: '🏆',
    },
    {
      src: assets.hacksagom,
      alt: 'Hacksagon Achievement',
      title: 'Finalist — Hacksagon',
      description: 'Finalist in hackathon organized by IIIT Gwalior (among 1000+ teams)',
      badge: '🎯',
    },
    {
      src: assets.gssoc,
      alt: 'GSSOC Achievement',
      title: '70th Rank — GSSoC India',
      description: 'Contributed to open-source web projects in GirlScript Summer of Code',
      badge: '💻',
    },
    {
      src: assets.edunet,
      alt: 'EduNet Achievement',
      title: 'Internship — EduNet × Shell',
      description: 'Built garbage classification AI model during internship program',
      badge: '🤖',
    },
  ];

  const codingStats = [
    {
      platform: 'LeetCode',
      Icon: SiLeetcode,
      color: 'text-yellow-500',
      stats: [
        { label: 'Problems Solved', value: '300+' },
        { label: 'Contest Rating', value: '1600+' },
      ],
    },
    {
      platform: 'CodeChef',
      Icon: SiCodechef,
      color: 'text-amber-700 dark:text-amber-500',
      stats: [
        { label: 'Rating', value: '1400+' },
        { label: 'Badge', value: '2★ Coder' },
      ],
    },
  ];

  return (
    <motion.section
      id="achievements"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="section-shell"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="mb-2 text-sm sm:text-base md:text-lg font-Ovo text-blue-600 dark:text-blue-400">
            Milestones
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Ovo text-gray-900 dark:text-white">
            Achievements & Stats
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-300 font-Ovo text-xs sm:text-sm md:text-base">
            Competitions won, open-source contributions, and coding platform stats.
          </p>
        </motion.div>

        {/* Coding Platform Stats */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
        >
          {codingStats.map((platform) => (
            <div
              key={platform.platform}
              className="rounded-2xl bg-gradient-to-r from-blue-500/70 via-purple-500/70 to-fuchsia-500/70 p-[1px]"
            >
              <div className="rounded-2xl bg-white dark:bg-gray-900 border border-black/5 dark:border-white/10 p-5 sm:p-6 flex items-center gap-4">
                <div className="shrink-0 h-14 w-14 sm:h-16 sm:w-16 rounded-xl bg-gray-100 dark:bg-white/10 flex items-center justify-center">
                  <platform.Icon className={`text-3xl sm:text-4xl ${platform.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                    {platform.platform}
                  </h4>
                  <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                    {platform.stats.map((stat) => (
                      <p
                        key={stat.label}
                        className="text-xs sm:text-sm text-gray-700 dark:text-gray-300"
                      >
                        <span className="font-semibold">{stat.value}</span>{' '}
                        <span className="text-gray-500 dark:text-gray-400">{stat.label}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Competition Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {competitionAchievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.25 }}
              className="group rounded-2xl bg-white/70 backdrop-blur border border-black/5 shadow-sm hover:shadow-md transition-all dark:bg-white/5 dark:border-white/10 overflow-hidden"
            >
              <div className="p-4 sm:p-5 flex flex-col gap-3 min-h-[150px]">
                <div className="flex items-start gap-2">
                  <span className="text-lg sm:text-xl shrink-0">{achievement.badge}</span>
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-white leading-snug">
                    {achievement.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {achievement.description}
                </p>
                <a
                  href={achievement.src?.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View certificate
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Achievements;
