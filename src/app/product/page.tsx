import React from 'react';
import ProductCard from '@/app/productcard';

const products = [
  {
    id: 1,
    name: 'Rose Bouquet',
    price: 25.99,
    ImageSrc: '/fl.jpg', // Updated 'Image' to 'imageSrc'
  },
  {
    id: 2,
    name: 'Tulip Bundle',
    price: 19.99,
    ImageSrc: '/11.jpg',
  },
  {
    id: 3,
    name: 'Orchid Arrangement',
    price: 35.99,
    ImageSrc: '/12.jpg',
  },
  {
    id: 4, // Changed id to be unique
    name: 'Jasmine Bouquet',
    price: 25.99,
    ImageSrc: '/13.jpg',
  },
  {
    id: 5,
    name: 'Sunflower Bunch',
    price: 22.99,
    ImageSrc: '/14.jpg',
  },
  {
    id: 6,
    name: 'Lily Bouquet',
    price: 30.99,
    ImageSrc: '/15.jpg',
  },
  {
    id: 7,
    name: 'Daisy Arrangement',
    price: 15.99,
    ImageSrc: '/16.jpg',
  },
  {
    id: 8,
    name: 'Peony Bouquet',
    price: 40.99,
    ImageSrc: '/17.jpg',
  },
  {
    id: 9,
    name: 'Tulip Garden',
    price: 28.99,
    ImageSrc: '/18.jpg',
  },
  {
    id: 10,
    name: 'Lavender Bundle',
    price: 18.99,
    ImageSrc: '/19.jpg',
  },
  {
    id: 11,
    name: 'Cherry Blossom',
    price: 32.99,
    ImageSrc: '/20.jpg',
  },
  {
    id: 12,
    name: 'Cactus Flower',
    price: 14.99,
    ImageSrc: '/21.jpg',
  },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
