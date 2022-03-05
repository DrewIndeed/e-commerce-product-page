import React from 'react';
import './infoShowcase.css';
import { images } from '../../assets/index.js';

const InfoShowcase = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto">
      {/* images */}
      <div className="flex h-80 overflow-hidden flex-col items-center justify-center md:h-50 lg:h-max lg:p-16">
        <div>

          <img
            className="lg:rounded-xl"
            src={images.Product1}
            alt="product-main-preview"
          />
        </div>

        {/* thumbnails */}
        <div className="thumbnails hidden lg:flex items-center justify-center space-x-8 pt-10">
          <img
            className="hover:opacity-70 rounded-xl"
            src={images.Product1Thumbnail}
            alt="product thumbnail 1"
          />
          <img
            className="hover:opacity-70 rounded-xl"
            src={images.Product2Thumbnail}
            alt="product thumbnail 2"
          />
          <img
            className="hover:opacity-70 rounded-xl"
            src={images.Product3Thumbnail}
            alt="product thumbnail 3"
          />
          <img
            className="hover:opacity-70 rounded-xl"
            src={images.Product4Thumbnail}
            alt="product thumbnail 4"
          />
        </div>
      </div>

      {/* info and add to cart */}
      <div className="bg-red-400">ererere</div>
    </div>
  );
};
export default InfoShowcase;
