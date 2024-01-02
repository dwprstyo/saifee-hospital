import React from 'react'
import BannerWrapper from '../Components/Content/home/BannerWrapper'
import Excellence from '../Components/Content/home/Excellence'
import Welcome from '../Components/Content/home/Welcome'
import BookAppointment from '../Components/Content/home/BookAppointment'
import Testimonial from '../Components/Content/home/Testimonial'

const Home = () => {
  return (
    <div>
      <BannerWrapper />
      <Excellence />
      <Welcome />
      <BookAppointment />
      <Testimonial />
    </div>
  )
}

export default Home