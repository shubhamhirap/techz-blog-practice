import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <>
      <div className="App">
        <header className="tz-header">
          <nav className="tz-navbar">
            <div>
              <h3 className="tz-brand">TechZ</h3>
            </div>
            <ul className="tz-menu">
              <Link to="/" className="tz-menuItem">
                Home
              </Link>
              <Link to="/about" className="tz-menuItem">
                About
              </Link>
              <Link to="/contact" className="tz-menuItem">
                Contact Us
              </Link>
              <Link to="/login" className="tz-menuItem">
                Login
              </Link>
              <Link to="/practice" className="tz-menuItem">
                Practice
              </Link>
            </ul>
          </nav>
        </header>
      </div>
    </>
  )
}

export default Header