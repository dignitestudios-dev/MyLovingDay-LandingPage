import Hero from '@/components/Hero';
import OverviewFeatures from '@/components/OverviewFeatures';
import VideoWalkthrough from '@/components/VideoWalkthrough';
import WhyChooseUs from '@/components/WhyChooseUs';
import AppScreensCarousel from '@/components/AppScreensCarousel';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import FaqAccordion from '@/components/FaqAccordion';
import ComingSoonCta from '@/components/ComingSoonCta';

export default function Home() {
  return (
    <>
      <Hero />
      <OverviewFeatures />
      <VideoWalkthrough />
      <WhyChooseUs />
      <AppScreensCarousel />
      <TestimonialsCarousel />
      <FaqAccordion />
      <ComingSoonCta />
    </>
  );
}

