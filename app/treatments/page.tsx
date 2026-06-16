'use client';

import React, { useState } from 'react';
import { SPECIALTIES } from '@/config/specialties';
import SpecialtyCard from '@/app/components/SpecialtyCard';
import HeroSection from '@/app/components/HeroSection';

const TreatmentsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    'All',
    'Surgical',
    'Diagnostic',
    'Therapeutic',
    'Wellness',
  ];

  const filteredSpecialties = selectedCategory
    ? SPECIALTIES
    : SPECIALTIES;

  return (
    <>
      <HeroSection
        title="Medical Treatment Specialties"
        subtitle="Explore Our Services"
        description="Comprehensive medical solutions across major specialties with world-class specialists"
        gradient
      />

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category === 'All' ? null : category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === (category === 'All' ? null : category)
                    ? 'bg-gradient-primary text-white'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSpecialties.map((specialty, idx) => (
              <SpecialtyCard
                key={specialty.id}
                specialty={specialty}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TreatmentsPage;
