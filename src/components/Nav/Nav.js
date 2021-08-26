import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import Hamburger from '../../assets/hamburger.svg'
import { Link } from 'react-router-dom'
import './Nav.scss'

const Nav = () => {
  const [mobileDrawer, setMobileDrawer] = useState(false);

  return (
    <div>
      {/* Spacer because of fixed nav */}
      <div style={{ height: 80 }}></div>
      <div className='nav'>
        <div className='container container-padding'>
          <Link className='logo' to='/'>
            <img src={Logo} alt='Bomadu' />
          </Link>
          <div className='desktop-links'>
            <a href="#home" className='button button-secondary'>
              HOME
            </a>
            <a href='#about' className='button button-secondary'>
              ABOUT
            </a>
            <a href='#features' className='button button-secondary'>
              FEATURES
            </a>
          </div>
          <img className='mobile-hamburger' src={Hamburger} alt='' onClick={() => setMobileDrawer(!mobileDrawer)} />
        </div>
      </div>

      <div className={(mobileDrawer ? 'open ' : '') + 'mobile-drawer'}>
        <a href="#home" className='button button-secondary' onClick={() => setMobileDrawer(false)}>
          HOME
        </a>
        <a href='#about' className='button button-secondary' onClick={() => setMobileDrawer(false)}>
          ABOUT
        </a>
        <a href='#features' className='button button-secondary' onClick={() => setMobileDrawer(false)}>
          FEATURES
        </a>
      </div>
    </div>
  )
}

export { Nav }
