'use client';
import Autoplay from 'embla-carousel-autoplay';
import * as React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

type AutoPlayCarouselProps = {
  children: React.ReactNode;
  showNavControls?: boolean;
};

const AutoPlayCarousel = ({ children, showNavControls = true }: AutoPlayCarouselProps) => {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>{children}</CarouselContent>
      {showNavControls && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  );
};

export default AutoPlayCarousel;
