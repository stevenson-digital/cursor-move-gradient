import React from 'react'
import useMousePosition from './hooks/useMousePosition.js'
import './App.scss'

const App = () => {
  const { mouseX, mouseY } = useMousePosition()

  const adjustGradient = (box = false) => {
    // Gradients must always be opposites of each
    const calc = ((mouseX / 10) + (mouseY / 10)) * 0.5
    return box ? calc : calc + 180
  }

  const adjustRotate = () => {
    const calc = mouseX / 750
    return calc
  }

  const adjustScale = () => {
    const movement = mouseY / 7500
    let scale = 0.95 + movement

    if (scale >= 1.05)
      scale = 1.05

    console.log('scale', scale)
    return scale
  }

  return (
    <div
      className="App"
      style={{background: `linear-gradient(${adjustGradient()}deg, #ffedbc, #ed4264)`}}
    >
      <div className="TextWrapper">
        <h1 className="f-vogue-90-42">Ollie Stevenson</h1>
        <h2 className="f-open-38-28">Frontend Engineer @Huel</h2>
        <p>
          For public speaking enquiries please email
          <br/>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:ollie@stevenson.digital"
          >
            ollie@stevenson.digital
          </a>
        </p>
      </div>
      <div
        className="Box"
        style={{
          background: `linear-gradient(${adjustGradient(true)}deg, #ffedbc, #ed4264)`,
          transform: `rotate(${adjustRotate()}deg) scale(${adjustScale()})`
        }}
      />
    </div>
  )
}

export default App
