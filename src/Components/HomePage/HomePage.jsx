import React from 'react'
import Navbar from './Navbar/Navbar'
import HeroSection from './HeroSection/HeroSection'
import PrepareFood from './PrepareFood/PrepareFood'
import Card from './HeroSection/RestorentBranch/Card'
import OnlineStore from './OnlineStore/OnlineStore'
import Officepage from './Officepage/Officepage'
import FoodpandaInfo from './Detailpage/Detailpage'
import Footer from './Footer/Footer'





const HomePage = () => {
  return (
    <>
   
  {/* <Navbar/> */}
  <HeroSection/>
  <PrepareFood/>
  <Card/>
  <OnlineStore/>
  < Officepage/>
  <FoodpandaInfo/>
  <Footer/>

  
  {/* <RestorentBranch/> */}
 
  </>
  )
}

export default HomePage