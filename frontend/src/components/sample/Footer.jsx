import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
       <footer>
    <div className="p-3 copyright">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 p-1 p-lg-3 text-center text-lg-start">
              <p className="my-0">Copyright © 2024 <a href="#">E-SHOP</a> All Rights Reserved</p>
          </div>
          <div className="col-12 col-lg-6 p-1 p-lg-3 text-center text-lg-end">
              <p>Designed by <a href="#" target=" _blank">Chanviths's Crafts</a>.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer
