import { FAQItem } from '@/types/index';

export const FAQS: FAQItem[] = [
  {
    id: 'visa-1',
    question: 'How do I get a medical visa to India?',
    answer:
      'We provide complete visa assistance including invitation letters, documentation support, and embassy guidance. Most medical visas are processed within 7-14 days.',
    category: 'Visa & Travel',
  },
  {
    id: 'cost-1',
    question: 'How much does treatment typically cost?',
    answer:
      'Costs vary depending on the treatment. We provide detailed cost estimates after medical review. Generally, treatments in India cost 50-70% less than Western countries with the same quality.',
    category: 'Costs',
  },
  {
    id: 'hospitals-1',
    question: 'Which hospitals do you work with?',
    answer:
      'We partner with 10+ leading JCI-accredited hospitals in Hyderabad specializing in cardiology, oncology, orthopedics, neurology, and more.',
    category: 'Hospitals',
  },
  {
    id: 'stay-1',
    question: 'How long should I stay in India?',
    answer:
      'It depends on your treatment. Typically, patients stay 2-4 weeks for treatment and recovery. We arrange accommodation and provide guidance on the timeline.',
    category: 'Travel',
  },
  {
    id: 'family-1',
    question: 'Can family members accompany me?',
    answer:
      'Absolutely! We encourage family support. We assist with accommodation, meals, and activities for your family members during your stay.',
    category: 'Travel',
  },
  {
    id: 'language-1',
    question: 'What languages are supported?',
    answer:
      'We provide support in 7 languages: English, Arabic, French, Russian, Bengali, Nepali, and Urdu through professional interpreters.',
    category: 'Support',
  },
  {
    id: 'transfer-1',
    question: 'Do you provide airport transfers?',
    answer:
      'Yes, we provide complimentary airport transfers for all our patients. Our team will meet you at the airport with a nameplate.',
    category: 'Travel',
  },
  {
    id: 'followup-1',
    question: 'How are follow-up consultations handled?',
    answer:
      'We provide telemedicine follow-up consultations for 6 months post-treatment at no additional cost. Video consultations with your doctor are arranged as needed.',
    category: 'Support',
  },
  {
    id: 'payment-1',
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards, bank transfers, wire transfers, and online payment gateways. Payment plans are available for large procedures.',
    category: 'Costs',
  },
  {
    id: 'insurance-1',
    question: 'Do you work with insurance companies?',
    answer:
      'Yes, we assist with insurance verifications and claims. We work with major international insurance providers to facilitate payments.',
    category: 'Costs',
  },
  {
    id: 'documents-1',
    question: 'What documents do I need to submit?',
    answer:
      'Medical reports, test results, and imaging (CT, MRI, X-rays). You can upload them securely through our portal or email them to us.',
    category: 'Process',
  },
  {
    id: 'opinion-1',
    question: 'How long does the free medical opinion take?',
    answer:
      'You will receive a preliminary medical opinion within 48 hours. Detailed assessment and treatment plan are provided within 5-7 business days.',
    category: 'Process',
  },
  {
    id: 'emergency-1',
    question: 'What happens if there is an emergency?',
    answer:
      'Our 24/7 support team will arrange immediate medical attention at our partner hospitals. We have emergency protocols in place for all situations.',
    category: 'Support',
  },
  {
    id: 'record-1',
    question: 'Can I get copies of my medical records?',
    answer:
      'Yes, all medical records will be provided to you on discharge. You can request digital copies anytime through our patient portal.',
    category: 'Support',
  },
  {
    id: 'quality-1',
    question: 'How do you ensure quality of care?',
    answer:
      'All our partner hospitals are JCI-accredited. We work with internationally trained specialists and follow strict quality protocols.',
    category: 'Quality',
  },
];

export const getFAQsByCategory = (category: string) => {
  return FAQS.filter((faq) => faq.category === category);
};

export const FAQ_CATEGORIES = [
  'Visa & Travel',
  'Costs',
  'Hospitals',
  'Travel',
  'Support',
  'Process',
  'Quality',
];
