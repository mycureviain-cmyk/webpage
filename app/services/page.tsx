'use client';

import React from 'react';
import { SERVICES } from '@/config/services';
import ServiceCard from '@/app/components/ServiceCard';
import HeroSection from '@/app/components/HeroSection';
import Button from '@/app/components/Button';

const ServicesPage = () => {
  return (
    <>
      <HeroSection
        title="Our Services"
        subtitle="Complete Support"
        description="End-to-end medical tourism solutions from initial consultation to post-treatment follow-up"
        gradient
      />

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, idx) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                details={service.details}
                href={`#${service.id}`}
                index={idx}
              />
            ))}
          </div>

          <div className="mt-16 bg-gradient-light dark:bg-slate-800 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Need Customized Support?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              We can create a customized service package tailored to your specific needs and preferences.
            </p>
            <Button size="lg">
              <a href="/contact">Contact Our Team</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
