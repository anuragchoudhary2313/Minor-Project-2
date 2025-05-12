import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center"
      >
        <h1 className="text-9xl font-extrabold text-green-600">404</h1>
        <h2 className="mt-8 text-3xl font-bold text-gray-900">Page Not Found</h2>
        <p className="mt-4 text-lg text-gray-600">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
        >
          <Home className="h-5 w-5 mr-2" />
          Go back home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;