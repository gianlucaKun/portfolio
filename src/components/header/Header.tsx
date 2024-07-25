import React from 'react'
import './Header.scss'
import logo from '../../assets/Alien.svg'

const Header: React.FC = () => {
  return (
    <header>
    <img src={logo} alt="prova logo" />
    <h1></h1>
    </header>
  )
}

export default Header