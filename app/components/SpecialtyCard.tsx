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
        <div className="group glass-card lift glow-hover overflow-hidden h-full cursor-pointer">
          {/* Icon Background */}
          <div className="relative bg-gradient-to-br from-primary-50 to-teal-50 dark:from-slate-800 dark:to-slate-800/50 p-8 text-center overflow-hidden">
            <div className="absolute -top-8 -right-8 w-28 h-28 bg-gradient-to-br from-primary-200/40 to-teal-200/40 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
            <div className="relative text-6xl transition-transform duration-300 group-hover:scale-110">
              {specialty.icon}
            </div>
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
                    className="text-xs bg-primary-100/70 dark:bg-white/5 text-primary-700 dark:text-teal-300 px-2.5 py-1 rounded-full"
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
