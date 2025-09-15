import { Button } from '@/components/ui/button'
import React from 'react'
import { FeaturesSection, Footer, Header, HeroSection, StatsSection } from '../components';

const Home = () => {


  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  )
}

export default Home