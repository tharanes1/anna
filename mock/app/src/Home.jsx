import React from 'react'
import Navigation from './Navigation'
import About from './About'
import Service from './Service'
import Product from './Product'
import Testimonial from './Testimonial'
import Hero from './hero'
function Home() {
  return (
    
    <div className='wes d-block'>
    <Navigation/>
    <Hero/>
    
    <About/>
    {/* <Service/> */}
    <Product/>
    <Testimonial/>
    </div>
  )
}

export default Home