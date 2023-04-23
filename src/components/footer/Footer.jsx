import React from 'react'
import './footer.css'
import {AiOutlineFacebook,AiOutlineTwitter,AiOutlineInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>CHANDRIKA J</a>
      <ul className='permalink'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com"><AiOutlineFacebook/></a>
        <a href="https://www.twitter.com"><AiOutlineTwitter/></a>
        <a href="https://www.instagram.com"><AiOutlineInstagram/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Chandrika J. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer