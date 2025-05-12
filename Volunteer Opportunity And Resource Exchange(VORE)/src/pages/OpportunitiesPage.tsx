import React, { useState } from 'react';
import { Search, Filter, MapPin, Calendar, Clock, User } from 'lucide-react';
import { motion } from 'framer-motion';

const opportunities = [
  {
    id: 1,
    title: "Community Garden Volunteer",
    organization: "Green Spaces Alliance",
    location: "Portland, OR",
    date: "2025-06-15",
    time: "9:00 AM - 1:00 PM",
    category: "Environment",
    description: "Help maintain our community garden by planting, weeding, and harvesting produce that supports local food banks.",
    image: "https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=400",
    spots: 5
  },
  {
    id: 2,
    title: "Reading Buddy Program",
    organization: "City Library",
    location: "Austin, TX",
    date: "2025-06-18",
    time: "3:30 PM - 5:30 PM",
    category: "Education",
    description: "Read with elementary school children to improve their literacy skills and foster a love of reading.",
    image: "https://images.pexels.com/photos/8363102/pexels-photo-8363102.jpeg?auto=compress&cs=tinysrgb&w=400",
    spots: 10
  },
  {
    id: 3,
    title: "Homeless Shelter Meal Service",
    organization: "Hope House",
    location: "Chicago, IL",
    date: "2025-06-20",
    time: "5:00 PM - 8:00 PM",
    category: "Community",
    description: "Prepare and serve meals for individuals experiencing homelessness at our shelter.",
    image: "https://images.pexels.com/photos/6590920/pexels-photo-6590920.jpeg?auto=compress&cs=tinysrgb&w=400",
    spots: 8
  },
  {
    id: 4,
    title: "Animal Shelter Assistant",
    organization: "Happy Paws Rescue",
    location: "Denver, CO",
    date: "2025-06-25",
    time: "10:00 AM - 2:00 PM",
    category: "Animals",
    description: "Help care for shelter animals by cleaning, feeding, walking dogs, and socializing cats.",
    image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400",
    spots: 6
  },
  {
    id: 5,
    title: "Trail Maintenance Crew",
    organization: "Nature Conservancy",
    location: "Seattle, WA",
    date: "2025-06-30",
    time: "8:00 AM - 12:00 PM",
    category: "Environment",
    description: "Help maintain hiking trails by clearing debris, fixing trail markers, and preventing erosion.",
    image: "https://images.pexels.com/photos/554609/pexels-photo-554609.jpeg?auto=compress&cs=tinysrgb&w=400",
    spots: 12
  },
  {
    id: 6,
    title: "Senior Center Companion",
    organization: "Golden Years Society",
    location: "Miami, FL",
    date: "2025-07-02",
    time: "1:00 PM - 4:00 PM",
    category: "Community",
    description: "Spend time with seniors through conversation, games, and activities to reduce isolation.",
    image: "https://images.pexels.com/photos/7551622/pexels-photo-7551622.jpeg?auto=compress&cs=tinysrgb&w=400",
    spots: 8
  }
];

const OpportunitiesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredOpportunities = opportunities.filter(opportunity => {
    // Filter by search term
    const matchesSearch = opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          opportunity.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          opportunity.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by category
    const matchesCategory = selectedCategory === '' || opportunity.category === selectedCategory;
    
    // Filter by location
    const matchesLocation = selectedLocation === '' || opportunity.location.includes(selectedLocation);
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  const categories = Array.from(new Set(opportunities.map(op => op.category)));
  const locations = Array.from(new Set(opportunities.map(op => op.location.split(',')[0].trim())));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-12 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Find Volunteer Opportunities</h1>
            <p className="mt-4 max-w-xl mx-auto text-green-100">
              Discover meaningful ways to give back to your community and make a difference
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
                  placeholder="Search opportunities..."
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <div>
                    <label htmlFor="location-filter" className="block text-sm font-medium text-gray-700">
                      Location
                    </label>
                    <select
                      id="location-filter"
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 rounded-md text-gray-900"
                    >
                      <option value="">All Locations</option>
                      {locations.map((location) => (
                        <option key={location} value={location}>
                          {location}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              {filteredOpportunities.length} {filteredOpportunities.length === 1 ? 'Opportunity' : 'Opportunities'} Found
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredOpportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={opportunity.image}
                    alt={opportunity.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 m-2 text-sm font-medium rounded">
                    {opportunity.category}
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {opportunity.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {opportunity.organization}
                  </p>
                  
                  <p className="text-gray-700 mb-4 line-clamp-2">
                    {opportunity.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-sm">{opportunity.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-sm">{new Date(opportunity.date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-sm">{opportunity.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <User className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-sm">{opportunity.spots} spots available</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition-colors"
                    >
                      Apply Now
                    </button>
                    <button
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-md transition-colors"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredOpportunities.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No opportunities match your search criteria. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default OpportunitiesPage;