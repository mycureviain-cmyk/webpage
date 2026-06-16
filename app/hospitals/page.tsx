'use client';

import React, { useState } from 'react';
import { HOSPITALS } from '@/config/hospitals';
import HeroSection from '@/app/components/HeroSection';
import { motion } from 'framer-motion';

const HospitalsPage = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);

  const allSpecialties = Array.from(
    new Set(HOSPITALS.flatMap((h) => h.specialties))
  );

  const filteredHospitals = selectedSpecialty
    ? HOSPITALS.filter((h) => h.specialties.includes(selectedSpecialty))
    : HOSPITALS;

  return (
    <>
      <HeroSection
        title="Our Partner Hospitals"
        subtitle="Premium Healthcare Facilities"
        description="JCI-accredited hospitals with world-class infrastructure and expert medical professionals"
        gradient
      />

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <div className="mb-12">
            <p className="text-slate-600 dark:text-slate-400 mb-4 font-semibold">
              Filter by Specialty
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedSpecialty(null)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedSpecialty === null
                    ? 'bg-gradient-primary text-white'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-300'
                }`}
              >
                All
              </button>
              {allSpecialties.map((specialty) => (
                <button
                  key={specialty}
                  onClick={() => setSelectedSpecialty(specialty)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all ${
                    selectedSpecialty === specialty
                      ? 'bg-gradient-primary text-white'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-300'
                  }`}
                >
                  {specialty}
                </button>
              ))}
            </div>
          </div>

          {/* Hospitals Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredHospitals.map((hospital, idx) => (
              <motion.div
                key={hospital.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden card-shadow h-full flex flex-col">
                  {/* Header */}
                  <div className="bg-gradient-light dark:bg-slate-700 p-6">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {hospital.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 flex items-center">
                      📍 {hospital.location}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow">
                    <p className="text-slate-700 dark:text-slate-300 mb-6">
                      {hospital.description}
                    </p>

                    {/* Accreditations */}
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-primary-600 dark:text-teal-400 mb-2">
                        ACCREDITATIONS
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {hospital.accreditations.map((acc, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-primary-100 dark:bg-slate-700 text-primary-700 dark:text-teal-300 px-3 py-1 rounded-full font-semibold"
                          >
                            {acc}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Specialties */}
                    <div>
                      <p className="text-sm font-semibold text-primary-600 dark:text-teal-400 mb-2">
                        SPECIALTIES
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {hospital.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-6 py-4 bg-slate-50 dark:bg-slate-700 border-t border-slate-200 dark:border-slate-600 flex flex-wrap gap-4">
                    {hospital.phone && (
                      <a
                        href={`tel:${hospital.phone}`}
                        className="text-primary-600 dark:text-teal-400 hover:underline text-sm font-semibold"
                      >
                        📞 Call
                      </a>
                    )}
                    {hospital.website && (
                      <a
                        href={hospital.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-teal-400 hover:underline text-sm font-semibold"
                      >
                        🌐 Website
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HospitalsPage;
