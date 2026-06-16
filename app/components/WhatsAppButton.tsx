'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiMessageCircle } from 'react-icons/fi';

const WhatsAppButton = () => {
  const phoneNumber = '919876543210'; // Your WhatsApp business number
  const message = 'Hi MyCureVia! I would like to know more about your services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <FiMessageCircle size={24} />
    </motion.a>
  );
};

export default WhatsAppButton;
