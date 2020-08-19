import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import '../style/Congratulations.scss'
import Logo from '../assets/bomadu.svg'
import Confetti from '../assets/confetti.png'
import confetti from '../js/confetti'

const Congratulations = () => {
  useEffect(() => {
    confetti.start(3000)
  }, [])

  return (
    <div className='congratulations'>
      {/* Header section */}
      <header className='header container-padding'>
        <div className='header-content'>
          <img className='logo' src={Logo} alt='Bomadu' />
          <button>CONGRATULATIONS</button>
          <p className='subtitle-main text-center text-white-secondary'>
            We have sent you an email to confirm your signup. In a few weeks we will follow up with
            your official invitation to finish your sign up and take the next big step to owning
            your first home.
          </p>
          <img className='confetti' src={Confetti} alt='' />
        </div>
      </header>

      {/* Just for spacing */}
      <div style={{ height: '15vh' }} />

      <Footer />
    </div>
  )
}

export default Congratulations
