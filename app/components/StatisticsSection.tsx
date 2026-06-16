'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CountUp from '@/app/components/CountUp';

interface StatisticItem {
  label: string;
  value: number;
  suffix?: string;
}

interface StatisticsSectionProps {
  stats: StatisticItem[];
  title?: string;
  description?: string;
}

const StatisticsSection: React.FC<StatisticsSectionProps> = ({
  stats,
  title,
  description,
}) => {
  return (
    <section className="py-12 bg-gradient-light dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {(title || description) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center mb-2">
                <span className="text-4xl md:text-5xl font-bold gradient-text">
                  <CountUp end={stat.value} />
                </span>
                {stat.suffix && (
                  <span className="text-2xl md:text-3xl font-bold gradient-text ml-1">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <p className="text-slate-600 dark:text-slate-300 font-semibold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
