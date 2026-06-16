# MyCureVia - Premium Medical Tourism Platform

A modern, responsive web application for medical tourism in Hyderabad, India. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🌟 Features

### Core Pages
- **Home** - Comprehensive landing page with hero section, statistics, services, specialties, and testimonials
- **Treatments** - Browse all medical specialties with detailed information
- **Treatment Details** - Individual pages for each specialty with procedures, benefits, and FAQs
- **Services** - Complete list of support services offered
- **Hospitals** - Partner hospitals with filtering by specialty
- **About** - Company story, mission, vision, and values
- **Contact** - Contact form with multiple communication channels
- **FAQ** - Searchable FAQ section with category filtering
- **Blog** - Article listing with category filtering

### Features
- ✨ Fully responsive design (mobile-first)
- 🌙 Dark mode support
- 🎨 Beautiful animations with Framer Motion
- 📱 Mobile-optimized navigation
- 🔍 SEO optimized with metadata
- 📧 Contact forms with validation
- 🌐 Multi-language ready
- ♿ Accessibility compliant
- 📊 Statistics with animated counters
- 💬 WhatsApp integration
- 🎯 Modern UI with gradient accents

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/mycurovia.git
cd mycurovia
```

2. Install dependencies
```bash
npm install
```

3. Create environment file
```bash
cp .env.example .env.local
```

4. Run development server
```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

## 📁 Project Structure

```
mycurovia/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── Button.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── SpecialtyCard.tsx
│   │   ├── ContactForm.tsx
│   │   ├── FAQAccordion.tsx
│   │   ├── TestimonialCard.tsx
│   │   └── ...
│   ├── page.tsx             # Home page
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   ├── treatments/          # Treatment pages
│   ├── services/            # Services page
│   ├── hospitals/           # Hospitals page
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── faq/                # FAQ page
│   └── blog/               # Blog listing
├── config/                  # Configuration & constants
│   ├── constants.ts
│   ├── specialties.ts
│   ├── hospitals.ts
│   ├── services.ts
│   ├── faqs.ts
│   └── ...
├── types/                   # TypeScript interfaces
│   └── index.ts
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  primary: { /* Blue */ },
  teal: { /* Teal */ },
}
```

### Content
- **Specialties**: Edit `config/specialties.ts`
- **Hospitals**: Edit `config/hospitals.ts`
- **Services**: Edit `config/services.ts`
- **FAQs**: Edit `config/faqs.ts`
- **Constants**: Edit `config/constants.ts`

### Components
All reusable components are in `app/components/`. Modify them to match your design.

## 📱 Responsive Design

The website is fully responsive:
- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+

## 🌙 Dark Mode

Dark mode is automatically supported via Tailwind CSS. Add `dark:` prefix to any class for dark mode styling.

## 🔍 SEO

All pages include:
- Meta titles and descriptions
- Open Graph tags
- Structured data ready
- Sitemap ready
- Robots.txt ready

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel login
vercel
```

### Docker
```bash
docker build -t mycurovia .
docker run -p 3000:3000 mycurovia
```

### Manual Deployment
```bash
npm run build
npm start
```

## 📦 Dependencies

- **Next.js**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS
- **Framer Motion**: Animations
- **React Hook Form**: Form handling
- **React Icons**: Icon library
- **Axios**: HTTP client
- **Zustand**: State management
- **React Hot Toast**: Notifications

## 🛠 Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

## 📝 Content Management

### Adding a New Specialty
1. Edit `config/specialties.ts`
2. Add new specialty object with required fields
3. Page will automatically be generated at `/treatments/[slug]`

### Adding a New Hospital
1. Edit `config/hospitals.ts`
2. Add hospital object with details
3. Hospital appears automatically on `/hospitals` page

### Adding FAQ Items
1. Edit `config/faqs.ts`
2. Add FAQ object with question/answer
3. Appears on `/faq` with category filtering

## 🔐 Security

- No sensitive data in client-side code
- Environment variables for API keys
- HTTPS recommended for production
- CSRF protection ready
- XSS prevention with React
- SQL injection prevention (no DB calls in demo)

## 📊 Performance

- Next.js image optimization
- Code splitting and lazy loading
- Minified CSS and JavaScript
- Optimized animations
- Fast load times (<2s)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For questions or support:
- Email: info@mycurovia.com
- Phone: +91 9876543210
- WhatsApp: +91 9876543210

## 🎯 Roadmap

- [ ] Multi-language support (i18n)
- [ ] Patient portal with login
- [ ] AI chatbot integration
- [ ] Video consultations
- [ ] Payment integration
- [ ] Appointment booking system
- [ ] CRM integration
- [ ] Analytics dashboard
- [ ] Mobile app (React Native)

## 🙏 Acknowledgments

- Built with modern web technologies
- Designed for user experience
- Optimized for conversions
- SEO-friendly architecture

---

**Made with ❤️ for better healthcare**
