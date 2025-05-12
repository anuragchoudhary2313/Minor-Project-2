import React, { useState } from 'react';
import { Search, Filter, Share2, Download, ExternalLink, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';

const resources = [
  {
    id: 1,
    title: "Volunteer Management Guide",
    author: "Sarah Johnson",
    organization: "Community Leaders Network",
    category: "Guide",
    description: "A comprehensive guide for managing volunteer programs effectively.",
    downloadUrl: "#",
    likes: 245,
    downloads: 1200,
    image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 2,
    title: "Fundraising Toolkit",
    author: "Michael Chen",
    organization: "Nonprofit Success",
    category: "Template",
    description: "Templates and strategies for successful fundraising campaigns.",
    downloadUrl: "#",
    likes: 189,
    downloads: 850,
    image: "https://images.pexels.com/photos/6646967/pexels-photo-6646967.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 3,
    title: "Community Engagement Strategies",
    author: "Emily Rodriguez",
    organization: "Urban Impact",
    category: "Guide",
    description: "Best practices for engaging communities in volunteer initiatives.",
    downloadUrl: "#",
    likes: 156,
    downloads: 720,
    image: "https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 4,
    title: "Event Planning Checklist",
    author: "David Kim",
    organization: "Event Success",
    category: "Template",
    description: "Comprehensive checklist for organizing volunteer events.",
    downloadUrl: "#",
    likes: 134,
    downloads: 650,
    image: "https://images.pexels.com/photos/6646915/pexels-photo-6646915.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

const ResourcesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = Array.from(new Set(resources.map(resource => resource.category)));

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-12 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Resource Exchange</h1>
            <p className="mt-4 max-w-xl mx-auto text-green-100">
              Share and discover valuable resources to support your volunteer initiatives
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
                  placeholder="Search resources..."
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

      {/* Resources Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">
              {filteredResources.length} Resources Available
            </h2>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
              <Share2 className="h-5 w-5 mr-2" />
              Share Resource
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 m-2 text-sm font-medium rounded">
                    {resource.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    By {resource.author} • {resource.organization}
                  </p>
                  <p className="text-gray-700 mb-4">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      {resource.likes} likes
                    </div>
                    <div className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      {resource.downloads} downloads
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition-colors flex items-center justify-center">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </button>
                    <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-md transition-colors flex items-center justify-center">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Preview
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No resources match your search criteria. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;