import React from 'react'
import Navbar from './Navbar/Navbar'
import HeroSection from './HeroSection/HeroSection'
import PrepareFood from './PrepareFood/PrepareFood'
import RestorentBranch from './HeroSection/RestorentBranch/RestorentBranch'

const HomePage = () => {
  return (
    <>
  <Navbar/>
  <HeroSection/>
  <PrepareFood/>
  {/* <RestorentBranch/> */}
  </>
  )
}

export default HomePage