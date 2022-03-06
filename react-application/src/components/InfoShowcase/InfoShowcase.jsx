import React, { useState } from 'react';
import './infoShowcase.css';
import { images } from '../../assets/index.js';
import { ShoppingCartIcon, XIcon } from '@heroicons/react/outline';
import { PlusIcon, MinusIcon } from '@heroicons/react/solid';

const InfoShowcase = ({ setCartQuantity }) => {
  const [count, setCount] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [thumbnailClickedNum, setThumbnailClickedNum] = useState(0);
  const [isThumbnailClicked, setIsThumbnailClicked] = useState(false);

  const {
    Product1,
    Product2,
    Product3,
    Product4,
    Product1Thumbnail,
    Product2Thumbnail,
    Product3Thumbnail,
    Product4Thumbnail,
  } = images;

  const mainProducts = [Product1, Product2, Product3, Product4];
  const thumbnailProducts = [
    Product1Thumbnail,
    Product2Thumbnail,
    Product3Thumbnail,
    Product4Thumbnail,
  ];

  const handleIncre = () => {
    setCount(count + 1);
  };

  const handleDecre = () => {
    if (count > 0) setCount(count - 1);
  };

  const handleIncreImageIndex = () => {
    if (imageIndex < mainProducts.length - 1) {
      setImageIndex(imageIndex + 1);
      setThumbnailClickedNum(imageIndex + 1);
    } else {
      setImageIndex(0);
      setThumbnailClickedNum(0);
    }
  };

  const handleDecreImageIndex = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
      setThumbnailClickedNum(imageIndex - 1);
    } else {
      setImageIndex(mainProducts.length - 1);
      setThumbnailClickedNum(mainProducts.length - 1);
    }
  };

  const handleIsThumbnailClicked = () => {
    setIsThumbnailClicked(true);
  };

  const imagesDomComponents = [];
  for (let i = 0; i < mainProducts.length; i++) {
    imagesDomComponents.push(
      <div
        key={`thumb-${i}`}
        className={`overflow-hidden bg-white cursor-pointer rounded-xl lg:w-20 w-16 ${
          i === thumbnailClickedNum && 'current-thumbnail-container'
        }`}
      >
        <img
          onClick={() => {
            setImageIndex(i);
            setThumbnailClickedNum(i);
            handleIsThumbnailClicked();
          }}
          className={`hover:opacity-70 thumbnails ${
            i === thumbnailClickedNum && 'current-thumbnail-content'
          }`}
          src={thumbnailProducts[i]}
          alt={`product-thumbnail-${i}`}
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
      {/* popup preview after clicking a thumbnail*/}
      {isThumbnailClicked && (
        <div className="hidden-thumbnail-preview hidden md:block absolute h-screen top-0 left-0 w-screen z-40">
          <div className="dark-cover absolute h-screen top-0 left-0 w-screen z-40" />
          <div className="absolute h-screen top-0 left-0 w-screen z-40 flex items-center justify-center">
            <div className="w-90 h-90 flex flex-col items-center justify-center relative">
              <XIcon
                onClick={() => setIsThumbnailClicked(false)}
                className="absolute x-icon-preview cursor-pointer w-7 h-7"
              />

              <img
                className="rounded-xl"
                src={mainProducts[imageIndex]}
                alt="product-main-preview"
                id="product-dark-preview"
              />

              <div
                onClick={() => handleIncreImageIndex()}
                className="next-icon-container-popup cursor-pointer absolute w-12 h-12 bg-white rounded-full flex justify-center items-center"
              >
                <img
                  className="w-4 h-4"
                  src={images.NextIcon}
                  alt="next-of-gallery"
                />
              </div>

              <div
                onClick={() => handleDecreImageIndex()}
                className="previous-icon-container-popup cursor-pointer absolute w-12 h-12 bg-white rounded-full flex justify-center items-center pr-1"
              >
                <img
                  className="w-4 h-4"
                  src={images.PreviousIcon}
                  alt="previous-of-gallery"
                />
              </div>

              {/* thumbnails */}
              <div className="flex items-center justify-center space-x-11 lg:space-x-12 pt-10">
                {imagesDomComponents.map((item) => item)}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* images */}
      <div className="products flex h-80 overflow-hidden flex-col items-center justify-center md:h-max md:p-10 lg:p-16">
        <div className="relative">
          <img
            className="md:rounded-xl"
            src={mainProducts[imageIndex]}
            alt="product-main-preview"
          />

          <div
            onClick={() => handleIncreImageIndex()}
            className="next-icon-container md:hidden cursor-pointer absolute right-5 w-10 h-10 bg-white rounded-full flex justify-center items-center"
          >
            <img
              className="w-3 h-3"
              src={images.NextIcon}
              alt="next-of-gallery"
            />
          </div>

          <div
            onClick={() => handleDecreImageIndex()}
            className="previous-icon-container md:hidden cursor-pointer absolute left-5 w-10 h-10 bg-white rounded-full flex justify-center items-center pr-1"
          >
            <img
              className="w-3 h-3"
              src={images.PreviousIcon}
              alt="previous-of-gallery"
            />
          </div>
        </div>

        {/* thumbnails */}
        <div className="hidden md:flex items-center justify-center space-x-9 lg:space-x-11 pt-10">
          {imagesDomComponents.map((item) => item)}
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

        <div className="prices flex lg:flex-col justify-between mb-5">
          <div className="flex items-center">
            <h3 className="current-price font-bold text-3xl mr-4">$125.00</h3>
            <div className="off-percent rounded flex items-center justify-center h-6 w-12">
              <h4 className="off-percent__content font-bold">50%</h4>
            </div>
          </div>

          <h4 className="off-price font-bold text-lg pt-1">$250.00</h4>
        </div>

        <div className="quantity-container flex flex-col lg:flex-row w-full lg:space-x-5">
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
          <div
            onClick={() => {
              setCartQuantity(count);
              setCount(0);
            }}
            className="add-to-cart cursor-pointer lg:grow flex items-center rounded-xl py-4 lg:py-0 justify-center space-x-5"
          >
            <ShoppingCartIcon className="w-5 h-5" />
            <h3 className="font-bold">Add to cart</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoShowcase;
