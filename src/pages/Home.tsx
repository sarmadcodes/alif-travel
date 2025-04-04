import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturedTours } from '../components/FeaturedTours';
import { Testimonials } from '../components/Testimonials';

export function Home() {
  return (
    <main>
      <Hero />
      <FeaturedTours />
      <Testimonials />
    </main>
  );
}