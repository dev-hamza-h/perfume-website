import Image from 'next/image';
import AboutImg from "@/assets/aboutImg.png"

export default function About() {
  return (
    <section className="bg-gray-900 text-white py-24 px-8 md:px-20 lg:px-40 flex flex-col md:flex-row items-center ">
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src={AboutImg}
          alt="Perfume bottle"
          width={500} 
          height={500} 
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-12">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          At The Perfume, we believe in the art of fragrance creation. Each bottle is a masterpiece crafted with precision and care, blending the finest ingredients from around the world. Our mission is to bring you a scent that not only complements your personality but also leaves a lasting impression.
        </p>
        <p className="text-gray-300 leading-relaxed">
          With a legacy of over 20 years, we continue to innovate, creating perfumes that are not only luxurious but also timeless.
        </p>
      </div>
    </section>
  );
}
