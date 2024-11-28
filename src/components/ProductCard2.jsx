import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { useCart } from '../components/context/CartContext';



function ProductCard2({ discount, image, name, brand, originalPrice, currentPrice, savings, defaultSize }) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(defaultSize);

  const sizeOptions =
    name === "Red Jewel Cabbage" || name === "T -621 Cabbage F1"
      ? ["100gm", "200gm", "500gm"]
      : name === "Farmer Safety Shoes"
      ? ["1 unit", "2 unit", "3 unit"]
      : name === "Sahoo Tomato Seeds"
      ? ["3500 seeds", "7000 seeds"]
      : name === "Chick Feeder"
      ? ["10 pack", "1 pack"]
      : name === "Farmson Chilli Seeds"
      ? ["10 gm", "50 gm", "100 gm"]
      : ["250ml", "500ml", "750ml", "1L"];

  const handleAddToCart = () => {
    addToCart({
      name,
      price: currentPrice,
      quantity: 1,
      size: selectedSize,
      image,
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm relative">
      <div className="absolute top-2 left-2 bg-orange-400 text-white px-2 py-1 rounded-md text-sm">
        {discount}% OFF
      </div>
      <button className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100">
        <Heart className="w-6 h-6 text-gray-400" />
      </button>
      
      <div className="mb-4 flex justify-center">
        <img src={image} alt={name} className="h-48 object-contain" />
      </div>
      
      <div className="space-y-2">
        <h3 className="font-medium text-lg">{name}</h3>
        <p className="text-gray-500 text-sm">{brand}</p>
        
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">₹{currentPrice}</span>
          <span className="text-gray-400 line-through text-sm">₹{originalPrice}</span>
        </div>
        
        <div className="flex items-center gap-1 text-green-600 text-sm">
          <span className="bg-green-100 p-1 rounded-full">✓</span>
          Save ₹{savings}
        </div>
        
        <div className="mb-7">
          <select 
            className="w-full p-2 border rounded-md appearance-none bg-white"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            {sizeOptions.map((size) => (
              <option key={size} value={size}>Size {size}</option>
            ))}
          </select>
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={handleAddToCart}
            className="bg-white border-2 border-blue-900 text-blue-900 py-2 rounded-md hover:bg-blue-50 text-sm flex-1"
          >
            Add to Cart
          </button>
          <button
            className="bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 text-sm flex-1"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard2;