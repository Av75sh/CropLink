import React from 'react';
import { Link } from 'react-scroll'; 

import ProductCard from './ProductCard';
import product from '../../assets/product.jpeg';
import seed from '../../assets/s.jpg';
import ferti from '../../assets/ferti.jpg';
import spray from '../../assets/spray.avif';
import farmerkit from '../../assets/farmerkit.jpg';

function ProductDetails() {
  const products = [
    {
      icon: seed,
      title: 'Seeds and Planting Materials',
      description: 'High-quality seeds for crops like grains, vegetables, and fruits. Saplings for trees or horticultural plants.',
    },
    {
      icon: ferti,
      title: 'Chemical & Organic Fertilizers',
      description: 'Nitrogen Phosphorus Potassium-based as well as Organic Fertilizers Compost & Manure (cow dung, poultry litter).',
    },
    {
      icon: spray,
      title: 'Pesticides and Herbicides',
      description: ' To protect crops from insects, fungi, weeds and other pests. Insecticides Fungicides (e.g., glyphosate).',
    },
    {
      icon: farmerkit,
      title: 'Farm Machinery and Tools',
      description: 'Tractors and attachments and irrigation equipment (sprinklers, drip systems) and Hand Tools: Shovels, hoes, rakes, spades, sickles.',
    },
  ];

  return (
    <div className="bg-cream-50 dark:bg-gray-900 py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
         
          <div>
            <span className="text-yellow-500 dark:text-yellow-400 font-medium mb-4 block">Our Product Details</span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">We're Top Agriculture Inputs & Agrochemical Suppliers</h2>
            <div className="relative">
              <img
                src={product}
                alt="Farmer in field"
                className="rounded-2xl w-full object-cover h-[450px]"
              />
              <button className="absolute bottom-4 left-4 bg-green-600 dark:bg-green-500 rounded-full p-4 hover:bg-green-700 dark:hover:bg-green-600 transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

        
          <div className="mt-10">
            <div className="mb-8">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Discover a wide range of high-quality farm products designed to enhance your agricultural endeavors. We take pride in offering
              </p>
              <Link to="product-list" smooth={true} duration={400}>
                <button className="border border-gray-300 dark:border-gray-700 rounded-full px-6 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  View More
                </button>
              </Link>
            </div>

            <div className="space-y-6" id="product-list"> 
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  icon={product.icon}
                  title={product.title}
                  description={product.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
