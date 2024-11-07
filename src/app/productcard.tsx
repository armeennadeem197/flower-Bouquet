'use client'; // Mark the component as Client Component

import React, { useState } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  ImageSrc: string; // Changed from 'Image' to 'imageSrc'
}

const ProductCard: React.FC<Product> = ({ id, name, price, ImageSrc }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(Math.max(1, newQuantity)); // Prevent negative or zero quantities
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${name} to the cart`);
    // Logic to add the product to the cart will go here
  };

  return (
    <div>
      <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-lg shadow-lg overflow-hidden bg-pink-100">
        <Image
          src={ImageSrc} // Updated to use 'imageSrc'
          alt={name}
          width={500} // Add width and height for Next.js Image
          height={300}
          className="w-full h-56 sm:h-64 md:h-72 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">{name}</h2>
          <p className="text-lg sm:text-xl text-black">${price.toFixed(2)}</p>

          {/* Quantity Controls */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <button
                className="px-2 py-1 bg-gray-200 rounded"
                onClick={() => handleQuantityChange(quantity - 1)}
              >
                -
              </button>
              <span className="mx-2 text-lg sm:text-xl">{quantity}</span>
              <button
                className="px-2 py-1 bg-gray-200 rounded"
                onClick={() => handleQuantityChange(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="mt-4 w-full py-2 bg-pink-600 text-white font-bold rounded-lg hover:bg-pink-400 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
