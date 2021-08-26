import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './FeaturesSection.scss'
import FeaturesCard from '../../assets/featurescard.png'
import { sentSubscriptionRequest } from '../../api/sentSubscriptionRequest'

const FeaturesSection = () => {
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
    <div className='features' id="features">
      <div className='features-background'>
        <div className='container container-padding'>
          <h1 className='title-main text-center text-blue font-bold'>Features</h1>
          <div className='features-grid'>
            <img src={FeaturesCard} alt='' />
            <div className='subtitle text-gray'>
              <p>
                Our Smart Current Account has been designed to help you make the most out of your
                money. With clever features to maximise your savings efforts and straightforward
                transactional banking, whether you’re saving for your first home or anything else,
                we’ve got you covered.
                <br />
                <br />
                Here are just a few features with BOMADU smart current account:
              </p>
              <ul>
                <li>Full UK Current Account</li>
                <li>FREE Debit Card & delivery</li>
                <li>Direct Debits & Standing Order for regular payments</li>
                <li>Instant payment notifications </li>
                <li>Request/Send Money</li>
                <li>Digital Wallets (Apple Pay and Google Pay) </li>
                <li>Round up savings</li>
                <li>Download/Share Statement</li>
                <li>Boost your credit score</li>
                <li>Home Deposit Loan Scheme* - help with your home deposit </li>
              </ul>
              <p>
                If you want a current account with smart features that can help you buy your first
                house quicker, leave your email below.
              </p>
            </div>
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

export { FeaturesSection }
