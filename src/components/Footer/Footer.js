import React from 'react'
import './Footer.scss'
import Logo from '../../assets/bomadu.svg'
import Facebook from '../../assets/fb-icon.svg'
import Instagram from '../../assets/ig-icon.svg'
import Linkedin from '../../assets/linkedin-icon.svg'
import { Link } from 'react-router-dom'

const Footer = () => (
  <div className='footer container-padding'>
    <div className='footer-content'>
      <img className='logo' src={Logo} alt='' />
      <div className='social-media'>
        <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
          <img src={Facebook} alt='' />
        </a>
        <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
          <img src={Instagram} alt='' />
        </a>
        <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
          <img src={Linkedin} alt='' />
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

export default Footer
