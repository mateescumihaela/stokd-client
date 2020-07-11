import React from 'react'
import LazyHero from 'react-lazy-hero'

const heroStyle = {
  color: 'black',
  fontSize: '100px'
}

const subtitle = {
  fontSize: '40px'
}

const Hero = () => {
  return <div className="hero">
    <LazyHero imageSrc="https://coverr.co/74ff56e1-40c4-4f0e-86e7-b342e8a22a72">
      <h1 style={heroStyle}>This is my app</h1>
      <p style={subtitle}></p>
    </LazyHero>
  </div>
}

export default Hero