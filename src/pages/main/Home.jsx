import React from 'react'
import HeroSection from '../../components/ui/Home/HeroSection'
import Recipe from '../../components/ui/Home/Recipe'
import Services from '../../components/ui/Home/Services'
import Showcase from '../../components/ui/Home/Showcase'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Recipe/>
      <Services />
      <Showcase />
    </div>
  )
}
