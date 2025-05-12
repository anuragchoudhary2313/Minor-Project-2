import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkClass = (path: string) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      location.pathname === path
        ? 'text-green-600 font-semibold'
        : 'text-gray-700 hover:text-green-600'
    }`;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Heart className="h-8 w-8 text-green-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">VORE</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className={navLinkClass('/')}>
              Home
            </Link>
            <Link to="/opportunities" className={navLinkClass('/opportunities')}>
              Opportunities
            </Link>
            <Link to="/resources" className={navLinkClass('/resources')}>
              Resources
            </Link>
            <Link to="/forum" className={navLinkClass('/forum')}>
              Forum
            </Link>
            
            {user ? (
              <div className="relative ml-3 flex items-center space-x-4">
                <Link
                  to="/dashboard"
                  className="text-sm font-medium text-gray-700 hover:text-green-600 px-3 py-2 rounded-md transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  to="/profile"
                  className="text-sm font-medium text-gray-700 hover:text-green-600"
                >
                  <User className="h-5 w-5" />
                </Link>
                <button
                  onClick={logout}
                  className="text-sm font-medium text-gray-700 hover:text-red-600"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-600 rounded-md transition-colors"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 transition-colors"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden overflow-hidden ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-b-lg">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/opportunities"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
            onClick={toggleMenu}
          >
            Opportunities
          </Link>
          <Link
            to="/resources"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
            onClick={toggleMenu}
          >
            Resources
          </Link>
          <Link
            to="/forum"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
            onClick={toggleMenu}
          >
            Forum
          </Link>
          
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Dashboard
              </Link>
              <Link
                to="/profile"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Profile
              </Link>
              <button
                onClick={() => {
                  logout();
                  toggleMenu();
                }}
                className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="block px-3 py-2 rounded-md text-base font-medium bg-green-500 text-white hover:bg-green-600 px-3 py-2 rounded-md"
                onClick={toggleMenu}
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;