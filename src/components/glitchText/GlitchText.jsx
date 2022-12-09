//Libraries
import React from 'react'
//Style
import style from './GlitchText.module.css'

function GlitchText({ children }) {
  return (
        <span className={ style.mainContainer }>
            <div className={ style.nameContainer }>
                <h1 className={ style.name }>{children}</h1>
                <div className={ style.glitchContainer }>
                    <h1>{children}</h1>
                </div>
            </div>
        </span>
  )
}

export default GlitchText