import React from 'react';
import Image, { StaticImageData } from 'next/image';
import PerfumeImg1 from "@/assets/perfume1.png";
import PerfumeImg2 from "@/assets/perfume2.png";
import PerfumeImg3 from "@/assets/perfume3.png";
import PerfumeImg4 from "@/assets/perfume4.png";

import LperfumeImg1 from "@/assets/LperfumeImg1.png";
import LperfumeImg2 from "@/assets/LperfumeImg2.png";
import LperfumeImg3 from "@/assets/LperfumeImg3.png";
import LperfumeImg4 from "@/assets/LperfumeImg4.png";
import LperfumeImg5 from "@/assets/LperfumeImg5.png";

interface Product {
  name: string;
  price: string;
  volume: string;
  imageUrl: string | StaticImageData;
}

const bestSellingProducts: Product[] = [
  { name: 'Luxurious Elixir Rough', price: '$220.00', volume: '100ml', imageUrl: PerfumeImg1 },
  { name: 'The Golden Legacy', price: '$160.00', volume: '100ml', imageUrl: PerfumeImg2 },
  { name: 'Luxurious Elixir', price: '$250.00', volume: '100ml', imageUrl: PerfumeImg3 },
  { name: 'Luxurious Essence', price: '$260.00', volume: '100ml', imageUrl: PerfumeImg4 },
];

const latestProducts: Product[] = [
  { name: 'Fresh Aroma', price: '$180.00', volume: '90ml', imageUrl: LperfumeImg1 },
  { name: 'Mystic Waves', price: '$200.00', volume: '100ml', imageUrl: LperfumeImg2 },
  { name: 'Ocean Breeze', price: '$190.00', volume: '95ml', imageUrl: LperfumeImg3 },
  { name: 'Evening Charm', price: '$210.00', volume: '100ml', imageUrl: LperfumeImg4 },
  { name: 'Midnight Bloom', price: '$230.00', volume: '100ml', imageUrl: LperfumeImg5 },
];

const ProductCard: React.FC<Product> = ({ name, price, volume, imageUrl }) => (
  <div className="bg-black rounded-lg p-4 text-center transition-transform transform hover:scale-105">
    <Image src={imageUrl} alt={name} className="w-full h-60 object-contain rounded-lg" />
    <h3 className="text-white text-lg mt-4">{name}</h3>
    <div className="text-orange-500 text-xl font-bold">{price}</div>
    <div className="text-gray-400">{volume}</div>
  </div>
);

const ProductList: React.FC = () => (
  <section className="py-12 bg-gray-900 px-4 sm:px-8 lg:px-16">
    <h2 className="text-center text-3xl text-orange-500 font-bold mb-8 mt-10">Best Selling Products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-screen-lg mx-auto">
      {bestSellingProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
    <h2 className="text-center text-3xl text-orange-500 font-bold mb-8 mt-12">Latest Products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-screen-xl mx-auto">
      {latestProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  </section>
);

export default ProductList;
