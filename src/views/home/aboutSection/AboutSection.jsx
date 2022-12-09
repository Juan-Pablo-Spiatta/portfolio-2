import React from 'react'
//Components
import GlitchText from '../../../components/glitchText/GlitchText'
//Style
import style from './AboutSection.module.css'

function AboutSection() {
  return (
    <section className={ style.aboutSectionContainer }>
        <h2><GlitchText>Sobre mi</GlitchText></h2>
    </section>
  )
}

export default AboutSection