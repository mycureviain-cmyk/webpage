'use client';

import React from 'react';
import HeroSection from '@/app/components/HeroSection';
import StatisticsSection from '@/app/components/StatisticsSection';
import { motion } from 'framer-motion';
import { FiTarget, FiHeart, FiShield, FiUsers } from 'react-icons/fi';

const AboutPage = () => {
  const stats = [
    { label: 'Years of Experience', value: 15, suffix: '+' },
    { label: 'Partner Hospitals', value: 10 },
    { label: 'Specialist Doctors', value: 50 },
    { label: 'Happy Patients', value: 1000 },
  ];

  const values = [
    {
      icon: FiHeart,
      title: 'Patient-Centric Care',
      description:
        'Every decision we make is focused on patient welfare and satisfaction.',
    },
    {
      icon: FiShield,
      title: 'Quality & Safety',
      description:
        'We partner only with JCI-accredited hospitals maintaining highest standards.',
    },
    {
      icon: FiUsers,
      title: 'Compassionate Support',
      description:
        'Our team provides empathetic, 24/7 support throughout your journey.',
    },
    {
      icon: FiTarget,
      title: 'Excellence',
      description:
        'Commitment to delivering best-in-class healthcare experiences.',
    },
  ];

  const timeline = [
    {
      year: '2009',
      title: 'Foundation',
      description: 'MyCureVia established with vision to revolutionize medical tourism',
    },
    {
      year: '2012',
      title: 'Growth',
      description: 'Expanded network to 10+ partner hospitals across India',
    },
    {
      year: '2016',
      title: 'International Expansion',
      description: 'Started serving patients from 50+ countries worldwide',
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Launched telemedicine and secure patient portal',
    },
    {
      year: '2024',
      title: 'Innovation',
      description: 'AI-powered patient matching and personalized care plans',
    },
  ];

  return (
    <>
      <HeroSection
        title="About MyCureVia"
        subtitle="Our Story"
        description="Leading provider of premium medical tourism solutions connecting international patients with world-class healthcare in India"
        gradient
      />

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-light dark:bg-slate-800 rounded-xl p-12"
            >
              <div className="text-5xl mb-4">🎯</div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Our Mission
              </h2>
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                To provide seamless access to world-class healthcare by connecting
                international patients with leading hospitals and specialists in India,
                while offering comprehensive support throughout their medical journey.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-primary text-white rounded-xl p-12"
            >
              <div className="text-5xl mb-4">🌍</div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                To become the world's most trusted medical tourism platform,
                making affordable, high-quality healthcare accessible to everyone,
                regardless of their geographical location.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <StatisticsSection stats={stats} />

      {/* Why Hyderabad */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Why <span className="gradient-text">Hyderabad?</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Strategic advantages making it a medical hub
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'World-Class Infrastructure',
                description:
                  'State-of-the-art medical facilities matching international standards',
              },
              {
                title: 'Expert Specialists',
                description:
                  'Highly qualified doctors with international training and experience',
              },
              {
                title: 'Cost-Effective',
                description: '50-70% less expensive than Western countries',
              },
              {
                title: 'Accessibility',
                description: 'International airport with direct flights from 100+ cities',
              },
              {
                title: 'Hospitality',
                description: 'Renowned for warm, welcoming culture and service orientation',
              },
              {
                title: 'Recovery Environment',
                description: 'Peaceful climate and excellent recovery-focused facilities',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-light dark:bg-slate-800 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Principles guiding our every action
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-slate-900 rounded-xl p-6 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-light dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary-600 dark:text-teal-400" size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Milestones in our growth and development
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${
                  idx % 2 === 1 ? 'flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 bg-gradient-light dark:bg-slate-800 rounded-xl p-6">
                  <p className="text-primary-600 dark:text-teal-400 font-bold text-lg">
                    {item.year}
                  </p>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>
                <div className="w-4 h-4 rounded-full bg-gradient-primary flex-shrink-0 hidden md:block" />
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-light dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12">
            Dedicated professionals committed to your healthcare journey
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: 'Dr. Rajesh Kumar',
                role: 'Chief Medical Officer',
                emoji: '👨‍⚕️',
              },
              {
                name: 'Priya Sharma',
                role: 'Patient Care Director',
                emoji: '👩‍💼',
              },
              {
                name: 'Amit Patel',
                role: 'Operations Manager',
                emoji: '👨‍💼',
              },
              {
                name: 'Sarah Johnson',
                role: 'International Relations',
                emoji: '👩‍💼',
              },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 rounded-xl p-6"
              >
                <div className="text-5xl mb-4">{member.emoji}</div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-teal-400 text-sm">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
