import React from 'react'
import { SliderData } from './SliderData'
import { useState } from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import './Carousel.css'
import ChangeText from './ChangeText'

// const SliderData = [
//   {
//     image: '..images/pic1.jpg',
//   },
//   {
//     image: '..images/pic2.jpg',
//   },
//   {
//     image: '..images/pic3.jpg',
//   },
// ]

const Carousel = () => {
  const [current, setCurrent] = useState(0)
  // const Slideslength = SliderData.length
  const images = SliderData.map((img, index) => {
    return (
      <div className={index === current ? 'slide active' : 'slide'} key={index}>
        {index === current && <img src={img.image} alt='gig banner images' />}
      </div>
    )
  })

  const prevSlide = () => {
    setCurrent(current === 0 ? SliderData.length - 1 : current - 1)
    console.log(current)
  }

  const nextSlide = () => {
    setCurrent(current === SliderData.length - 1 ? 0 : current + 1)
    console.log(current)
  }
  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null
  }
  return (
    <section className='slider'>
      <ArrowBackIcon className='backArrow' onClick={prevSlide} />
      <ArrowForwardIcon className='forwardArrow' onClick={nextSlide} />
      <div className='SliderImages'>{images}</div>
      <div className='textOver'>
        <h1>Book talent</h1>
        <ChangeText />
        <p>
          Book high quality, insured and verified talent instantly for your
          events.
        </p>
      </div>
    </section>
  )
}
export default Carousel
