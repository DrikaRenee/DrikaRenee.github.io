import React from 'react'
import {SlSocialLinkedin, SlSocialGithub, SlSocialTwitter} from 'react-icons/sl'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/chandrika-jones" target="_blank"><SlSocialLinkedin /></a>
        <a href="https://github.com/drikarenee" target="_blank"><SlSocialGithub /></a>
        <a href="https://twitter.com" target="_blank"><SlSocialTwitter/></a>
    </div>
  )
}

export default HeaderSocials