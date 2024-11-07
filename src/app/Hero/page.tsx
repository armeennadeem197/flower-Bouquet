import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="h-screen bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('/flo.jpg')" }}>
      <div className=" p-8 rounded text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Flower Shop</h1>
        <p className="text-lg mb-6">Discover beautiful blooms for every occasion.</p>
        <Link  href="/product"
           className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
            Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Page;
