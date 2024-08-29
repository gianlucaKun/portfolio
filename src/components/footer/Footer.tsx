import React from 'react'
import './Footer.scss'
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© {new Date().getFullYear()} Gianluca. All rights reserved.</p>
        <p className="footer-description">Thank you for visiting my portfolio. Feel free to reach out through the links in the <a href="#header">header</a>!</p>
      </div>
    </footer>
  )
}

export default Footer