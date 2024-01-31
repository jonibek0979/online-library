import React from 'react'
import './SliderBook.scss'
import BookSlider2 from '../../components/BookSlider2/BookSlider2'
import BookSlider from '../../components/BookSlider/BookSlider'

function SliderBooks() {
  return (
    <div className='BookSlider'>
      <div className="container">
      <BookSlider/>
      <BookSlider2/>
      </div>
    </div>
  )
}

export default SliderBooks