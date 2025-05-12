import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, User, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock data for featured opportunities
const opportunities = [
  {
    id: 1,
    title: "Community Garden Volunteer",
    organization: "Green Spaces Alliance",
    location: "Portland, OR",
    date: "2025-06-15",
    time: "9:00 AM - 1:00 PM",
    category: "Environment",
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
    image: "https://images.pexels.com/photos/6590920/pexels-photo-6590920.jpeg?auto=compress&cs=tinysrgb&w=400",
    spots: 8
  }
];

const FeaturedOpportunities: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {opportunities.map((opportunity, index) => (
        <motion.div
          key={opportunity.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
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
            
            <Link
              to={`/opportunities/${opportunity.id}`}
              className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition-colors"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View Details
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturedOpportunities;