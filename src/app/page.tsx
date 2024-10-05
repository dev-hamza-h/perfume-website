import Image from "next/image";

export default function Home()  {
  return (
    <main className="bg-gray-50">
      {/* Header Placeholder to Offset Fixed Header */}
      <div className="h-16" />

      {/* Image Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <Image
          src="/images/pexels-didsss-1653085.jpg"
          alt="Perfume"
          layout="fill"
          objectFit="fit"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start text-white bg-black bg-opacity-50 p-8">
          <h1 className="text-5xl font-bold">Luxury Redefined</h1>
          <p className="text-xl mt-4">Indulge in the essence of luxury with our 
          <br/>premium collection.</p>
          <button className="mt-6 px-8 py-3 bg-purple-600 rounded hover:bg-purple-500 transition">
            Shop Now
          </button>
        </div>
      </div>
       
      {/* Product Section */}
      <div id="product" className="bg-gray-100 py-16">
        <h2 className="text-4xl font-bold text-left mb-8 pl-4">Products</h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            
            {/* Product 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image src="/images/perfume-8032808.jpg"
               alt="Perfume 1"  
               width={1024} 
               height={256}
               className="object-cover h-64" 
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">Mystic Blossom</h3>
                <p className="text-gray-600">A floral scent that captures spring's essence.</p>
                <p className="text-red-600 font-semibold">$29.99 <span className="text-gray-500 line-through">$39.99</span></p>
                <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-500 transition">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image src="/images/perfume-7639482.jpg" 
               alt="Perfume 2" 
               width={1024} 
               height={256} 
               className="object-cover h-64" 
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">Ocean Breeze</h3>
                <p className="text-gray-600">A fresh, aquatic scent perfect for summer days.</p>
                <p className="text-red-600 font-semibold">$24.99 <span className="text-gray-500 line-through">$34.99</span></p>
                <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-500 transition">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image src="/images/perfume-6899766.jpg" 
               alt="Perfume 3" 
               width={1024}
               height={256}
               className="object-cover h-64"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">Amber Night</h3>
                <p className="text-gray-600">A deep, amber fragrance for evening elegance.</p>
                <p className="text-red-600 font-semibold">$34.99 <span className="text-gray-500 line-through">$44.99</span></p>
                <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-500 transition">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 4 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image src="/images/ai-generated-8786921.png" 
               alt="Perfume 4" 
               width={1024}
               height={256}
               className="object-cover h-64" 
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">Citrus Glow</h3>
                <p className="text-gray-600">A bright and zesty citrus scent for a refreshing feel.</p>
                <p className="text-red-600 font-semibold">$19.99 <span className="text-gray-500 line-through">$29.99</span></p>
                <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-500 transition">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 5 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image src="/images/ai-generated-8727927.jpg" 
               alt="Perfume 5" 
               width={1024}
               height={256}
               className="object-cover h-64" 
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">Lavender Dream</h3>
                <p className="text-gray-600">A calming lavender scent for a peaceful mind.</p>
                <p className="text-red-600 font-semibold">$22.99 <span className="text-gray-500 line-through">$32.99</span></p>
                <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-500 transition">
                  Add to Cart
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-16 bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100">
       <div className="container mx-auto px-6">
       <h2 className="text-4xl font-bold text-left mb-8 text-purple-900">About Us</h2>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
       <div>
        <p className="text-left text-lg text-gray-700">
          At The Perfume, we believe in the art of fragrance creation. Each bottle is a masterpiece crafted with precision and care, blending the finest ingredients from around the world. Our mission is to bring you a scent that not only complements your personality but also leaves a lasting impression.
        </p>
        <p className="mt-4 text-left text-lg text-gray-700">
          With a legacy of over 20 years, we continue to innovate, creating perfumes that are not only luxurious but also timeless.
        </p>
      </div>
      <div>
        <Image
          src="/images/stylish-young-couple-with-vape-city.jpg"
          alt="Perfume Creation"
          width={400}
          height={256}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>
     </div>
     </div>
     </div>

      {/* Contact Section */} 
      <div id="contact" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-left mb-8 pl-4 text-gray-800">Contact Us</h2>
    
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      
      {/* Contact Form */}
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
        <form action="#" method="POST" className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <div className="mt-1">
              <input type="text" name="name" id="name" className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Enter your name" required />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <div className="mt-1">
              <input type="email" name="email" id="email" className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Enter your email" required />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <div className="mt-1">
              <textarea id="message" name="message" rows={4} className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Type your message" required></textarea>
            </div>
          </div>

          <div>
            <button type="submit" className="w-full  bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-500 transition">Send Message</button>
          </div>
        </form>
      </div>

      {/* Contact Information */}
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h3 className="text-2xl font-bold mb-6">Our Contact Info</h3>
        <p className="text-gray-700 mb-4">
          Feel free to reach out to us with any questions, comments, or inquiries. We're here to help!
        </p>
        <ul className="space-y-4">
          <li>
            <span className="font-semibold text-gray-800">Address:</span>
            <p className="text-gray-600">123 Luxury Lane, Fashion City, XYZ 12345</p>
          </li>
          <li>
            <span className="font-semibold text-gray-800">Phone:</span>
            <p className="text-gray-600">+123-456-7890</p>
          </li>
          <li>
            <span className="font-semibold text-gray-800">Email:</span>
            <p className="text-gray-600">info@luxuryperfumes.com</p>
          </li>
        </ul>

        {/* Social Media Links */}
        <div className="mt-8">
          <h4 className="text-lg font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-6">
            <a href="#" className="text-cyan-400 hover:text-cyan-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.15 4.15 0 0 0 1.83-2.28 8.22 8.22 0 0 1-2.6 1 4.11 4.11 0 0 0-7 3.74 11.66 11.66 0 0 1-8.48-4.3 4.11 4.11 0 0 0 1.27 5.48A4 4 0 0 1 2.8 9.86v.05a4.11 4.11 0 0 0 3.29 4 4 4 0 0 1-1.85.07 4.12 4.12 0 0 0 3.83 2.85 8.26 8.26 0 0 1-5.1 1.76c-.33 0-.66-.02-.99-.06A11.65 11.65 0 0 0 8.4 20c7.57 0 11.71-6.28 11.71-11.73 0-.18 0-.35-.01-.53a8.3 8.3 0 0 0 2.04-2.12z" />
              </svg>
            </a>
            <a href="#" className="text-teal-500 hover:text-teal-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382l-2.533-.726a1.513 1.513 0 0 0-1.575.393l-.75.766c-2.438-1.295-4.107-2.965-5.406-5.406l.737-.728a1.5 1.5 0 0 0 .393-1.575l-.726-2.533A1.517 1.517 0 0 0 7.554 4.5H5.507A1.517 1.517 0 0 0 4 6.007c0 6.8 5.493 12.293 12.293 12.293a1.517 1.517 0 0 0 1.507-1.507v-2.046a1.517 1.517 0 0 0-1.328-1.365z" />
              </svg>
            </a>
            <a href="#" className="text-red-500 hover:text-red-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.994 24V7.33c0-.57-.06-1.12-.17-1.66A4.7 4.7 0 0 0 22.3 3.25a4.71 4.71 0 0 0-2.42-1.43c-.84-.21-1.72-.3-2.7-.3H6.81c-.98 0-1.86.09-2.7.3a4.72 4.72 0 0 0-2.42 1.43A4.7 4.7 0 0 0 1.17 5.67c-.11.54-.17 1.09-.17 1.66v16.66c0 .57.06 1.12.17 1.66.11.54.32 1.05.63 1.52.32.47.73.88 1.24 1.24.5.35 1.06.62 1.66.81a4.67 4.67 0 0 0 1.66.17h10.48c.98 0 1.86-.09 2.7-.3a4.71 4.71 0 0 0 2.42-1.43c.49-.49.89-1.05 1.16-1.66.26-.6.38-1.25.38-1.93zM9.47 19.42v-8.42l7.86 4.21-7.86 4.21z" />
              </svg>
            </a>
            <a href="#" className="text-lime-300 hover:text-lime-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.488 17.188h-3.16v-8.445h3.16v8.445zm-1.579-9.498c-1.017 0-1.843.831-1.843 1.842 0 1.012.826 1.842 1.843 1.842h.02c1.018 0 1.842-.83 1.842-1.842 0-1.011-.824-1.842-1.842-1.842zm7.347 9.498h-3.16v-4.445c0-1.059-.018-2.41-1.465-2.41-1.464 0-1.692 1.145-1.692 2.322v4.533h-3.16v-8.445h3.02v1.154h.046c.419-.793 1.441-1.618 2.966-1.618 3.174 0 3.759 2.081 3.759 4.789v4.12z" />
              </svg>
            </a>
          </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </main>
  );
}
