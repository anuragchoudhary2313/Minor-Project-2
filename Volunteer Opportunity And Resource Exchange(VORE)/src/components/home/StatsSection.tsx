import React from 'react';
import { Users, Briefcase, Globe, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const StatsSection: React.FC = () => {
  const stats = [
    { id: 1, value: "10,000+", label: "Volunteers", icon: <Users className="h-8 w-8 text-green-500" /> },
    { id: 2, value: "5,000+", label: "Opportunities", icon: <Briefcase className="h-8 w-8 text-blue-500" /> },
    { id: 3, value: "500+", label: "Organizations", icon: <Globe className="h-8 w-8 text-orange-500" /> },
    { id: 4, value: "100,000+", label: "Volunteer Hours", icon: <Award className="h-8 w-8 text-purple-500" /> }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Impact</h2>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Together, we're making a meaningful difference
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex justify-center">{stat.icon}</div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-4xl font-bold">{stat.value}</p>
              </motion.div>
              <p className="text-gray-300 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;