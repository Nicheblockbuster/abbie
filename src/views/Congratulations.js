import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import '../style/Congratulations.scss'
import Logo from '../assets/bomadu.svg'
import Confetti from '../assets/confetti.png'
import confetti from '../js/confetti'

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
          <img className='logo' src={Logo} alt='Bomadu' />
          <button onClick={() => playConfetti()}>CONGRATULATIONS</button>
          <h2 className='title text-center text-white-secondary'>How do you (BOMA)DU?</h2>
          <p className='subtitle text-center text-white-secondary'>
            Thanks for registering! We can’t wait to welcome you to BOMADU. You’ll get an email from
            us once we’re all-systems-go!
          </p>
          <h2 className='title text-center text-white-secondary'>You’ve taken your first step</h2>
          <p className='subtitle text-center text-white-secondary'>
            Now the next bit is up to us. Just sit tight for now. We’ll be in touch just as soon as
            we launch so you can be one of the first people to sign up for our smart current
            accounts. We can’t wait to help you get on the property ladder.
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
