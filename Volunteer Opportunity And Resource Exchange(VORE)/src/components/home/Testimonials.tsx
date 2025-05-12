import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    content: "Volunteering through VORE has been an incredible experience. I've met amazing people and contributed to causes I'm passionate about.",
    author: "Sarah Johnson",
    role: "Environmental Volunteer",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 2,
    content: "As a small non-profit, VORE has helped us find dedicated volunteers who share our mission. It's transformed how we operate.",
    author: "Michael Chen",
    role: "Education Foundation Director",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 3,
    content: "The resource exchange feature helped our community garden access tools and expertise we couldn't have afforded otherwise.",
    author: "Leila Patel",
    role: "Community Garden Organizer",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center mb-4">
            <img
              src={testimonial.image}
              alt={testimonial.author}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="ml-4">
              <h4 className="font-semibold text-gray-800">{testimonial.author}</h4>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
          </div>
          <p className="text-gray-700 italic">{testimonial.content}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Testimonials;