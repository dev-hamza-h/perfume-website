import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-20 px-6 md:px-20 lg:px-40">
      {/* Top Section: Newsletter Subscription and Links */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        {/* Logo and Newsletter */}
        <div className="mb-6 md:mb-0">
          <h1 className="text-2xl font-bold text-orange-600 mb-4">The Perfume</h1>
          <p className="text-gray-400 mb-4">Subscribe to Our Newsletter:</p>
          <p className="text-gray-500 mb-4">Receive Updates on New Arrivals and Special Promotions!</p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Your email here"
              className="bg-gray-800 text-gray-300 px-4 py-2 rounded-l-md outline-none w-full"
            />
            <button className="bg-orange-600 text-white px-4 py-2 rounded-r-md">Submit</button>
          </div>
          <div className="flex space-x-4 mt-4">
            <FaFacebook className="text-blue-600 cursor-pointer" />
            <FaTwitter className="text-blue-400 cursor-pointer" />
            <FaLinkedin className="text-blue-700 cursor-pointer" />
            <FaInstagram className="text-pink-500 cursor-pointer" />
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-2">Categories</h3>
            <ul className="text-gray-400 space-y-1">
              <li>Fashion</li>
              <li>Sports</li>
              <li>Indoor</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Shopping</h3>
            <ul className="text-gray-400 space-y-1">
              <li>Payments</li>
              <li>Delivery options</li>
              <li>Buyer protection</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Customer care</h3>
            <ul className="text-gray-400 space-y-1">
              <li>Help center</li>
              <li>Terms & Conditions</li>
              <li>Privacy policy</li>
              <li>Returns & refund</li>
              <li>Survey & feedback</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Pages</h3>
            <ul className="text-gray-400 space-y-1">
              <li>About Us</li>
              <li>Shop</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="text-center text-gray-500 border-t border-gray-700 pt-4">
        © 2023 Local Face Inc. All rights reserved
      </div>
    </footer>
  );
}
