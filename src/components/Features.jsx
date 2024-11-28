import React, { useState } from 'react';
import { useCart } from '../components/context/CartContext';


import pro1 from '../assets/pro1.png';
import pro2 from '../assets/pro2.png';
import pro3 from '../assets/pro3.png';
import pro4 from '../assets/pro4.png';

const ProductCard = ({ name, brand, basePrice, image, onAddToCart, onBuyNow }) => {
  const [selectedQuantity, setSelectedQuantity] = useState('1'); 
  const [isLiked, setIsLiked] = useState(false); 
  const { addToCart } = useCart();

  const quantityPrices = {
    '100ml': basePrice,
    '250ml': basePrice * 2.2,
    '500ml': basePrice * 4,
    '1L': basePrice * 7.5,
    '1': basePrice,
    '2': basePrice * 2,
    '3': basePrice * 3,
    '4': basePrice * 4,
  };

  const calculateDiscount = (originalPrice, discountedPrice) => {
    return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
  };

  const getOriginalPrice = (price) => {
    return Math.round(price * 1.25);
  };

  const handleHeartClick = () => {
    setIsLiked(!isLiked); 
  };
 
  const handleAddToCart = () => {
    onAddToCart({
      name,
      price: quantityPrices[selectedQuantity],
      quantity: selectedQuantity,
      image, 
    });
  };

  
  return (
    <div className="relative border border-gray-200 rounded-lg p-4 max-w-sm bg-white shadow-sm">
      <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 text-sm font-semibold rounded">
        {calculateDiscount(
          getOriginalPrice(quantityPrices[selectedQuantity]),
          quantityPrices[selectedQuantity]
        )}% OFF
      </div>
      
      <button
        onClick={handleHeartClick}
        className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={isLiked ? 'red' : 'none'}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      </button>
      <div className="flex justify-center items-center h-48 mb-4 bg-gray-100 rounded">
        <img
          src={image}
          alt={name}
          className="object-contain max-h-full max-w-full"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500 mb-4">{brand}</p>
      <div className="mb-4">
        <select
          value={selectedQuantity}
          onChange={(e) => setSelectedQuantity(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
        >
          {name === "Balwaan Battery Sprayer" ? (
            <>
              <option value="1">1 unit</option>
              <option value="2">2 units</option>
              <option value="3">3 units</option>
              <option value="4">4 units</option>
            </>
          ) : (
            <>
              <option value="100ml">100ml</option>
              <option value="250ml">250ml</option>
              <option value="500ml">500ml</option>
              <option value="1L">1L</option>
            </>
          )}
        </select>
      </div>
      <div className="flex items-center space-x-2 mb-4">
        <span className="text-xl font-bold text-gray-800">
          ₹{quantityPrices[selectedQuantity]}
        </span>
        <span className="text-sm text-gray-500 line-through">
          ₹{getOriginalPrice(quantityPrices[selectedQuantity])}
        </span>
        <span className="text-sm text-green-600">
          Save ₹
          {getOriginalPrice(quantityPrices[selectedQuantity]) -
            quantityPrices[selectedQuantity]}
        </span>
      </div>
     
      <div className="flex space-x-2">
        <button
         onClick={handleAddToCart}
          className="bg-white border-2 border-blue-900 text-blue-900 py-2 rounded-md hover:bg-blue-50 text-sm flex-1"
        >
          Add to cart
        </button>
        <button
          onClick={() => onBuyNow({ name, quantity: selectedQuantity, price: quantityPrices[selectedQuantity] })}
          className="bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 text-sm flex-1"
        >
          BUY IT NOW
        </button>
      </div>
    </div>
  );
};

const ProductList = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product); 
  };

  const handleBuyNow = (product) => {
    console.log("Buying now:", product);
    
  };

  return (
    <div className="p-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <ProductCard
        name="Fantac Growth Promoter"
        brand="Growth Promoter"
        basePrice={250}
        image={pro2}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />
      <ProductCard
        name="Janatha Agro Seaman"
        brand="Crop Nutrition"
        basePrice={330}
        image={pro3}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />
      <ProductCard
        name="Balwaan Battery Sprayer"
        brand="Farm Machinery"
        basePrice={3400}
        image={pro1}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />
      <ProductCard
        name="Sahoo Tomato Seeds"
        brand="Seeds"
        basePrice={150}
        image={pro4}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />
    </div>
  );
};

export default ProductList;
