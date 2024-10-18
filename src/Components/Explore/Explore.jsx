import React from 'react'
import Hero from '../hero/Hero'
import img from '../../assets/heaven.jpg'
import Packages from './Packages'

const Explore = () => {
  return (
    <>
    <Hero 
    image={img}
    title="FIND THE PERFECT ESCAPE"
    subtitle='Discover Your Ideal Experience'
    btnClassname = "hide"
    />
    <Packages />
    </>
  )
}

export default Explore
