'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ContactForm as ContactFormType } from '@/types/index';
import Button from './Button';
import { COUNTRIES, TREATMENT_CATEGORIES } from '@/config/constants';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormType>();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: ContactFormType) => {
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSuccess(true);
      reset();
      toast.success('Thank you! We will contact you soon.');
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          placeholder="John Doe"
          {...register('name', { required: 'Name is required' })}
          className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-teal-400 transition-all"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          placeholder="john@example.com"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-teal-400 transition-all"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Country */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
          Country *
        </label>
        <select
          {...register('country', { required: 'Country is required' })}
          className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-teal-400 transition-all"
        >
          <option value="">Select your country</option>
          {COUNTRIES.map((country) => (
            <option key={country.code} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
        {errors.country && (
          <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
          WhatsApp Number *
        </label>
        <input
          type="tel"
          placeholder="+1 (555) 000-0000"
          {...register('phone', { required: 'Phone number is required' })}
          className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-teal-400 transition-all"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      {/* Treatment */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
          Treatment Required *
        </label>
        <select
          {...register('treatment', { required: 'Treatment is required' })}
          className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-teal-400 transition-all"
        >
          <option value="">Select treatment</option>
          {TREATMENT_CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.treatment && (
          <p className="text-red-500 text-sm mt-1">{errors.treatment.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
          Message
        </label>
        <textarea
          placeholder="Tell us more about your condition..."
          rows={5}
          {...register('message')}
          className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-teal-400 transition-all resize-none"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        isLoading={isSubmitting}
        fullWidth
        size="lg"
      >
        {isSuccess ? '✓ Message Sent!' : 'Send My Request'}
      </Button>

      <p className="text-xs text-slate-600 dark:text-slate-400 text-center">
        We respect your privacy. Your information will not be shared.
      </p>
    </form>
  );
};

export default ContactForm;
