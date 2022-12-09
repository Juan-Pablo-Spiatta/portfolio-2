//Libraries
import React from 'react'
//Style
import style from './GlitchImage.module.css'

function GlitchImage({ src }) {
  return (
    <div className={ style.imagesContainer }>
        <img className={ style.image1 } src={src} alt="" />
        <img className={ style.image2 } src={src} alt="" />
        <img className={ style.image3 } src={src} alt="" />
    </div>
  )
}

export default GlitchImage