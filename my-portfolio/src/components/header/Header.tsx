import React from 'react'
import './Header.scss'
import logo from '../../assets/cat-and-ramen.png'

const Header: React.FC = () => {
  return (
    <header>
    <img src={logo} alt="prova logo" />
    <h1>Logo</h1>
    </header>
  )
}

export default Header