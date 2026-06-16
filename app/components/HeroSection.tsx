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
      className={`relative w-full min-h-[88vh] flex items-center justify-center overflow-hidden ${
        gradient ? 'mesh-bg' : 'bg-white dark:bg-slate-950'
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

      {/* Grid overlay */}
      {!backgroundImage && (
        <div className="absolute inset-0 grid-overlay [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
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
            <div className="badge glass text-primary-700 dark:text-teal-300">
              <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
              {subtitle}
            </div>
          </motion.div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.08]">
            <span className="gradient-text-animated">{title.split(' ').slice(0, 3).join(' ')}</span>
            {title.split(' ').length > 3 && (
              <>
                {' '}
                {title.split(' ').slice(3).join(' ')}
              </>
            )}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
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

      </div>

      {/* Floating ambient blobs */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-gradient-to-br from-primary-300 to-teal-300 dark:from-primary-700 dark:to-teal-700 rounded-full opacity-30 blur-3xl animate-blob pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-teal-300 to-primary-300 dark:from-teal-700 dark:to-primary-700 rounded-full opacity-30 blur-3xl animate-blob animation-delay-2000 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-br from-sky-200 to-teal-200 dark:from-sky-800 dark:to-teal-800 rounded-full opacity-20 blur-3xl animate-blob animation-delay-4000 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
