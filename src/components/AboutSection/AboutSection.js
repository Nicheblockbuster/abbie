import React from 'react'
import './AboutSection.scss'

const AboutSection = () => (
  <div className='about' id="about">
    <div className='container container-padding'>
      <h1 className='title-main text-center text-blue font-bold'>About</h1>
      <p className='subtitle text-gray'>
        Our mission is to help first-time buyers overcome the home deposit challenge.
        <br />
        <br />
        The idea for BOMADU - pronounced [boh-mah-doo] - came through our own experience of buying a
        first home. Frustrated that no matter how much was put into savings, rising property prices
        meant an ever-increasing amount was required for the deposit and interest rates just weren’t
        keeping pace.
        <br />
        <br />
        Looking around, there were only a few options available to help first-time buyers and the
        majority took a chunk of the property’s equity, which was rented back to the buyer in
        addition to their mortgage payment! There was nothing to help buyers with the deposit
        itself, which seemed odd given the growing portion of first-time buyers relying on their
        parents, grandparents and other family members - aka the Bank of Mum and Dad.
        <br />
        <br />
        But, what if BoMaD wasn’t an option? There are over one million first-time buyers who don’t
        have access to help with their deposits, so we decided to create a solution. Thus BOMADU,
        “Bank of Mum and Dad United!”, was born. BOMADU is a smart current account for
        homeownership. We’ve created a range of products to help first-time buyers, whether with
        effective savings features or with our ‘first of its kind’ 100% deposit loan. We’re here to
        help get you into your first home quicker.
      </p>
    </div>
  </div>
)

export { AboutSection }
