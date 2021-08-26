import React, { useEffect } from 'react'
import { Footer } from '../components'
import '../style/Congratulations.scss'
import Logo from '../assets/logo.png'
import Confetti from '../assets/confetti.png'
import confetti from '../js/confetti'
import { Link } from 'react-router-dom'

const Congratulations = () => {
  useEffect(() => {
    playConfetti()
  }, [])

  const playConfetti = () => confetti.start(3000)

  return (
    <div className='congratulations'>
      {/* Header section */}
      <header className='header container-padding'>
        <div className='header-content'>
          <Link to='/'>
            <img className='logo' src={Logo} alt='Bomadu' />
          </Link>
          <button className='button' onClick={() => playConfetti()}>
            CONGRATULATIONS
          </button>
          <p className='subtitle text-center text-white-secondary'>
            We have sent you an email to confirm your signup. In a few weeks we will follow up with
            your official invitation to finish your sign up and take the next big step to owning
            your first home.
          </p>
        </div>
      </header>

      <div className='confetti container-padding'>
        <img src={Confetti} alt='' />
      </div>

      <Footer />
    </div>
  )
}

export default Congratulations
