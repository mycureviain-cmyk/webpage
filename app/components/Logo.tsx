'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  /** Height of the logo in pixels. Width scales automatically. */
  height?: number;
  /** Whether the logo links to the homepage. */
  href?: string | null;
  className?: string;
  priority?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  height = 44,
  href = '/',
  className = '',
  priority = true,
}) => {
  // Swap to "/logo.png" once the raster brand logo is added to /public.
  const LOGO_SRC = '/logo.svg';
  const ASPECT_RATIO = 3.5;

  const image = (
    <Image
      src={LOGO_SRC}
      alt="MyCureVia — Your Path to Better Healthcare"
      width={Math.round(height * ASPECT_RATIO)}
      height={height}
      priority={priority}
      className={`w-auto object-contain ${className}`}
      style={{ height }}
    />
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center" aria-label="MyCureVia home">
        {image}
      </Link>
    );
  }

  return image;
};

export default Logo;
