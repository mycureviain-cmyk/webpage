'use client';

import React, { useState } from 'react';
import HeroSection from '@/app/components/HeroSection';
import FAQAccordion from '@/app/components/FAQAccordion';
import { FAQS, FAQ_CATEGORIES } from '@/config/faqs';

const FAQPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredFAQs = selectedCategory
    ? FAQS.filter((faq) => faq.category === selectedCategory)
    : FAQS;

  return (
    <>
      <HeroSection
        title="Frequently Asked Questions"
        subtitle="Get Answers"
        description="Find answers to common questions about our services, treatments, and medical tourism process."
        gradient
      />

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Filter by Category
            </h2>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === null
                    ? 'bg-gradient-primary text-white'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-300'
                }`}
              >
                All Questions
              </button>
              {FAQ_CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-primary text-white'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          <FAQAccordion items={filteredFAQs} />

          {/* CTA */}
          <div className="mt-16 bg-gradient-light dark:bg-slate-800 rounded-xl p-12 text-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Didn't find your answer?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              Contact our team directly for personalized assistance.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-hover transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQPage;
