import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Users, BookOpen, Award, Heart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Components
import FeaturedOpportunities from '../components/opportunities/FeaturedOpportunities';
import Testimonials from '../components/home/Testimonials';
import StatsSection from '../components/home/StatsSection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center md:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Make a Difference Through Volunteering
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-lg">
                Connect with meaningful volunteer opportunities and share resources in your community.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                <Link
                  to="/opportunities"
                  className="px-6 py-3 bg-white text-green-600 font-medium rounded-md hover:bg-gray-100 transition-colors"
                >
                  Find Opportunities
                </Link>
                <Link
                  to="/signup"
                  className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white hover:text-green-600 transition-colors"
                >
                  Sign Up Now
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden md:block"
            >
              <div className="bg-white p-6 rounded-lg shadow-xl">
                <h3 className="text-green-600 font-semibold text-lg mb-4">Quick Search</h3>
                <div className="space-y-3">
                  <div>
                    <label htmlFor="location" className="block text-gray-700 mb-1 text-sm">
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      placeholder="City, state, or zip code"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="category" className="block text-gray-700 mb-1 text-sm">
                      Category
                    </label>
                    <select
                      id="category"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">All Categories</option>
                      <option value="education">Education</option>
                      <option value="environment">Environment</option>
                      <option value="health">Health</option>
                      <option value="animals">Animals</option>
                      <option value="arts">Arts & Culture</option>
                      <option value="community">Community</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-gray-700 mb-1 text-sm">
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <button
                    className="w-full mt-2 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors flex items-center justify-center"
                  >
                    <Search className="h-4 w-4 mr-2" />
                    Search Opportunities
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              VORE makes it easy to find volunteer opportunities and share resources
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg text-center"
            >
              <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Find Opportunities</h3>
              <p className="text-gray-600">
                Browse through hundreds of volunteer opportunities based on your interests, skills, and location.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg text-center"
            >
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Connect with Organizations</h3>
              <p className="text-gray-600">
                Directly connect with organizations and collaborate with other volunteers on meaningful projects.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg text-center"
            >
              <div className="bg-orange-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Share Resources</h3>
              <p className="text-gray-600">
                Exchange knowledge, skills, and resources with others in the community to maximize impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Opportunities Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Featured Opportunities</h2>
            <Link to="/opportunities" className="flex items-center text-green-600 hover:text-green-700 font-medium">
              View all <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <FeaturedOpportunities />
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Volunteer Stories</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from volunteers who have made a difference in their communities
            </p>
          </div>
          
          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our community of volunteers and organizations working together to create positive change.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Link
                to="/signup"
                className="px-8 py-3 bg-white text-green-600 font-medium rounded-md hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                <Heart className="mr-2 h-5 w-5" />
                Get Started
              </Link>
              <Link
                to="/opportunities"
                className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white hover:text-green-600 transition-colors"
              >
                Browse Opportunities
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;