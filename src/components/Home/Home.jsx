import React from 'react';
import { PrimaryButton } from '../styled-components/PrimaryButton.styled';
import { Title } from '../styled-components/Title.styled';
import './Home.css';

const Home = () => {
  return (
    <div className='home-container'>
      <div className="home-info">
        <Title className='title'>
          <h1><span>We help you grow</span></h1>
          <h1>your <i>conversions</i>.</h1>
          <p>Featured in leading publications aroundth world.</p>
        </Title>
        <img className='mt-3' src="/images/customers.png" alt="customers" />
        <PrimaryButton className='mt-4' varient="fill" >Contact Us</PrimaryButton>
      </div>
      <img className='illustration' src="/images/Illustration.png" alt="Illustration" />
      <img className='wave' src="/images/wave.png" alt="Illustration" />
    </div>
  )
}

export default Home