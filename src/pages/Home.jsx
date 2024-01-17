import React from 'react'
import BannerWrapper from '../Components/Content/home/BannerWrapper'
import Excellence from '../Components/Content/home/Excellence'
import Welcome from '../Components/Content/home/Welcome'
import BookAppointment from '../Components/Content/home/BookAppointment'
import Testimonial from '../Components/Content/home/Testimonial'
import Contact from '../Components/Content/home/Contact'
import Package from '../Components/Content/home/Package'
import News from '../Components/Content/home/News'
import Blog from '../Components/Content/home/Blog'

const Home = () => {
  return (
    <div>
      <BannerWrapper />
      <Excellence />
      <Welcome />
      <BookAppointment />
      <Testimonial />
      <Contact />
      <Package />
      <News />
      <Blog />
    </div>
  )
}

export default Home