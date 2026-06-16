'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import Button from './Button';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const menuItems = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Treatments',
      href: '/treatments',
      submenu: [
        { label: 'Cardiology', href: '/treatments/cardiology' },
        { label: 'Orthopedics', href: '/treatments/orthopedics' },
        { label: 'Oncology', href: '/treatments/oncology' },
        { label: 'IVF & Fertility', href: '/treatments/ivf-fertility' },
        { label: 'View All', href: '/treatments' },
      ],
    },
    {
      label: 'Services',
      href: '/services',
    },
    {
      label: 'Hospitals',
      href: '/hospitals',
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Blog',
      href: '/blog',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-soft'
          : 'bg-white/60 dark:bg-slate-950/40 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Logo height={44} />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center px-4 py-2 text-sm font-medium rounded-full text-slate-700 dark:text-slate-300 hover:text-primary-700 dark:hover:text-teal-300 hover:bg-primary-50/80 dark:hover:bg-white/5 transition-all"
                >
                  {item.label}
                  {item.submenu && <FiChevronDown className="ml-1 w-4 h-4" />}
                </Link>

                {/* Desktop Dropdown */}
                {item.submenu && (
                  <div className="absolute left-0 pt-3 w-52 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                    <div className="glass-card shadow-card p-2">
                      {item.submenu.map((submenu) => (
                        <Link
                          key={submenu.label}
                          href={submenu.href}
                          className="block px-4 py-2.5 text-sm rounded-xl text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-white/5 hover:text-primary-700 dark:hover:text-teal-300 transition-colors"
                        >
                          {submenu.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="secondary" size="sm">
              Sign In
            </Button>
            <Button size="sm">Get Opinion</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 border-t border-slate-200 dark:border-slate-700"
          >
            {menuItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => item.submenu && toggleDropdown(item.label)}
                  className="w-full text-left px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex justify-between items-center"
                >
                  <Link href={item.href}>{item.label}</Link>
                  {item.submenu && (
                    <FiChevronDown
                      className={`transform transition-transform ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </button>

                {/* Mobile Submenu */}
                {item.submenu && openDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-slate-50 dark:bg-slate-800"
                  >
                    {item.submenu.map((submenu) => (
                      <Link
                        key={submenu.label}
                        href={submenu.href}
                        className="block px-8 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-teal-400"
                      >
                        {submenu.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}

            <div className="mt-4 px-4 space-y-2">
              <Button variant="secondary" size="sm" fullWidth>
                Sign In
              </Button>
              <Button size="sm" fullWidth>
                Get Opinion
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
