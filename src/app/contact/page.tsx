import { FaTwitter, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';

export default function Contact() {
    return (
        <div id="contact" className="bg-gray-900 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <h2 className="text-4xl font-bold text-left mb-8 pl-4 mt-6 text-orange-500">Contact Us</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-transparent shadow-[0_4px_20px_rgba(0,255,255,0.6)] shadow-orange-500 rounded-lg p-8 ">
                        <h3 className="text-2xl text-white font-bold mb-6">Get in Touch</h3>
                        <form action="#" method="POST" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-orange-300 py-1">Full Name</label>
                                <input type="text" name="name" id="name" className=" bg-orange-50 block w-full border-gray-300  rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3" placeholder="Enter your name" required />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-orange-300 py-1">Email Address</label>
                                <input type="email" name="email" id="email" className="bg-orange-50 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3" placeholder="Enter your email" required />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-orange-300 py-1">Message</label>
                                <textarea id="message" name="message" rows={4} className=" bg-orange-50 px-3 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Type your message" required></textarea>
                            </div>

                            <button type="submit" className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-400 transition">Send Message</button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-transparent shadow-[0_4px_20px_rgba(0,255,255,0.6)] shadow-orange-500 rounded-lg p-8">
                        <h3 className="text-white  text-2xl font-bold mb-6">Our Contact Info</h3>
                        <p className="text-white mb-4">
                            Feel free to reach out to us with any questions, comments, or inquiries. We&apos;re here to help!
                        </p>
                        <ul className="space-y-4">
                            <li>
                                <span className="font-semibold text-orange-300">Address:</span>
                                <p className='text-white'>123 Luxury Lane, Fashion City, XYZ 12345</p>
                            </li>
                            <li>
                                <span className="font-semibold text-orange-300">Phone:</span>
                                <p className="text-white">+123-456-7890</p>
                            </li>
                            <li>
                                <span className="font-semibold text-orange-300">Email:</span>
                                <p className="text-white">info@luxuryperfumes.com</p>
                            </li>
                        </ul>

                        {/* Social Media Links */}
                        <div className="mt-8">
                            <h4 className="text-lg font-bold text-orange-500 mb-4">Follow Us</h4>
                            <div className="flex space-x-6">
                                <a href="#" className="text-cyan-400 hover:text-cyan-300">
                                    <FaTwitter size={24} />
                                </a>
                                <a href="#" className="text-teal-500 hover:text-teal-400">
                                    <FaInstagram size={24} />
                                </a>
                                <a href="#" className="text-red-500 hover:text-red-400">
                                    <FaYoutube size={24} />
                                </a>
                                <a href="#" className="text-lime-300 hover:text-lime-200">
                                    <FaGithub size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
