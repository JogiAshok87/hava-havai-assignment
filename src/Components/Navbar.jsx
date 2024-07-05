import React from 'react';
import profileImg from "../assets/profileImg.png"


const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='title'>
        hava havai
      </div>
      <div className='profile'>
        <img
          src={profileImg}
          alt="User"
         
        />
      </div>
    </nav>
  );
};

export default Navbar;