import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'MyCureVia - Medical Tourism in Hyderabad, India',
  description:
    'Premium medical tourism platform. Access world-class healthcare in India with complete coordination, visa assistance, accommodation support, and 24/7 care.',
  keywords: [
    'medical tourism',
    'healthcare in India',
    'treatment in Hyderabad',
    'affordable surgery',
    'international patient services',
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'MyCureVia - Medical Tourism in Hyderabad, India',
    description: 'Your path to better healthcare through medical tourism',
    type: 'website',
    locale: 'en_US',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0ea5e9',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
