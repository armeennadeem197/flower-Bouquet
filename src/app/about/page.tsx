import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';
const AboutPage = () => {
  return (
    <div className=" flex  items-center justify-center bg-pink-200 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-lg w-full">
      <h1 className="text-4xl font-bold text-pink-500 mb-4">About Us</h1>
      <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
  <Image
    src="/fl.jpg"
    alt="Our Flower Shop"
    fill
    className="object-cover"
  />
</div>


        {/* Text paragraphs below the image */}
        <p className="text-gray-700 mb-4">
          At <span className="font-semibold">Bloom & Blossom</span>, we believe that flowers have the power to uplift, inspire, and bring beauty into everyday moments. Established in 2023, our mission is to share nature’s beauty with you, one bouquet at a time.
        </p>

        <p className="text-gray-700 mb-4">
          Our team of experienced florists carefully handpicks every flower, ensuring freshness and quality. We take pride in crafting unique, beautiful arrangements that fit any occasion—from weddings to personal celebrations. Each bouquet is designed to bring joy and create lasting memories.
        </p>

        <p className="text-gray-700 mb-6">
          Thank you for choosing us to be a part of your special moments. We’re here to make them beautiful, fragrant, and unforgettable.
        </p>

        {/* Social media icons */}
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://facebook.com/your-page" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <FaFacebook size={30} />
          </a>
          <a href="https://instagram.com/your-page" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
            <FaInstagram size={30} />
          </a>
          <a href="https://twitter.com/your-page" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
            <FaTwitter size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;