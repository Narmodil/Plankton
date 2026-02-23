'use client';

import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { FeaturesSection } from '../sections/FeaturesSection';
import { AgentsSection } from '../sections/AgentsSection';
import { MarketplaceSection } from '../sections/MarketplaceSection';
import { RoadmapSection } from '../sections/RoadmapSection';
import { CTASection } from '../sections/CTASection';
import { FooterSection } from '../sections/FooterSection';
import { Cart } from '../components/Cart';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <AgentsSection />
      <MarketplaceSection />
      <RoadmapSection />
      <CTASection />
      <FooterSection />
      <Cart />
    </main>
  );
}
