import React from 'react';
import './Nav.css'

function Nav() {
  return(
      <div className="nav-container">
          <div className="nav-left">
              <img src="https://cdn.pixabay.com/photo/2021/06/03/11/50/flash-6306911_1280.png" alt="" />
              <p className="flash-logo-text">
                  FlashType
              </p>
          </div>
          <div className="nav-right">
              <a href="#">Aniket</a>
          </div>
      </div>
  )
}

export default Nav;
