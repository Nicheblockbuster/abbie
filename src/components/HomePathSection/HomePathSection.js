import React, { useState } from 'react'
import HomePath from '../../assets/home-path.png'
import { useHistory } from 'react-router-dom'
import { sentSubscriptionRequest } from '../../api/sentSubscriptionRequest'
import './HomePathSection.scss'

const HomePathSection = () => {
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
    <div className='homepathsection'>
      {/* Home path section */}
      <div className='home-path container container-padding'>
        <h2 className='title m-0 text-center text-orange text-uppercase'>
          A smart current account that helps you buy your first house, simple!
        </h2>
        <p className='subtitle text-gray'>
          The path to homeownership with BOMADU is simple and straightforward. Our Neo-banking
          solutions will be your companion
        </p>
        <img src={HomePath} alt='' />
      </div>

      {/* Sign up form again */}
      <div className='signup-form container-padding m-auto'>
        <h2 className='title text-center text-orange text-uppercase font-normal'>
          let BOMADU help you buy your first home quicker
        </h2>
        <div>
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
    </div>
  )
}

export { HomePathSection }
