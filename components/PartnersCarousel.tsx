"use client";

import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

interface Partner {
  name: string;
  logo: string;
  url: string;
  className?: string;
  whiteLogo?: boolean;
}

interface PartnersCarouselProps {
  partners: Partner[];
}

export const PartnersCarousel: React.FC<PartnersCarouselProps> = ({ partners }) => {
  // Multiply partners significantly to ensure smooth infinite scroll
  // even on very wide screens or with few partners.
  const displayedPartners = [...partners, ...partners, ...partners, ...partners, ...partners, ...partners];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [
      AutoScroll({ 
        playOnInit: true, 
        stopOnInteraction: false, 
        stopOnMouseEnter: false,
        speed: 2 
      })
    ]
  );
  
  // Ensure playing on mount/update
  useEffect(() => {
    if (emblaApi) {
      const autoScroll = emblaApi.plugins().autoScroll;
      if (autoScroll && !autoScroll.isPlaying()) {
        autoScroll.play();
      }
    }
  }, [emblaApi]);

  return (
    <div className="w-full relative group">
      {/* Gradient masks for fading edges */}
      <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />

      <div className="overflow-hidden py-8 cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {displayedPartners.map((partner, index) => (
            <div key={`${partner.name}-${index}`} className="flex-[0_0_auto] min-w-0 px-8 md:px-14 flex items-center justify-center relative z-20">
              <a 
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform duration-300 hover:scale-110 select-none"
                draggable={false}
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className={`w-auto object-contain max-w-[200px] md:max-w-[250px] ${partner.className || 'h-16'} ${partner.whiteLogo ? 'bg-neutral-800 dark:bg-transparent p-2 rounded-full shadow-sm' : ''}`}
                  style={{ imageRendering: 'high-quality' }}
                  draggable={false}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
