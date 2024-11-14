import { FaTwitter, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';

export default function Contact() {
    return (
        <div id="contact" className="bg-gray-900 pt-16 pb-16">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-orange-500 mb-8 pl-4 mt-6">Contact Us</h2>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    {/* Contact Form */}
                    <div className="bg-transparent shadow-[0_4px_20px_rgba(0,255,255,0.6)] rounded-lg p-8">
                        <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                        <form action="#" method="POST" className="flex flex-col gap-6">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="text-sm font-medium text-orange-300 pb-1">Full Name</label>
                                <input type="text" name="name" id="name" className="bg-yellow-50 w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter your name" required />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-sm font-medium text-orange-300 pb-1">Email Address</label>
                                <input type="email" name="email" id="email" className="bg-yellow-50 w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter your email" required />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="message" className="text-sm font-medium text-orange-300 pb-1">Message</label>
                                <textarea id="message" name="message" rows={4} className="bg-yellow-50 w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Type your message" required></textarea>
                            </div>

                            <button type="submit" className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-400 transition duration-300">Send Message</button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-transparent shadow-[0_4px_20px_rgba(0,255,255,0.6)] rounded-lg p-8">
                        <h3 className="text-2xl font-bold text-white mb-6">Our Contact Info</h3>
                        <p className="text-white mb-6">Feel free to reach out to us with any questions, comments, or inquiries. We&apos;re here to help!</p>
                        <ul className="list-none pl-0 mb-8">
                            <li className="mb-4">
                                <span className="font-bold text-orange-300">Address:</span>
                                <p className="text-white">123 Luxury Lane, Fashion City, XYZ 12345</p>
                            </li>
                            <li className="mb-4">
                                <span className="font-bold text-orange-300">Phone:</span>
                                <p className="text-white">+123-456-7890</p>
                            </li>
                            <li className="mb-4">
                                <span className="font-bold text-orange-300">Email:</span>
                                <p className="text-white">info@luxuryperfumes.com</p>
                            </li>
                        </ul>

                        {/* Social Media Links */}
                        <div className="mt-8">
                            <h4 className="text-lg font-bold text-orange-500 mb-4">Follow Us</h4>
                            <div className="flex gap-6">
                                <a href="#" className="text-cyan-400 hover:text-cyan-300 transition duration-300">
                                    <FaTwitter size={24} />
                                </a>
                                <a href="#" className="text-teal-500 hover:text-teal-400 transition duration-300">
                                    <FaInstagram size={24} />
                                </a>
                                <a href="#" className="text-red-500 hover:text-red-400 transition duration-300">
                                    <FaYoutube size={24} />
                                </a>
                                <a href="#" className="text-lime-300 hover:text-lime-200 transition duration-300">
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
