import React, { useState } from 'react';
import './header.css';
import { MenuIcon } from '@heroicons/react/solid';
import { ShoppingCartIcon, XIcon } from '@heroicons/react/outline';

const Header = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isCloseMenuClicked, setIsCloseMenuClicked] = useState(false);

  const handleMenuClicked = () => {
    setIsMenuClicked(true);
    setIsCloseMenuClicked(false);
  };

  const handleCloseMenuClicked = () => {
    setIsMenuClicked(false);
    setIsCloseMenuClicked(true);
  };

  return (
    <div className="z-30">
      {isMenuClicked && !isCloseMenuClicked && (
        <div className="hidden-nav-container">
          <div className="dark-cover absolute z-30 w-full h-full" />
          <div className="hidden-nav absolute z-30 w-60 h-full p-5">
            <div>
              <XIcon
                onClick={() => handleCloseMenuClicked()}
                className="x-icon cursor-pointer w-5 h-5"
              />
              <nav className="hidden-nav__content cursor-pointer flex flex-col space-y-4 pt-10">
                <div>Collections</div>
                <div>Men</div>
                <div>Women</div>
                <div>About</div>
                <div>Contact</div>
              </nav>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between max-w-6xl mx-auto border-b-2 h-16 lg:h-24">
        <div className="flex">
          {/* hamburger */}
          <MenuIcon
            onClick={() => handleMenuClicked()}
            className="cursor-pointer menu-icon w-6 flex lg:hidden items-center justify-center mt-1 mx-3"
          />

          {/* logo */}
          <h1 className="main-logo cursor-pointer pr-5 font-bold flex items-center justify-center lg:pl-3 lg:mr-3">
            sneakers
          </h1>

          {/* nav */}
          <nav className="visible-nav h-full hidden lg:flex px-5 justify-center space-x-10 items-center">
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
            className="profile-picture cursor-pointer w-8 h-8 object-cover rounded-full lg:w-12 lg:h-12"
            src="https://i.imgur.com/egkiPN4.jpg"
            alt="user-face"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
