'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  details?: string[];
  href?: string;
  index?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  details,
  href,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <div className="group glass-card lift glow-hover p-7 h-full flex flex-col">
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-teal-100 dark:from-primary-900/40 dark:to-teal-900/40 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow">
          {description}
        </p>

        {/* Details List */}
        {details && details.length > 0 && (
          <ul className="space-y-2 mb-6">
            {details.map((detail, idx) => (
              <li key={idx} className="flex items-start space-x-2 text-sm text-slate-700 dark:text-slate-300">
                <span className="text-teal-500 font-bold mt-1">✓</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Link */}
        {href && (
          <Link
            href={href}
            className="inline-flex items-center text-primary-600 dark:text-teal-400 font-semibold hover:underline transition-colors"
          >
            Learn More →
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default ServiceCard;
