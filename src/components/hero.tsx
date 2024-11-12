import React from 'react';
import heroImg from "@/assets/heroImg.png"
import Image from 'next/image';
const Hero: React.FC = () => {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row-reverse items-center px-6 md:px-12 lg:px-24 space-y-6 md:space-y-0">
        
        {/* Right section containing the image */}
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <Image
            src={heroImg}
            alt="Victory Scented Fragrance Bottle"
            className="w-4/5 sm:w-3/4 md:w-3/5 lg:w-1/2 object-contain"
          />
        </div>

        {/* Left section containing the text and button */}
        <div className="w-full md:w-1/2 flex flex-col justify-center h-full text-center md:text-left">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Elevate Your Spirit with Victory Scented Fragrances!
            </h1>
            <p className="text-lg text-gray-300">
              Shop now and embrace the sweet smell of victory with Local Face.
            </p>
          </div>

          {/* Button Container */}
          <div className="mt-6 md:mt-14">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-md font-semibold text-lg">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
