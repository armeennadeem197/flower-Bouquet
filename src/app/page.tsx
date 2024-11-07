import React from 'react'
import Header from '@/app/header'
import Hero from '@/app/Hero/page'
import About from '@/app/about/page'
import Product from '@/app/product/page'
import Review from '@/app/review/page'
import Contact from '@/app/contact/page'
const page = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Product/>
      <Review/>
      <Contact/>
    </div>
  )
}

export default page
