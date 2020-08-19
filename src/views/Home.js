import React from 'react'
import Footer from '../components/Footer'
import '../style/Home.scss'
import Logo from '../assets/bomadu.svg'
import Phone from '../assets/phone.svg'
import HomePath from '../assets/home2.svg'
import { Link } from 'react-router-dom'

const Home = () => (
  <div className='home'>
    {/* Header section */}
    <header className='header container-padding'>
      <div className='header-content'>
        <img className='logo' src={Logo} alt='Bomadu' />
        <h1 className='title-main m-0 text-center text-white'>
          Intelligent current accounts that care
        </h1>
        <p className='subtitle-main text-center text-white-secondary'>
          Bomadu is your partner for deposit loans that help you move in quicker
        </p>
        <div className='form w-full'>
          <input placeholder='name@domain.com' className='w-full' style={{ marginBottom: 20 }} />
          <Link to='/congratulations'>
            <button className='w-full'>JOIN NOW</button>
          </Link>
        </div>
        <img className='phone' src={Phone} alt='' />
      </div>
    </header>

    {/* Home path section */}
    <div className='home-path container-padding'>
      <h2 className='title m-0 text-center text-pink'>
        WE HELP YOU ALL ALONG THE PATH TO YOUR FIRST HOME
      </h2>
      <p className='subtitle text-blue-secondary'>
        Consectetur adipiscing elit. Phasellus pellentesque vestibulum nunc eu iaculis.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Phasellus pellentesque vestibulum nunc eu
        iaculis.
      </p>
      <img src={HomePath} alt='' />
    </div>

    {/* Just for spacing */}
    <div style={{ height: '15vh' }} />

    <Footer />
  </div>
)

export default Home
