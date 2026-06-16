// Utility functions

export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

export const formatCurrency = (amount: number, currency: string = 'INR'): string => {
  const currencySymbols: Record<string, string> = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    INR: '₹',
    AED: 'د.إ',
    SAR: 'ر.س',
  };

  const symbol = currencySymbols[currency] || currency;
  return `${symbol} ${amount.toLocaleString()}`;
};

export const formatDate = (date: string | Date): string => {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const getReadingTime = (text: string): number => {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
  return phoneRegex.test(phone);
};

export const truncateText = (text: string, length: number): string => {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
};

export const generateMetadata = (
  title: string,
  description: string,
  path: string = '/'
) => {
  return {
    title: `${title} | MyCureVia`,
    description,
    openGraph: {
      title: `${title} | MyCureVia`,
      description,
      url: `https://mycurovia.com${path}`,
      type: 'website',
    },
  };
};
