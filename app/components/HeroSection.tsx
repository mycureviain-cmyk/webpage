'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description?: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  backgroundImage?: string;
  gradient?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  gradient = true,
}) => {
  return (
    <section
      className={`relative w-full min-h-screen flex items-center justify-center overflow-hidden ${
        gradient ? 'bg-gradient-light' : 'bg-white dark:bg-slate-900'
      }`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/40" />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-slate-800 rounded-full px-4 py-2 text-primary-600 dark:text-teal-400 text-sm font-semibold">
              <span className="w-2 h-2 bg-primary-600 dark:bg-teal-400 rounded-full animate-pulse" />
              {subtitle}
            </div>
          </motion.div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            <span className="gradient-text">{title.split(' ').slice(0, 3).join(' ')}</span>
            {title.split(' ').length > 3 && (
              <>
                {' '}
                {title.split(' ').slice(3).join(' ')}
              </>
            )}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
              {description}
            </p>
          )}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {primaryCTA && (
              <Button size="lg">
                <a href={primaryCTA.href}>{primaryCTA.label}</a>
              </Button>
            )}
            {secondaryCTA && (
              <Button variant="secondary" size="lg">
                <a href={secondaryCTA.href}>{secondaryCTA.label}</a>
              </Button>
            )}
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-primary-200 to-teal-200 dark:from-primary-900 dark:to-teal-900 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-teal-200 to-primary-200 dark:from-teal-900 dark:to-primary-900 rounded-full opacity-20 blur-3xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;
