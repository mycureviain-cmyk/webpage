'use client';

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import {
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
} from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Treatments', href: '/treatments' },
        { label: 'Hospitals', href: '/hospitals' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Process', href: '/process' },
        { label: 'Testimonials', href: '/testimonials' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact Us', href: '/contact' },
        { label: 'WhatsApp', href: 'https://wa.me/919912066373' },
        { label: 'Live Chat', href: '#' },
        { label: 'Patient Portal', href: '/portal' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Cookie Policy', href: '/cookies' },
        { label: 'Disclaimer', href: '/disclaimer' },
      ],
    },
  ];

  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="inline-flex bg-white rounded-lg px-3 py-2">
                <Logo height={40} priority={false} />
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Your path to better healthcare. World-class medical tourism services.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/mycurovia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary-400 transition-colors"
              >
                <FiFacebook size={20} />
              </a>
              <a
                href="https://twitter.com/mycurovia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary-400 transition-colors"
              >
                <FiTwitter size={20} />
              </a>
              <a
                href="https://linkedin.com/company/mycurovia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary-400 transition-colors"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="https://instagram.com/mycurovia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary-400 transition-colors"
              >
                <FiInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('http') ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info Banner */}
        <div className="py-8 border-t border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <FiPhone className="text-white" />
            </div>
            <div>
              <p className="text-sm text-slate-400">Phone</p>
              <p className="text-white font-semibold">+91 99120 66373</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <FiMail className="text-white" />
            </div>
            <div>
              <p className="text-sm text-slate-400">Email</p>
              <p className="text-white font-semibold">info@mycurovia.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <FiMapPin className="text-white" />
            </div>
            <div>
              <p className="text-sm text-slate-400">Location</p>
              <p className="text-white font-semibold">Hyderabad, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm text-center md:text-left">
            © {currentYear} MyCureVia. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm mt-4 md:mt-0">
            Licensed and accredited by relevant medical boards
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
