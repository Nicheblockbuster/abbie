import React from 'react'
import './Footer.scss'
import Logo from '../../assets/logo-blue.png'
import Facebook from '../../assets/fb-icon.svg'
import Instagram from '../../assets/ig-icon.svg'
import Linkedin from '../../assets/linkedin-icon.svg'
import Twitter from '../../assets/twitter-icon.svg'
import YouTube from '../../assets/yt-icon.svg'
import { Link } from 'react-router-dom'

const Footer = () => (
  <div className='footer container-padding'>
    <div className='footer-content'>
      <Link to='/'>
        <img className='logo' src={Logo} alt='' />
      </Link>
      <div className='social-media'>
        <div className='follow-us text-orange'>Follow Us</div>
        <a href='https://www.facebook.com/buywithbomadu' target='_blank' rel='noopener noreferrer'>
          <img src={Facebook} alt='' />
        </a>
        <a
          href='https://www.instagram.com/buywithbomadu/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={Instagram} alt='' />
        </a>
        <a href='https://www.linkedin.com/company/bomadu' target='_blank' rel='noopener noreferrer'>
          <img src={Linkedin} alt='' />
        </a>
        <a href='https://twitter.com/buywithbomadu' target='_blank' rel='noopener noreferrer'>
          <img src={Twitter} alt='' />
        </a>
        <a href='https://youtube.com/buywithbomadu' target='_blank' rel='noopener noreferrer'>
          <img src={YouTube} alt='' />
        </a>
      </div>
      <div className='links'>
        <Link to=''>Terms and Conditions</Link>
        <span>&nbsp;-&nbsp;</span>
        <Link to=''>Privacy Policy</Link>
        <span>&nbsp;-&nbsp;</span>
        <Link to=''>Cookie Policy</Link>
      </div>
    </div>
  </div>
)

export { Footer }
