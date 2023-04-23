/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {SlSocialTwitter} from 'react-icons/sl'


const Contact = () => {
  return (

    <section id="contact">  
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
      <article className="contact__option">
        <HiOutlineMail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>chandrika.jones@icloud.com</h5>
        <a href="mailto:chandrika.jones@icloud.com" target="_blank">Shoot me an e-mail.</a>
      </article>
      <article className="contact__option">
        <AiOutlineLinkedin className='contact__option-icon'/>
        <h4>LinkedIn</h4>
        <h5>/in/chandrika-jones</h5>
        <a href="https://www.linkedin.com/in/chandrika-jones" target="_blank">Connect with me on LinkedIn.</a>
      </article>
      <article className="contact__option">
        <SlSocialTwitter className='contact__option-icon'/>
        <h4>Twitter</h4>
        <h5>Dummy Twitter</h5>
        <a href="https://www.twitter.com" target="_blank">Find Me on Twitter.</a>
      </article>
      </div>
      {/* END OF CONTACT OPTIONS */}
      <form>
        <input type="text" name='user_name' placeholder="Full Name" required />
        <input type="email" name='user_email' placeholder="E-mail" required/>
        <textarea name="message" rows="7" placeholder="Your message" required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
    </section>
  )
}

export default Contact


