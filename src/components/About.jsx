import React from 'react';
import farmImage from '../assets/farmer4.png'; 
import produceImage from '../assets/farmer4.png'; 

import pro2 from '../assets/pro2.png';
import pro3 from '../assets/pro3.png';

function About() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">About Us</h1>

        <div className="max-w-6xl mx-auto">
          {/* Our Story Section */}
          <div className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Our Story</h2>
            <div className="flex justify-between items-center">
              <p className="text-gray-700 dark:text-gray-400 mb-4 max-w-md">
                Founded in 1990, Fresh Farm has been providing the community with fresh,
                organic produce for over three decades. What started as a small family farm
                has grown into a trusted source of quality fruits and vegetables.
              </p>
              <img src={farmImage} alt="Farm" className="w-64 h-40 object-cover rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Our Mission Section */}
          <div className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Our Mission</h2>
            <div className="flex justify-between items-center">
              <p className="text-gray-700 dark:text-gray-400 mb-4 max-w-md">
                We are committed to sustainable farming practices and providing our customers
                with the freshest, highest-quality produce while supporting local farmers
                and protecting the environment.
              </p>
              <img src={produceImage} alt="Produce" className="w-64 h-40 object-cover rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Our Values Section */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Our Values</h2>

            <div className="flex justify-between items-center flex-wrap gap-6">
              <img
                src={pro3}
                alt="Values Left"
                className="w-48 h-32 object-cover rounded-lg shadow-lg flex-shrink-0"
              />

            <ul className="list-disc list-inside text-gray-700 dark:text-gray-400">
              <li className="mb-2">Commitment to organic farming</li>
              <li className="mb-2">Supporting local communities</li>
              <li className="mb-2">Environmental sustainability</li>
              <li className="mb-2">Customer satisfaction</li>
            </ul>

            <img
                src={pro2}
                alt="Values Right"
                className="w-48 h-32 object-cover rounded-lg shadow-lg flex-shrink-0"
              />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
