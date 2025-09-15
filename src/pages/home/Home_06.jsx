import React from 'react'
import { Hero06 } from '../../components/sections/home_06/Hero06'
import AboutSection from '../../components/sections/home_06/Section2'
import Section3 from '../../components/sections/home_06/Section3'
import Section2 from '../../components/sections/home_06/Section2'
import Section4 from '../../components/sections/home_06/Section4'
import Footer_06 from '../../components/footer/Footer_06'
import FinancialScrollBanner from '../../components/sections/home_06/FinancialScrollBanner'
import Slider from '../../components/sections/home_06/Slider'
import Section5 from '../../components/sections/home_06/Section5'
import Section6 from '../../components/sections/home_06/Section6'
// import { Section2 } from '../../components/sections/home_06/Section2'

const Home_06 = () => {
  return (
    <div className='overflow-hidden'>
        <Hero06 />
        <Section2 />
        <FinancialScrollBanner />
        {/* <Slider /> */}
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
    </div>
  )
}

export default Home_06