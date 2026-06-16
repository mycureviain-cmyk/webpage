'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Specialty } from '@/types/index';

interface SpecialtyCardProps {
  specialty: Specialty;
  index?: number;
}

const SpecialtyCard: React.FC<SpecialtyCardProps> = ({ specialty, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Link href={`/treatments/${specialty.slug}`}>
        <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden card-shadow h-full cursor-pointer transition-all">
          {/* Icon Background */}
          <div className="bg-gradient-light dark:bg-slate-700 p-6 text-center">
            <div className="text-6xl mb-4">{specialty.icon}</div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              {specialty.name}
            </h3>

            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
              {specialty.description}
            </p>

            {/* Key Procedures */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-primary-600 dark:text-teal-400 mb-2">
                PROCEDURES
              </p>
              <div className="flex flex-wrap gap-2">
                {specialty.procedures.slice(0, 2).map((procedure, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-primary-100 dark:bg-slate-700 text-primary-700 dark:text-teal-300 px-2 py-1 rounded"
                  >
                    {procedure}
                  </span>
                ))}
                {specialty.procedures.length > 2 && (
                  <span className="text-xs bg-primary-100 dark:bg-slate-700 text-primary-700 dark:text-teal-300 px-2 py-1 rounded">
                    +{specialty.procedures.length - 2} more
                  </span>
                )}
              </div>
            </div>

            {/* Recovery Time */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
              <span className="text-xs text-slate-600 dark:text-slate-400">
                Recovery Time
              </span>
              <span className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                {specialty.recoveryTime}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default SpecialtyCard;
