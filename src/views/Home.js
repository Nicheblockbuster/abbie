import React, { useState } from 'react'
import Footer from '../components/Footer'
import '../style/Home.scss'
import Logo from '../assets/bomadu.svg'
import Phone from '../assets/phone.svg'
import HomePath from '../assets/home.svg'
import { useHistory, Link } from 'react-router-dom'

const Home = () => {
  // State
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)

  // Router history
  const history = useHistory()

  // On change callback for input
  const onChange = (e) => {
    const newEmail = e.target.value
    setEmail(newEmail)

    // Validate email
    // eslint-disable-next-line
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!regex.test(newEmail)) setError(true)
    else setError(false)
  }

  // On click callback for sign up button
  const signUp = async () => {
    if (error || !email) return

    try {
      history.push('/congratulations')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='home'>
      {/* Header section */}
      <header className='header container-padding'>
        <div className='header-content'>
          <Link to='/'>
            <img className='logo' src={Logo} alt='Bomadu' />
          </Link>
          <h1 className='title-main m-0 text-center text-white'>
            Smart Current Accounts with 100% Deposit Funding for First Time Buyers
          </h1>
          <p className='subtitle-main text-center text-white-secondary'>
            Can you afford a mortgage but struggling with a deposit? Then BOMADU can help you move
            in quicker with our clever 100% deposit loans. Join the waitlist NOW!
          </p>
          <div className='form w-full'>
            <input
              value={email}
              onChange={onChange}
              type='email'
              placeholder='Your E-mail'
              className={`w-full ${error ? 'error' : ''}`}
              style={{ marginBottom: 20 }}
            />
            <button className='w-full' onClick={() => signUp()}>
              PRE-REGISTER
            </button>
          </div>
          <img className='phone' src={Phone} alt='' />
        </div>
      </header>

      {/* Home path section */}
      <div className='home-path container-padding'>
        <h2 className='title m-0 text-center text-pink'>
          We guide you along the path to your first home
        </h2>
        <p className='subtitle text-blue-secondary'>
          Buying doesn’t have to be stressful! Let BOMADU help you get the keys faster. Our
          AI-powered accounts help you save in pain-free ways. Start your journey by popping your
          email in up top.
        </p>
        <img src={HomePath} alt='' />
      </div>

      {/* Just for spacing */}
      <div style={{ height: '15vh' }} />

      <Footer />
    </div>
  )
}

export default Home
