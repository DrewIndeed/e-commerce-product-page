import React from 'react';
import './header.css';
import { MenuIcon } from '@heroicons/react/solid';
import { ShoppingCartIcon } from '@heroicons/react/outline';

const Header = () => {
  return (
    <div className="flex justify-between max-w-6xl mx-auto border-b-2 h-24">
      <div className="flex">
        {/* hamburger */}
        <MenuIcon className="menu-icon w-6 flex lg:hidden items-center justify-center mt-1 mx-3" />

        {/* logo */}
        <h1 className="main-logo pr-5 font-bold flex items-center justify-center lg:ml-3">
          sneakers
        </h1>

        {/* nav */}
        <nav className="h-full hidden lg:flex px-5 justify-center space-x-10 items-center">
          <div>Collections</div>
          <div>Men</div>
          <div>Women</div>
          <div>About</div>
          <div>Contact</div>
        </nav>
      </div>

      {/* right area */}
      <div className="flex items-center justify-center pt-1 space-x-5 lg:space-x-9 pr-3">
        <ShoppingCartIcon className="cart-icon w-6 cursor-pointer" />
        <img
          className="profile-picture cursor-pointer w-7 h-7 object-cover rounded-full lg:w-11 lg:h-11"
          src="https://i.imgur.com/egkiPN4.jpg"
          alt="user-face"
        />
      </div>
    </div>
  );
};

export default Header;
