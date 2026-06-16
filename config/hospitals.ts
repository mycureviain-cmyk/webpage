import { Hospital } from '@/types/index';

export const HOSPITALS: Hospital[] = [
  {
    id: 'apollo-hyderabad',
    name: 'Apollo Hospitals Hyderabad',
    location: 'Hyderabad, Telangana',
    description:
      'Multi-specialty hospital with world-class infrastructure and expert medical professionals.',
    accreditations: ['JCI', 'NABH', 'ISO 9001'],
    specialties: [
      'Cardiology',
      'Oncology',
      'Orthopedics',
      'Neurology',
      'IVF',
    ],
    image: '/images/hospitals/apollo.jpg',
    website: 'https://www.apollohospitals.com',
    phone: '+91-9876543210',
  },
  {
    id: 'continuum-hyderabad',
    name: 'Continuum Super Speciality Hospital',
    location: 'Hyderabad, Telangana',
    description:
      'Advanced medical facility with focus on critical care and specialized treatments.',
    accreditations: ['JCI', 'NABH'],
    specialties: [
      'Cardiology',
      'Neurology',
      'Trauma Care',
      'Orthopedics',
    ],
    image: '/images/hospitals/continuum.jpg',
    website: 'https://www.continuumhospitals.com',
    phone: '+91-9876543210',
  },
  {
    id: 'sunshine-hyderabad',
    name: 'Sunshine Hospitals',
    location: 'Hyderabad, Telangana',
    description:
      'Patient-centric facility with modern technology and compassionate care.',
    accreditations: ['JCI', 'ISO 9001', 'NABH'],
    specialties: [
      'Orthopedics',
      'Spine Surgery',
      'Joint Replacement',
      'Sports Medicine',
    ],
    image: '/images/hospitals/sunshine.jpg',
    website: 'https://www.sunshinehospitals.com',
    phone: '+91-9876543210',
  },
  {
    id: 'vasant-hospital',
    name: 'Vasant Superspeciality Hospital',
    location: 'Hyderabad, Telangana',
    description:
      'Comprehensive healthcare with emphasis on patient experience and outcomes.',
    accreditations: ['JCI', 'NABH'],
    specialties: [
      'Cardiology',
      'Oncology',
      'Liver Transplant',
      'Kidney Transplant',
    ],
    image: '/images/hospitals/vasant.jpg',
    website: 'https://www.vasanthospital.com',
    phone: '+91-9876543210',
  },
  {
    id: 'maxivision',
    name: 'MAXIVISION Eye Hospital',
    location: 'Hyderabad, Telangana',
    description:
      'Specialized eye care center with latest ophthalmic technologies.',
    accreditations: ['JCI', 'NABH'],
    specialties: ['Ophthalmology', 'Eye Surgery', 'Laser Vision Correction'],
    image: '/images/hospitals/maxivision.jpg',
    website: 'https://www.maxivisioneye.com',
    phone: '+91-9876543210',
  },
  {
    id: 'fertility-center',
    name: 'Nova IVF Fertility',
    location: 'Hyderabad, Telangana',
    description:
      'Leading fertility and reproductive health center with high success rates.',
    accreditations: ['NABH', 'ISO 9001'],
    specialties: ['IVF', 'Fertility Treatment', 'Reproductive Surgery'],
    image: '/images/hospitals/nova-ivf.jpg',
    website: 'https://www.novaivf.com',
    phone: '+91-9876543210',
  },
  {
    id: 'dental-smile',
    name: 'Smile Dental Hyderabad',
    location: 'Hyderabad, Telangana',
    description:
      'Advanced dental facility offering comprehensive oral health solutions.',
    accreditations: ['ISO 9001'],
    specialties: [
      'Implantology',
      'Cosmetic Dentistry',
      'Orthodontics',
      'Periodontology',
    ],
    image: '/images/hospitals/smile-dental.jpg',
    website: 'https://www.smiledental.com',
    phone: '+91-9876543210',
  },
  {
    id: 'ayurveda-wellness',
    name: 'Ayurveda & Wellness Center',
    location: 'Hyderabad, Telangana',
    description:
      'Traditional wellness center combining ancient Ayurvedic wisdom with modern healthcare.',
    accreditations: ['NABH'],
    specialties: [
      'Ayurveda',
      'Wellness',
      'Yoga',
      'Spa & Rejuvenation',
    ],
    image: '/images/hospitals/ayurveda.jpg',
    website: 'https://www.ayurvedawellness.com',
    phone: '+91-9876543210',
  },
  {
    id: 'cancer-institute',
    name: 'Indian Institute of Oncology',
    location: 'Hyderabad, Telangana',
    description:
      'Specialized cancer treatment center with world-class oncologists.',
    accreditations: ['JCI'],
    specialties: [
      'Oncology',
      'Cancer Surgery',
      'Chemotherapy',
      'Radiation Therapy',
    ],
    image: '/images/hospitals/cancer-institute.jpg',
    website: 'https://www.indianoncology.com',
    phone: '+91-9876543210',
  },
  {
    id: 'organ-transplant',
    name: 'Organ Transplant Institute',
    location: 'Hyderabad, Telangana',
    description:
      'Specialized facility for organ transplantation with excellent outcomes.',
    accreditations: ['JCI', 'NABH'],
    specialties: [
      'Kidney Transplant',
      'Liver Transplant',
      'Heart Transplant',
      'Corneal Transplant',
    ],
    image: '/images/hospitals/transplant.jpg',
    website: 'https://www.organtransplant.com',
    phone: '+91-9876543210',
  },
];

export const getHospitalById = (id: string) => {
  return HOSPITALS.find((h) => h.id === id);
};

export const getHospitalsBySpecialty = (specialty: string) => {
  return HOSPITALS.filter((h) => h.specialties.includes(specialty));
};
