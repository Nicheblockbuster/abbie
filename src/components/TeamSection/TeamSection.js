import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Founder1 from '../../assets/founder1.png'
import Founder2 from '../../assets/founder2.png'
import Founder3 from '../../assets/founder3.png'
import { sentSubscriptionRequest } from '../../api/sentSubscriptionRequest'
import './TeamSection.scss'

const TeamSection = () => {
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
    <div className='teamsection container container-padding'>
      <h1 className='title-main text-center text-blue font-bold'>Meet the BOMADU Team</h1>
      <p className='subtitle m-auto text-gray'>
        Who are we? We’re a team of property, finance and technology professionals who understand
        and have a passion to provide solutions to the challenges faced by first-time homebuyers, as
        we faced them ourselves!{' '}
      </p>

      <div className='founders'>
        {/* Founder 1 */}
        <div className='founder'>
          <img src={Founder1} className='image' alt='' />
          <div className='text'>
            <h1 className='text-orange font-normal'>ABIODUN ELOHIM</h1>
            <p className='subtitle text-gray'>
              CEO and CO-FOUNDER
              <br />
              <br />
              CF1 holder of Chartered Insurance Institute (CII)
              <br />
              <br />
              Having first-hand experience with how difficult getting on the property ladder can be,
              Abi is on a mission to help first-time buyers overcome the home deposit challenge.
              With a background as a Fintech Business and Test Analyst, his experience working
              across mobile lending as well as digital co-homeownership platforms brings a technical
              focus to his goal of building alternative finance solutions for first-time buyers.
            </p>
          </div>
        </div>
        {/* Founder 2 */}
        <div className='founder founder-inverted'>
          <div className='text'>
            <h1 className='text-orange font-normal'>AKIVA SCHREIBER</h1>
            <p className='subtitle text-gray'>
              CO-FOUNDER
              <br />
              <br />A veteran of the property world, Akiva has a deep understanding of the
              challenges faced by first-time buyers. As owner and manager of many property firms
              across the UK and Europe he has decades of ‘real world’ experience in property and is
              an advocate set out to help first-time buyers reach their dream of homeownership.
            </p>
          </div>
          <img src={Founder2} className='image' alt='' />
        </div>
        {/* Founder 3 */}
        <div className='founder'>
          <img src={Founder3} className='image' alt='' />
          <div className='text'>
            <h1 className='text-orange font-normal'>DAVID GRIGORYAN</h1>
            <p className='subtitle text-gray'>
              CISO
              <br />
              <br />
              David started his career in a few financial institutions you may have heard of -
              Deutsche Bank, ING Direct and Citibank - and then joined a few London and Silicon
              Valley start-ups maybe you haven’t. An experienced solutions architect, engineer, and
              self-professed technology fanatic, he brings a balance between curiosity and know-how
              to ensure our family of banking products are designed to tackle the challenges faced
              by first-time buyers.
            </p>
          </div>
        </div>
      </div>

      {/* Sign up form again */}
      <div className='signup-form container-padding m-auto'>
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

export { TeamSection }
