import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <section id="header">
      <nav className="navbar navbar-expand-lg bg-light  fixed-top">
        <div className="container">
        <Link to='/' className="navbar-brand" style={{"color":"red","fontSize": "1.5rem","fontWeight": "bolder",
    "fontStyle": "italic",
    "fontFamily": " 'Times New Roman', Times, serif"}}>
                Chanvitha's Crafts
             </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="ti-align-justify navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
            <Link to='/login' className='nav-link' style={{"color":"red"}}>
                Login
             </Link>
              </li> 
              <li className="nav-item">
            <Link to='/signup' className='nav-link' style={{"color":"red"}}>
                Signup
             </Link>
              </li> 
            </ul>
          </div>
        </div>
      </nav>
    </section>
    </div>
  )
}

export default Navbar
