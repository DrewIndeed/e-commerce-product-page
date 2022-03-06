import React, { useState } from 'react';
import './header.css';
import { MenuIcon } from '@heroicons/react/solid';
import { ShoppingCartIcon, XIcon } from '@heroicons/react/outline';

const Header = ({ cartQuantity }) => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isCloseMenuClicked, setIsCloseMenuClicked] = useState(false);
  const [isCartListClicked, setIsCartListClicked] = useState(false);

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
          <div className="dark-cover absolute w-full h-full" />
          <div className="hidden-nav absolute w-60 h-full p-5">
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
        <div className="right-area flex items-center justify-center pt-1 space-x-5 lg:space-x-9 pr-3 relative">
          {cartQuantity !== 0 && (
            <div className="quantity-badge absolute rounded-xl">
              <h3 className="quantity-badge-content text-white font-bold">
                {cartQuantity}
              </h3>
            </div>
          )}
          <ShoppingCartIcon
            onClick={() => setIsCartListClicked(!isCartListClicked)}
            className="cart-icon w-6 cursor-pointer"
          />
          <img
            className="profile-picture cursor-pointer w-8 h-8 object-cover rounded-full lg:w-12 lg:h-12"
            src="https://i.imgur.com/egkiPN4.jpg"
            alt="user-face"
          />
        </div>

        {isCartListClicked && (
          <div className="show-cart-details rounded-xl absolute flex flex-col">
            <div className="border-b-2 py-4 px-5">
              <h2 className="font-bold">Cart</h2>
            </div>
            <div
              className={`flex-1 flex overflow-y-scroll ${
                cartQuantity === 0
                  ? 'justify-center'
                  : 'flex-col justify-between'
              } items-center p-6`}
            >
              {cartQuantity === 0 ? (
                <h3 className="font-bold empty-msg my-14">
                  Your cart is empty.
                </h3>
              ) : (
                <div className="w-full h-full flex space-y-5 flex-col items-center justify-between">
                  <div className="added-items-list"></div>
                  <div className="checkout transition-all duration-600 hover:opacity-75 w-full h-14 flex items-center justify-center rounded-xl text-white font-bold cursor-pointer">
                    Checkout
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
