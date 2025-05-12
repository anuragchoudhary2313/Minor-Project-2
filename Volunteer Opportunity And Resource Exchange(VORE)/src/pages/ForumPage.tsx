import React, { useState } from 'react';
import { MessageSquare, ThumbsUp, MessageCircle, Share2, Search, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

const discussions = [
  {
    id: 1,
    title: "Best practices for organizing community clean-up events",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    category: "Event Planning",
    content: "I'm planning a large-scale community clean-up event and would love to hear your experiences and tips...",
    likes: 24,
    comments: 12,
    timestamp: "2025-02-15T10:30:00Z"
  },
  {
    id: 2,
    title: "Volunteer burnout: How to maintain long-term engagement",
    author: {
      name: "Michael Chen",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    category: "Volunteer Management",
    content: "Let's discuss strategies for keeping volunteers motivated and preventing burnout in long-term projects...",
    likes: 31,
    comments: 18,
    timestamp: "2025-02-14T15:45:00Z"
  },
  {
    id: 3,
    title: "Fundraising ideas for small non-profits",
    author: {
      name: "Emily Rodriguez",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    category: "Fundraising",
    content: "Looking for creative fundraising ideas that have worked well for other small organizations...",
    likes: 19,
    comments: 8,
    timestamp: "2025-02-13T09:15:00Z"
  }
];

const ForumPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['Event Planning', 'Volunteer Management', 'Fundraising', 'Community Engagement', 'Resources'];

  const filteredDiscussions = discussions.filter(discussion => {
    const matchesSearch = discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         discussion.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || discussion.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-12 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Community Forum</h1>
            <p className="mt-4 max-w-xl mx-auto text-green-100">
              Connect, share experiences, and learn from other volunteers and organizations
            </p>
          </div>
          
          <div className="mt-8 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search discussions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 text-gray-900"
                />
              </div>
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-green-600 bg-white hover:bg-gray-50"
              >
                <Filter className="h-5 w-5 mr-2" />
                Filter
              </button>
            </div>
            
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 bg-white p-4 rounded-md shadow-md"
              >
                <div>
                  <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <select
                    id="category-filter"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 rounded-md text-gray-900"
                  >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Forum Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Recent Discussions</h2>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
              <MessageSquare className="h-5 w-5 mr-2" />
              Start Discussion
            </button>
          </div>
          
          <div className="space-y-6">
            {filteredDiscussions.map((discussion, index) => (
              <motion.div
                key={discussion.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={discussion.author.avatar}
                    alt={discussion.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        {discussion.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(discussion.timestamp).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="mt-2 text-xl font-semibold text-gray-800">
                      {discussion.title}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {discussion.content}
                    </p>
                    <div className="mt-4 flex items-center space-x-4">
                      <button className="flex items-center text-gray-500 hover:text-green-600">
                        <ThumbsUp className="h-5 w-5 mr-1" />
                        {discussion.likes}
                      </button>
                      <button className="flex items-center text-gray-500 hover:text-green-600">
                        <MessageCircle className="h-5 w-5 mr-1" />
                        {discussion.comments}
                      </button>
                      <button className="flex items-center text-gray-500 hover:text-green-600">
                        <Share2 className="h-5 w-5 mr-1" />
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredDiscussions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No discussions match your search criteria. Try adjusting your filters or start a new discussion.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ForumPage;