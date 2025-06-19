import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Welcome } from '../components/sections/Welcome';
import { Features } from '../components/sections/Features';
import { InsuranceProducts } from '../components/sections/InsuranceProducts';
import { Testimonials } from '../components/sections/Testimonials';
import { Partners } from '../components/sections/Partners';
import { ContactForm } from '../components/ContactForm';

export function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Welcome />
      <Features />
      <InsuranceProducts />
      <Partners />
      <Testimonials />
      <ContactForm />
    </div>
  );
}

