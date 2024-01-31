import React from 'react'
import './Hero.scss'
import Search from '../Search/Search'
import MainSlider from '../MainSlider/MainSlider'

function Hero() {
  return (
    <>
      <div className='hero'>
        <div className="container">
          <MainSlider />
        </div>
      </div>

      <Search />
    </>
  )
}

export default Hero