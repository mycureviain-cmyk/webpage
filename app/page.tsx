'use client';

import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import StatisticsSection from './components/StatisticsSection';
import ServiceCard from './components/ServiceCard';
import SpecialtyCard from './components/SpecialtyCard';
import TestimonialCard from './components/TestimonialCard';
import Button from './components/Button';
import { SPECIALTIES } from '@/config/specialties';
import { SERVICES } from '@/config/services';

const Home = () => {
  const stats = [
    { label: 'Partner Hospitals', value: 10 },
    { label: 'Expert Specialists', value: 50 },
    { label: 'Patients Assisted', value: 1000 },
    { label: 'Years of Excellence', value: 15, suffix: '+' },
  ];

  const testimonials = [
    {
      id: '1',
      name: 'Ahmed Hassan',
      country: 'Nigeria',
      treatment: 'Knee Replacement',
      review:
        'Outstanding service! The entire process was smooth, from initial consultation to post-operative care. The team made me feel comfortable throughout my journey.',
      rating: 5,
    },
    {
      id: '2',
      name: 'Fatima Al-Mansouri',
      country: 'UAE',
      treatment: 'Cardiac Surgery',
      review:
        'The quality of care and expertise of doctors exceeded my expectations. Highly professional and compassionate team!',
      rating: 5,
    },
    {
      id: '3',
      name: 'Rajesh Kumar',
      country: 'Bangladesh',
      treatment: 'IVF Treatment',
      review:
        'We finally achieved our dream of parenthood. Grateful to the entire team for their dedicated support.',
      rating: 5,
    },
  ];

  const whyChooseUs = [
    {
      icon: '🏥',
      title: 'Personalized Treatment Coordination',
      description: 'Expert case review and customized treatment planning',
    },
    {
      icon: '✅',
      title: 'Trusted Hospital Network',
      description: 'Partnerships with JCI-accredited hospitals',
    },
    {
      icon: '📄',
      title: 'Visa Assistance',
      description: 'Complete medical visa documentation support',
    },
    {
      icon: '🚗',
      title: 'Airport Transfers',
      description: 'Complimentary transportation services',
    },
    {
      icon: '🏨',
      title: 'Accommodation Support',
      description: 'Budget-friendly to premium housing options',
    },
    {
      icon: '🗣️',
      title: 'Multilingual Assistance',
      description: '24/7 support in 7 languages',
    },
    {
      icon: '👤',
      title: 'Dedicated Care Coordinator',
      description: 'Personal support throughout your journey',
    },
    {
      icon: '💻',
      title: 'Telemedicine Follow-Up',
      description: 'Post-treatment online consultations',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="World-Class Healthcare in Hyderabad, India"
        subtitle="Welcome to Excellence"
        description="We help international patients access leading specialists, advanced hospitals, travel support, accommodation, and personalized care throughout their medical journey."
        primaryCTA={{ label: 'Get Free Medical Opinion', href: '/contact' }}
        secondaryCTA={{ label: 'Explore Services', href: '/services' }}
        gradient
      />

      {/* Statistics Section */}
      <StatisticsSection
        stats={stats}
        title="Trusted by Thousands"
        description="Our track record speaks for itself"
      />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Why Choose <span className="gradient-text">MyCureVia</span>?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Complete medical tourism solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-light dark:bg-slate-800 rounded-xl p-6 text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Specialties Section */}
      <section className="py-20 bg-gradient-light dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Treatment <span className="gradient-text">Specialties</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Comprehensive care across major medical specialties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPECIALTIES.slice(0, 9).map((specialty, idx) => (
              <SpecialtyCard
                key={specialty.id}
                specialty={specialty}
                index={idx}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg">
              <a href="/treatments">View All Specialties</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Complete support from planning to recovery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((service, idx) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                details={service.details}
                href={`/services#${service.id}`}
                index={idx}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg">
              <a href="/services">All Services</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Patient Journey Timeline Section */}
      <section className="py-20 bg-gradient-light dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Your Treatment <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A simple 7-step process to world-class healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: 'Submit Medical Records',
                description: 'Share your medical reports and test results',
              },
              {
                step: 2,
                title: 'Receive Expert Opinion',
                description: 'Get detailed assessment from specialists',
              },
              {
                step: 3,
                title: 'Cost Estimate',
                description: 'Transparent pricing and payment options',
              },
              {
                step: 4,
                title: 'Visa & Travel Support',
                description: 'We handle all documentation and arrangements',
              },
              {
                step: 5,
                title: 'Arrival & Reception',
                description: 'Airport pickup and accommodation check-in',
              },
              {
                step: 6,
                title: 'Treatment',
                description: 'Expert procedures with 24/7 support',
              },
              {
                step: 7,
                title: 'Recovery Support',
                description: 'Post-operative care and rehabilitation',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white dark:bg-slate-900 rounded-xl p-6 card-shadow">
                  <div className="w-12 h-12 bg-gradient-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {item.description}
                  </p>
                </div>

                {idx < 6 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Patient <span className="gradient-text">Testimonials</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Stories of successful treatment and life-changing experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for Your Medical Journey?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Get a free medical opinion from our expert specialists today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <a href="/contact">Get Free Opinion</a>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:text-blue-100"
              >
                <a href="https://wa.me/919912066373">WhatsApp Us</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
