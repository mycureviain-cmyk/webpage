export interface Specialty {
  id: string;
  name: string;
  description: string;
  icon: string;
  procedures: string[];
  benefits: string[];
  recoveryTime: string;
  slug: string;
  image?: string;
  conditions?: string[];
}

export interface Hospital {
  id: string;
  name: string;
  location: string;
  description: string;
  accreditations: string[];
  specialties: string[];
  image: string;
  website?: string;
  phone?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  treatment: string;
  review: string;
  image?: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  author: string;
  publishedAt: string;
  readTime: number;
  tags?: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ContactForm {
  name: string;
  email: string;
  country: string;
  phone: string;
  treatment: string;
  message: string;
  documents?: File[];
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Statistics {
  hospitals: number;
  specialists: number;
  patients: number;
  support: string;
}
