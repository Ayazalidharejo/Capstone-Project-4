import React from 'react'
import Navbar from './Navbar/Navbar'
import HeroSection from './HeroSection/HeroSection'
import PrepareFood from './PrepareFood/PrepareFood'
import Card from './HeroSection/RestorentBranch/Card'
import OnlineStore from './OnlineStore/OnlineStore'


const HomePage = () => {
  return (
    <>
  <Navbar/>
  <HeroSection/>
  <PrepareFood/>
  <Card/>
  <OnlineStore/>
  {/* <RestorentBranch/> */}
  </>
  )
}

export default HomePage