import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <section id="header">
      <nav class="navbar navbar-expand-lg bg-danger  fixed-top">
        <div class="container">
        <Link to='/' class="navbar-brand" style={{"color":"white","fontSize": "1.5rem","fontWeight": "bolder",
    "font-style": "italic",
    "fontFamily": " 'Times New Roman', Times, serif"}}>
                 Chanvitha's Crafts
             </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="ti-align-justify navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
            <li class="nav-item">
            <Link to='/login' className='nav-link'>
                Login
             </Link>
              </li> 
              <li class="nav-item">
            <Link to='/signup' className='nav-link'>
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
