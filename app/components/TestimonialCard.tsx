'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { Testimonial } from '@/types/index';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="glass-card lift p-7 h-full relative">
        {/* Quote mark */}
        <span className="absolute top-4 right-6 text-6xl leading-none text-primary-200/60 dark:text-teal-500/20 font-serif select-none">
          &rdquo;
        </span>
        {/* Rating */}
        <div className="flex items-center space-x-1 mb-4 relative">
          {[...Array(testimonial.rating)].map((_, i) => (
            <FiStar
              key={i}
              className="fill-yellow-400 text-yellow-400"
              size={16}
            />
          ))}
        </div>

        {/* Review */}
        <p className="text-slate-700 dark:text-slate-300 italic mb-6">
          &quot;{testimonial.review}&quot;
        </p>

        {/* User Info */}
        <div className="flex items-center space-x-4">
          {testimonial.image && (
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover"
            />
          )}
          <div>
            <p className="font-semibold text-slate-900 dark:text-white">
              {testimonial.name}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {testimonial.country} • {testimonial.treatment}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
