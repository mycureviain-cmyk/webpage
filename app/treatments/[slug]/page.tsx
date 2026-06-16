'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getSpecialtyBySlug } from '@/config/specialties';
import Button from '@/app/components/Button';
import HeroSection from '@/app/components/HeroSection';
import FAQAccordion from '@/app/components/FAQAccordion';
import { FAQS } from '@/config/faqs';
import { FiCheck, FiArrowRight } from 'react-icons/fi';

const TreatmentDetailPage = () => {
  const params = useParams();
  const slug = params.slug as string;
  const specialty = getSpecialtyBySlug(slug);

  if (!specialty) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Treatment Not Found
          </h1>
          <p className="text-slate-600 dark:text-slate-300 mb-8">
            The treatment you're looking for doesn't exist.
          </p>
          <Link href="/treatments">
            <Button>Back to Treatments</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <HeroSection
        title={specialty.name}
        subtitle="Expert Specialists"
        description={specialty.description}
        primaryCTA={{ label: 'Get Free Consultation', href: '/contact' }}
        gradient
      />

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  About {specialty.name}
                </h2>
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                  {specialty.description}
                </p>
              </motion.div>

              {/* Conditions Treated */}
              {specialty.conditions && specialty.conditions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-12"
                >
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                    Conditions We Treat
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {specialty.conditions.map((condition, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-3 bg-primary-50 dark:bg-slate-800 rounded-lg p-4"
                      >
                        <FiCheck className="text-primary-600 dark:text-teal-400 flex-shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300">
                          {condition}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Procedures */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Available Procedures
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {specialty.procedures.map((procedure, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-light dark:bg-slate-800 rounded-lg p-4 flex items-center space-x-3"
                    >
                      <span className="text-2xl">{specialty.icon}</span>
                      <span className="text-slate-900 dark:text-white font-semibold">
                        {procedure}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Why Choose Our {specialty.name} Services
                </h2>
                <div className="space-y-4">
                  {specialty.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-4 bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-slate-700 flex items-center justify-center flex-shrink-0 mt-1">
                        <FiCheck className="text-primary-600 dark:text-teal-400" />
                      </div>
                      <p className="text-slate-700 dark:text-slate-300">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Recovery Time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-light dark:bg-slate-800 rounded-xl p-8 mb-12"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Recovery Time
                </h3>
                <p className="text-3xl font-bold gradient-text">
                  {specialty.recoveryTime}
                </p>
                <p className="text-slate-600 dark:text-slate-400 mt-2">
                  Typical recovery period (varies based on individual factors)
                </p>
              </motion.div>

              {/* FAQ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Frequently Asked Questions
                </h2>
                <FAQAccordion items={FAQS.slice(0, 5)} />
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <div className="bg-gradient-light dark:bg-slate-800 rounded-xl p-8 sticky top-24">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Get Started
                </h3>

                <div className="space-y-4 mb-8">
                  <p className="text-slate-700 dark:text-slate-300">
                    Take the first step towards better health with our expert
                    specialists.
                  </p>

                  <div className="bg-white dark:bg-slate-900 rounded-lg p-4 space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="text-lg">✓</span>
                      <span>Free medical consultation</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="text-lg">✓</span>
                      <span>Personalized treatment plan</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="text-lg">✓</span>
                      <span>Competitive pricing</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="text-lg">✓</span>
                      <span>Complete support</span>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  fullWidth
                  className="mb-3 flex items-center justify-center"
                >
                  <a href="/contact" className="flex items-center justify-center">
                    Request Consultation
                    <FiArrowRight className="ml-2" />
                  </a>
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  fullWidth
                >
                  <a href="https://wa.me/919876543210">WhatsApp</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TreatmentDetailPage;
