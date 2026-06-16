'use client';

import React, { useState } from 'react';
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

/**
 * Renders the brand logo. Prefers the raster logo at /public/logo.png.
 * If that file is not present yet, it falls back to the branded SVG
 * placeholder automatically — so dropping in logo.png needs no code change.
 */
const Logo: React.FC<LogoProps> = ({
  height = 44,
  href = '/',
  className = '',
  priority = true,
}) => {
  // Prefers your raster brand logo at /public/logo.png. Until that file
  // exists, the onError handler falls back to the on-brand SVG placeholder,
  // so there is never a broken image. Drop in logo.png and it appears
  // automatically with no code change.
  const [src, setSrc] = useState('/logo.png');
  const aspectRatio = src.endsWith('.svg') ? 3.5 : 2;
  const width = Math.round(height * aspectRatio);

  const image = (
    <Image
      src={src}
      alt="MyCureVia — Your Path to Better Healthcare"
      width={width}
      height={height}
      priority={priority}
      onError={() => setSrc('/logo.svg')}
      className={`block object-contain ${className}`}
      // Explicit px dimensions + maxWidth:none override Tailwind Preflight's
      // `img { max-width:100%; height:auto }`, which otherwise collapses the
      // logo to 0 inside the shrink-wrapping inline-flex link.
      style={{ width: `${width}px`, height: `${height}px`, maxWidth: 'none' }}
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
