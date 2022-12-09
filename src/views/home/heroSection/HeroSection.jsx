//Libraries
import React from 'react'
//Components
import GlitchText from '../../../components/glitchText/GlitchText'
import Scanlines from '../../../components/scanlines/Scanlines'
import GlitchImage from '../../../components/glitchImage/GlitchImage'
//Style
import style from './HeroSection.module.css'
//Icons
import linkedin from '../../../assets/icons/linkedin-icon-2.svg'
import codepen from '../../../assets/icons/codepen-icon.svg'
import github from '../../../assets/icons/github-icon-2.svg'

function HeroSection() {
  return (
    <section className={ style.heroSectionContainer }>
        <div className={ style.textContainer }>
            <h1 className={ style.title }><GlitchText>JUAN PABLO SPIATTA</GlitchText></h1>
            <h2 className={ style.subtitle }><GlitchText>Frontend Developer</GlitchText></h2>
            <Scanlines />
        </div>
        <ul className={ style.networksContainer }>
            <li className={ style.networks }><GlitchImage src={codepen} /></li>
            <li className={ style.networks }><GlitchImage src={github} /></li>
            <li className={ style.networks }><GlitchImage src={linkedin} /></li>
        </ul>
    </section>
  )
}

export default HeroSection