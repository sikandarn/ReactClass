import React from 'react';
import '../css/style.css'

function Header({ logo, profile }) {
  return (
    <header>
      <div>
        <img src={logo} alt="Logo" className="logo" />
        <button className="menu-button">Menu</button>
      </div>
      <div>
        <img src={profile} alt="Profile" className="profile-img" />
      </div>
    </header>
  );
}

export default Header;
