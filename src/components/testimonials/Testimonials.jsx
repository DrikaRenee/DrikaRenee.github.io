import React from 'react'
import './testimonials.css'
import av1 from '../../assets/avatar1.jpg';
import avatar2 from '../../assets/avatar2.jpg';
import av3 from '../../assets/avatar3.jpg';
import av4 from '../../assets/avatar4.jpg';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper';
import 'swiper/css'
import 'swiper/css/pagination';


const data = [
  {
    avatar: av1,
    name:'Amelia Anderson',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium culpa quas quasi nisi eius?'
  },
  {
    avatar: avatar2,
    name:'Carl Carlson',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium culpa quas quasi nisi eius?'
  },
  {
    avatar: av3,
    name:'Michael Michaelson',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium culpa quas quasi nisi eius?'
  },
  {
    avatar:av4,
    name:'Britney Byerson',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium culpa quas quasi nisi eius?'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,review},index)=>{
          return(
            <SwiperSlide key ={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="avatar 1" />
          </div>
            <h5 className='client__name'>{name}</h5>
            <small className="client__review">{review}</small>
        </SwiperSlide>
          )})
        }
      </Swiper>
    </section>
  )
}

export default Testimonials