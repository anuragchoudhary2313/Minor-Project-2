import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Camera, Mail, MapPin, Calendar, Award, Edit2, Save, X } from 'lucide-react';
import { motion } from 'framer-motion';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    location: 'San Francisco, CA',
    joinDate: '2025-02-15',
    bio: 'Passionate about making a difference in my community through volunteering.',
    interests: ['Education', 'Environment', 'Community Service'],
    skills: ['Teaching', 'Project Management', 'Event Planning'],
    achievements: [
      {
        id: 1,
        title: '50 Hours Milestone',
        date: '2025-05-01',
        description: 'Completed 50 hours of volunteer service'
      },
      {
        id: 2,
        title: 'Community Leader',
        date: '2025-04-15',
        description: 'Led a team of 10 volunteers in a local cleanup project'
      }
    ]
  });

  const handleSave = () => {
    // In a real app, this would save to the backend
    setIsEditing(false);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8">
          <p className="text-xl text-gray-600 mb-4">Please log in to view your profile.</p>
          <a href="/login" className="px-4 py-2 bg-green-500 text-white rounded-md">
            Log in
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Profile Header */}
          <div className="relative h-48 bg-gradient-to-r from-green-400 to-green-600">
            <div className="absolute -bottom-16 left-8">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt={profileData.name}
                  className="w-32 h-32 rounded-full border-4 border-white object-cover"
                />
                <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                  <Camera className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
              >
                <Edit2 className="h-5 w-5 text-gray-600" />
              </button>
            )}
            {isEditing && (
              <div className="absolute top-4 right-4 flex space-x-2">
                <button
                  onClick={handleSave}
                  className="p-2 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600"
                >
                  <Save className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
                >
                  <X className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            )}
          </div>

          <div className="pt-20 px-8 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Profile Info */}
              <div className="md:col-span-2">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                      className="text-2xl font-bold text-gray-800 mb-2 w-full border-b border-gray-300 focus:outline-none focus:border-green-500"
                    />
                  ) : (
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">{profileData.name}</h1>
                  )}
                  
                  <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      {profileData.email}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {isEditing ? (
                        <input
                          type="text"
                          value={profileData.location}
                          onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                          className="border-b border-gray-300 focus:outline-none focus:border-green-500"
                        />
                      ) : (
                        profileData.location
                      )}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Joined {new Date(profileData.joinDate).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">About</h2>
                    {isEditing ? (
                      <textarea
                        value={profileData.bio}
                        onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                        className="w-full h-32 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    ) : (
                      <p className="text-gray-600">{profileData.bio}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800 mb-2">Interests</h2>
                      <div className="flex flex-wrap gap-2">
                        {profileData.interests.map((interest, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800 mb-2">Skills</h2>
                      <div className="flex flex-wrap gap-2">
                        {profileData.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Achievements */}
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-green-500" />
                  Achievements
                </h2>
                <div className="space-y-4">
                  {profileData.achievements.map((achievement) => (
                    <motion.div
                      key={achievement.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-gray-50 p-4 rounded-lg"
                    >
                      <h3 className="font-medium text-gray-800">{achievement.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {new Date(achievement.date).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        {achievement.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;