import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Heart className="h-7 w-7 text-green-400" />
              <span className="ml-2 text-xl font-bold">VORE</span>
            </div>
            <p className="text-gray-300 text-sm">
              Connecting volunteers with meaningful opportunities and resources since 2025.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/" className="hover:text-green-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/opportunities" className="hover:text-green-400 transition-colors">Opportunities</Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-green-400 transition-colors">Resources</Link>
              </li>
              <li>
                <Link to="/forum" className="hover:text-green-400 transition-colors">Forum</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/faq" className="hover:text-green-400 transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-400 transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-green-400 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-green-400 transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest volunteer opportunities and resources delivered to your inbox.
            </p>
            <form className="space-y-2">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 text-gray-700 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Volunteer Opportunity And Resource Exchange. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;