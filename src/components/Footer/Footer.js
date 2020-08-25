import React from 'react'
import './Footer.scss'
import Logo from '../../assets/bomadu.svg'
import Facebook from '../../assets/fb-icon.svg'
import Instagram from '../../assets/ig-icon.svg'
import Linkedin from '../../assets/linkedin-icon.svg'
import Twitter from '../../assets/twitter-icon.svg'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const Footer = () => (
  <div className='footer container-padding'>
    <div className='footer-content'>
      <Link to='/'>
        <img className='logo' src={Logo} alt='' />
      </Link>
      <p className='text'>
        BOMADU is a trading name of BOMADU Marketplace Limited, a company registered in England and
        Wales No. 11963778. BOMADU is registered with the Information Commissioner Office,
        No.ZA751266 and Trademark No. UK00003426609. We are currently going through our regulation
        approval with the licensing authority.
        <br />
        Contact us below for more information.
        <br />
        <br />
        BOMADU Marketplace Limited
        <br />
        152 - 160 City Road London, United Kingdom EC1V 2NX
        <br />
        <a href='mailto:hello@bomadu.com'>hello@bomadu.com</a>
      </p>
      <div className='social-media'>
        <div className='follow-us'>Follow us on:</div>
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
      </div>
      {/* HIDDEN FOR NOW: FOOTER LINKS
        <div className='links'>
          <Link to=''>Terms and Conditions</Link>
          <span>&nbsp;-&nbsp;</span>
          <Link to=''>Privacy Policy</Link>
          <span>&nbsp;-&nbsp;</span>
          <Link to=''>Cookie Policy</Link>
        </div>
       */}
    </div>
  </div>
)

export default Footer
