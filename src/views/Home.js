import React, { useState } from 'react'
import {
  Footer,
  Nav,
  AboutSection,
  HomePathSection,
  TeamSection,
  FeaturesSection
} from '../components'
import Phone from '../assets/phone.png'
import { useHistory } from 'react-router-dom'
import { sentSubscriptionRequest } from '../api/sentSubscriptionRequest'
import '../style/Home.scss'

const Home = () => {
  // State
  const [email, setEmail] = useState('')

  // Router history
  const history = useHistory()

  // On change callback for input
  const onChange = (e) => {
    const newEmail = e.target.value
    setEmail(newEmail)
  }

  // On click callback for sign up button
  const signUp = async () => {
    if (!email) return

    await sentSubscriptionRequest(email)

    try {
      history.push('/congratulations')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='home' id='home'>
      {/* Navigation */}
      <Nav />
      {/* Header section */}
      <header className='header'>
        <div className='header-content container container-padding'>
          <h1 className='title-main m-0 text-center text-white'>Safer, fairer</h1>
          <h1 className='title-main m-0 text-center text-white'>banking solutions</h1>
          <h1 className='title-main m-0 text-center text-white'>for first time buyers</h1>
          <div className='form w-full'>
            <input
              value={email}
              onChange={onChange}
              type='email'
              placeholder='name@domain.com'
              className='w-full'
              style={{ marginBottom: 20 }}
            />
            <button className='button w-full' onClick={() => signUp()}>
              JOIN THE WAITLIST
            </button>
          </div>
        </div>
      </header>

      <div className='phone container container-padding'>
        <img src={Phone} alt='' />
      </div>

      <HomePathSection />
      <AboutSection />
      <TeamSection />
      <FeaturesSection />
      <Footer />
    </div>
  )
}

export default Home
