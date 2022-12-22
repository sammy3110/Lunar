import React, {useRef}  from 'react';
import { PrimaryButton } from '../styled-components/PrimaryButton.styled';
import './Navbar.css';

const Navbar = () => {
  const list = useRef()
  const showHidden = () => {
    list.current.classList.toggle('show');
  }
  return (
  <nav className='navbar-container relative flex justify-between items-center px-10 py-5'>
    <img src="/images/brand.png" alt="brand logo" />
    <ul ref={list} className='items-center'>
      <li> <a href="Services">Services</a> </li>
      <li> <a href="Industries">Industries</a> </li>
      <li> <a href="About">About Us</a> </li>
      <li> <a href="Team">Team Lunar</a> </li>
      <li> <a href="Blog">Blog</a> </li>
      <li> <PrimaryButton>Contact Us</PrimaryButton> </li>
    </ul>
    <i onClick={showHidden} className="fa-solid fa-bars absolute right-8 hidden text-2xl"></i>
  </nav>
  )
}

export default Navbar