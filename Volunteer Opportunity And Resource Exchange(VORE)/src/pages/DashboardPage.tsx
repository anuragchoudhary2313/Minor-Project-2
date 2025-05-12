import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Calendar, Clock, MapPin, User, Heart, BookOpen, Award, Bell, Settings, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock data for user's volunteer activities
const upcomingActivities = [
  {
    id: 1,
    title: "Community Garden Volunteer",
    organization: "Green Spaces Alliance",
    location: "Portland, OR",
    date: "2025-06-15",
    time: "9:00 AM - 1:00 PM",
    status: "confirmed"
  },
  {
    id: 2,
    title: "Reading Buddy Program",
    organization: "City Library",
    location: "Austin, TX",
    date: "2025-06-18",
    time: "3:30 PM - 5:30 PM",
    status: "pending"
  }
];

const pastActivities = [
  {
    id: 3,
    title: "Beach Cleanup",
    organization: "Ocean Guardians",
    location: "San Diego, CA",
    date: "2025-05-20",
    time: "8:00 AM - 12:00 PM",
    status: "completed",
    hours: 4
  },
  {
    id: 4,
    title: "Food Bank Helper",
    organization: "Community Food Bank",
    location: "Phoenix, AZ",
    date: "2025-05-10",
    time: "1:00 PM - 4:00 PM",
    status: "completed",
    hours: 3
  }
];

// Mock data for notifications
const notifications = [
  {
    id: 1,
    message: "Your application for 'Reading Buddy Program' is pending approval.",
    time: "2 hours ago",
    read: false
  },
  {
    id: 2,
    message: "Community Garden Volunteer has been confirmed for June 15, 2025.",
    time: "1 day ago",
    read: true
  },
  {
    id: 3,
    message: "Thank you for completing your Beach Cleanup volunteer session!",
    time: "2 days ago",
    read: true
  }
];

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [showNotifications, setShowNotifications] = useState(false);

  const unreadNotifications = notifications.filter(n => !n.read).length;
  const totalHours = pastActivities.reduce((sum, activity) => sum + activity.hours, 0);

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8">
          <p className="text-xl text-gray-600 mb-4">You need to be logged in to view your dashboard.</p>
          <a href="/login" className="px-4 py-2 bg-green-500 text-white rounded-md">
            Log in
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-green-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <h1 className="text-3xl font-bold">Welcome, {user.name}!</h1>
              <p className="mt-2 text-green-100">Your volunteer dashboard</p>
            </div>
            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 rounded-full bg-green-700 hover:bg-green-800 focus:outline-none"
                >
                  <Bell className="h-6 w-6" />
                  {unreadNotifications > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-xs text-white font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {unreadNotifications}
                    </span>
                  )}
                </button>
                
                {showNotifications && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-10"
                  >
                    <div className="py-2 px-4 bg-gray-100 border-b flex justify-between items-center">
                      <h3 className="text-sm font-semibold text-gray-700">Notifications</h3>
                      <button className="text-xs text-green-600 hover:text-green-800">
                        Mark all as read
                      </button>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map(notification => (
                        <div 
                          key={notification.id}
                          className={`px-4 py-3 border-b hover:bg-gray-50 ${notification.read ? '' : 'bg-blue-50'}`}
                        >
                          <p className="text-sm text-gray-800">{notification.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                        </div>
                      ))}
                    </div>
                    <div className="py-2 px-4 text-center">
                      <a href="#" className="text-sm text-green-600 hover:text-green-800">
                        View all notifications
                      </a>
                    </div>
                  </motion.div>
                )}
              </div>
              <a href="/profile" className="p-2 rounded-full bg-green-700 hover:bg-green-800 focus:outline-none">
                <Settings className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
                <Heart className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Upcoming Activities</p>
                <h3 className="text-2xl font-semibold text-gray-800">{upcomingActivities.length}</h3>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Past Activities</p>
                <h3 className="text-2xl font-semibold text-gray-800">{pastActivities.length}</h3>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-orange-100 text-orange-600 mr-4">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Hours</p>
                <h3 className="text-2xl font-semibold text-gray-800">{totalHours}</h3>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="flex border-b">
            <button
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === 'upcoming'
                  ? 'text-green-600 border-b-2 border-green-500'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming Activities
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === 'past'
                  ? 'text-green-600 border-b-2 border-green-500'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab('past')}
            >
              Past Activities
            </button>
          </div>
          
          <div className="p-6">
            {activeTab === 'upcoming' ? (
              <>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-800">Your Upcoming Volunteer Activities</h2>
                  <a
                    href="/opportunities"
                    className="flex items-center text-sm text-green-600 hover:text-green-800"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Find more opportunities
                  </a>
                </div>
                
                {upcomingActivities.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingActivities.map((activity) => (
                      <motion.div
                        key={activity.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gray-50 rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between"
                      >
                        <div>
                          <h3 className="font-semibold text-gray-800">{activity.title}</h3>
                          <p className="text-gray-600 text-sm">{activity.organization}</p>
                          <div className="mt-2 flex flex-wrap gap-y-2">
                            <div className="flex items-center text-sm text-gray-500 mr-4">
                              <Calendar className="h-4 w-4 mr-1" />
                              {new Date(activity.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center text-sm text-gray-500 mr-4">
                              <Clock className="h-4 w-4 mr-1" />
                              {activity.time}
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <MapPin className="h-4 w-4 mr-1" />
                              {activity.location}
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 md:mt-0 flex items-center">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            activity.status === 'confirmed'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {activity.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                          </span>
                          <button className="ml-4 text-sm text-gray-600 hover:text-red-600">
                            Cancel
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-600">You don't have any upcoming volunteer activities.</p>
                    <a
                      href="/opportunities"
                      className="mt-4 inline-block px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                    >
                      Find opportunities
                    </a>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="mb-4">
                  <h2 className="text-lg font-semibold text-gray-800">Your Past Volunteer Activities</h2>
                </div>
                
                {pastActivities.length > 0 ? (
                  <div className="space-y-4">
                    {pastActivities.map((activity) => (
                      <motion.div
                        key={activity.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gray-50 rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between"
                      >
                        <div>
                          <h3 className="font-semibold text-gray-800">{activity.title}</h3>
                          <p className="text-gray-600 text-sm">{activity.organization}</p>
                          <div className="mt-2 flex flex-wrap gap-y-2">
                            <div className="flex items-center text-sm text-gray-500 mr-4">
                              <Calendar className="h-4 w-4 mr-1" />
                              {new Date(activity.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center text-sm text-gray-500 mr-4">
                              <Clock className="h-4 w-4 mr-1" />
                              {activity.time}
                            </div>
                            <div className="flex items-center text-sm text-gray-500 mr-4">
                              <MapPin className="h-4 w-4 mr-1" />
                              {activity.location}
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <User className="h-4 w-4 mr-1" />
                              {activity.hours} hours
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 md:mt-0">
                          <button className="text-sm text-green-600 hover:text-green-800">
                            View Certificate
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-600">You don't have any past volunteer activities yet.</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;