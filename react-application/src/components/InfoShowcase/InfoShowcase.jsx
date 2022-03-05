import React, { useState } from 'react';
import './infoShowcase.css';
import { images } from '../../assets/index.js';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { PlusIcon, MinusIcon } from '@heroicons/react/solid';

const InfoShowcase = () => {
  const [count, setCount] = useState(0);

  const handleIncre = () => {
    setCount(count + 1);
  };

  const handleDecre = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
      {/* images */}
      <div className="flex h-80 overflow-hidden flex-col items-center justify-center md:h-max md:p-10 lg:p-16">
        <div>
          <img
            className="md:rounded-xl"
            src={images.Product1}
            alt="product-main-preview"
          />
        </div>

        {/* thumbnails */}
        <div className="thumbnails hidden md:flex items-center justify-center space-x-9 lg:space-x-11 pt-10">
          <img
            className="hover:opacity-70 rounded-xl lg:w-20 w-16"
            src={images.Product1Thumbnail}
            alt="product thumbnail 1"
          />
          <img
            className="hover:opacity-70 rounded-xl lg:w-20 w-16"
            src={images.Product2Thumbnail}
            alt="product thumbnail 2"
          />
          <img
            className="hover:opacity-70 rounded-xl lg:w-20 w-16"
            src={images.Product3Thumbnail}
            alt="product thumbnail 3"
          />
          <img
            className="hover:opacity-70 rounded-xl lg:w-20 w-16"
            src={images.Product4Thumbnail}
            alt="product thumbnail 4"
          />
        </div>
      </div>

      {/* info and add to cart */}
      <div className="flex justify-center flex-col p-10">
        <h3 className="company-name font-bold pb-5">SNEAKER COMPANY</h3>
        <h1 className="product-name font-bold pb-2 text-3xl md:pb-10 md:text-5xl">
          Fall Limited Edition Sneakers
        </h1>
        <h3 className="product-desc mb-5">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer role, they'll withstand everything
          the weather can offer.
        </h3>

        <div className="flex lg:flex-col justify-between mb-5">
          <div className="flex items-center">
            <h3 className="current-price font-bold text-3xl mr-4">$125.00</h3>
            <div className="off-percent rounded flex items-center justify-center h-6 w-12">
              <h4 className="off-percent__content font-bold">50%</h4>
            </div>
          </div>

          <h4 className="off-price font-bold text-lg pt-1">$250.00</h4>
        </div>

        <div className="flex flex-col lg:flex-row w-full lg:space-x-5">
          <div className="bg-gray-50 lg:flex-1 items-center py-4 px-5 mb-5 lg:mb-0 rounded-xl flex justify-between">
            <MinusIcon
              onClick={() => handleDecre()}
              className="cursor-pointer plus-icon w-5 h-5"
            />
            <h3 id="quanity" className="font-bold">
              {count}
            </h3>
            <PlusIcon
              onClick={() => handleIncre()}
              className="cursor-pointer minus-icon w-5 h-5"
            />
          </div>
          <div className="add-to-cart cursor-pointer lg:grow flex items-center rounded-xl py-4 lg:py-0 justify-center space-x-5">
            <ShoppingCartIcon className="w-5 h-5" />
            <h3 className="font-bold">Add to cart</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoShowcase;
