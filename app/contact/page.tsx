'use client';

import React from 'react';
import HeroSection from '@/app/components/HeroSection';
import ContactForm from '@/app/components/ContactForm';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+91 99120 66373',
      link: 'tel:+919912066373',
    },
    {
      icon: FiMail,
      title: 'Email',
      value: 'info@mycurovia.com',
      link: 'mailto:info@mycurovia.com',
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Hyderabad, India',
      link: '#',
    },
    {
      icon: FiClock,
      title: 'Support',
      value: '24/7 Available',
      link: '#',
    },
  ];

  return (
    <>
      <HeroSection
        title="Get in Touch"
        subtitle="Contact Us"
        description="Have questions? Our team is ready to help you every step of the way."
        gradient
      />

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-6"
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                Contact Information
              </h2>

              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={idx}
                    href={info.link}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-light dark:bg-slate-800 hover:shadow-card transition-all"
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-semibold">
                        {info.title}
                      </p>
                      <p className="text-slate-900 dark:text-white font-semibold">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}

              {/* Social Media */}
              <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map(
                    (social) => (
                      <a
                        key={social}
                        href="#"
                        className="w-10 h-10 bg-primary-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-primary-600 dark:text-teal-400 hover:bg-primary-600 dark:hover:bg-primary-600 hover:text-white transition-colors"
                      >
                        {social[0]}
                      </a>
                    )
                  )}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-gradient-light dark:bg-slate-800 rounded-xl p-8"
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                Send us a Message
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-slate-100 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Visit Our Office
          </h2>
          <div className="w-full h-96 bg-slate-300 dark:bg-slate-700 rounded-xl overflow-hidden">
            <iframe
              title="MyCureVia Location"
              width="100%"
              height="100%"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.9865948625537!2d78.4744129!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91a2e1e1e1e1%3A0x1e1e1e1e1e1e1e1e!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
