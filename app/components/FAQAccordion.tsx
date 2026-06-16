'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { FAQItem } from '@/types/index';

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="w-full bg-white dark:bg-slate-800 rounded-lg p-4 flex items-center justify-between card-shadow transition-all"
          >
            <span className="text-left font-semibold text-slate-900 dark:text-white">
              {item.question}
            </span>
            <motion.div
              animate={{ rotate: openId === item.id ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FiChevronDown className="text-primary-600 dark:text-teal-400" />
            </motion.div>
          </button>

          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: openId === item.id ? 1 : 0,
              height: openId === item.id ? 'auto' : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4 mt-2">
              <p className="text-slate-700 dark:text-slate-300">
                {item.answer}
              </p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default FAQAccordion;
