import { Service } from '@/types/index';

export const SERVICES: Service[] = [
  {
    id: 'treatment-coordination',
    title: 'Treatment Coordination',
    description: 'Complete medical assessment and personalized treatment planning',
    icon: '📋',
    details: [
      'Case review by expert doctors',
      'Specialist recommendations',
      'Cost estimation',
      'Second opinions',
    ],
  },
  {
    id: 'hospital-selection',
    title: 'Hospital Selection',
    description: 'Matching you with the best hospitals for your specific needs',
    icon: '🏥',
    details: [
      'Specialty matching',
      'Hospital comparison',
      'Quality assessment',
      'Facility tours',
    ],
  },
  {
    id: 'appointment-booking',
    title: 'Appointment Booking',
    description: 'Seamless scheduling with top doctors',
    icon: '📅',
    details: [
      'Doctor availability',
      'Appointment scheduling',
      'Calendar integration',
      'Reminder notifications',
    ],
  },
  {
    id: 'visa-assistance',
    title: 'Medical Visa Assistance',
    description: 'Complete support for medical visa applications',
    icon: '📄',
    details: [
      'Visa documentation',
      'Embassy guidance',
      'Fast-track processing',
      'Invitation letters',
    ],
  },
  {
    id: 'airport-transfers',
    title: 'Airport Pickup & Drop',
    description: 'Comfortable transportation services',
    icon: '🚗',
    details: [
      'Airport transfers',
      'Hotel transportation',
      'Hospital transfers',
      '24/7 availability',
    ],
  },
  {
    id: 'accommodation',
    title: 'Accommodation Support',
    description: 'Budget-friendly to premium housing options',
    icon: '🏨',
    details: [
      'Hotel booking',
      'Service apartments',
      'Guest houses',
      'Furnished accommodation',
    ],
  },
  {
    id: 'interpreter',
    title: 'Multilingual Interpreter Services',
    description: 'Professional translation in multiple languages',
    icon: '🗣️',
    details: [
      'Medical interpreting',
      'Document translation',
      'Daily assistance',
      '7 languages available',
    ],
  },
  {
    id: 'concierge',
    title: 'Dedicated Patient Concierge',
    description: '24/7 personal support throughout your journey',
    icon: '🎯',
    details: [
      'Personal assistant',
      '24/7 availability',
      'Daily check-ins',
      'Emergency support',
    ],
  },
  {
    id: 'insurance',
    title: 'Insurance Assistance',
    description: 'Help with insurance claims and coverage',
    icon: '💳',
    details: [
      'Insurance verification',
      'Claim assistance',
      'Document processing',
      'Billing support',
    ],
  },
  {
    id: 'pharmacy',
    title: 'Pharmacy Support',
    description: 'Medications at the best prices',
    icon: '💊',
    details: [
      'Prescription fulfillment',
      'Medicine delivery',
      'Cost optimization',
      'Availability guarantee',
    ],
  },
  {
    id: 'telemedicine',
    title: 'Telemedicine Follow-Up',
    description: 'Post-treatment online consultations',
    icon: '💻',
    details: [
      'Video consultations',
      'Online prescriptions',
      'Progress monitoring',
      'Emergency access',
    ],
  },
  {
    id: 'rehabilitation',
    title: 'Rehabilitation Support',
    description: 'Physical therapy and recovery services',
    icon: '💪',
    details: [
      'Physical therapy',
      'Home exercises',
      'Progress tracking',
      'Recovery guidance',
    ],
  },
];

export const getServiceById = (id: string) => {
  return SERVICES.find((s) => s.id === id);
};
