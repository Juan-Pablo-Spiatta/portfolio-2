//Libraries
import React from 'react'
//Sections
import HeroSection from './heroSection/HeroSection'
import AboutSection from './aboutSection/AboutSection'
//Style
import style from './Home.module.css'

function Home() {
  return (
    <main className={ style.homeContainer }>
        <HeroSection />
        <AboutSection />
    </main>
  )
}

export default Home