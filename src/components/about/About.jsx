import React from 'react'
import './about.css'
import Me from '../../assets/pic.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id="about">
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-img">
          <img src={Me} alt="" />
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon"/>
            <h5>Experience</h5>
            <small>3+ Years</small>
          </article>
          <article className="about__card">
            <FiUsers className="about__icon"/>
            <h5>Clients</h5>
            <small>50+</small>
          </article>
          <article className="about__card">
            <AiOutlineFolderOpen className="about__icon"/>
            <h5>Projects</h5>
            <small>50+ Completed</small>
          </article>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit reprehenderit inventore vitae? Repellendus ipsum saepe sequi possimus aliquam eaque rerum laborum quisquam repudiandae, neque quo at, tempore ut vitae assumenda?
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Connect!</a>

      </div>
    </div>
    </section>
  )
}

export default About