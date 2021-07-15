import React from 'react'

import Carousel from '../Custom/Carousel'
import Page1 from '../Custom/Page1'
import './HomeScreen.css'

function HomeScreen({ slides }) {
  return (
    <>
      <Carousel />
      <Page1 />
    </>
  )
}
export default HomeScreen
