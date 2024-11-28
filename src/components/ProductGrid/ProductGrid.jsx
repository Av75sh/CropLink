import { useTheme } from '../../contexts/ThemeContext'
import { useState } from 'react';



import seeds from '../../assets/seeds.png';
import fertilizers from '../../assets/fertilizers.png';
import hardware from '../../assets/hardware3.png';

function ProductGrid() {
  const { darkMode } = useTheme();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('200g');

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const products = [
    { id: 1, title: '5-in-1 Seed Mix (200 g)', price: 199, mrp: 229, discount: 20, image: seeds },
    { id: 2, title: 'Vaniperan Fungicide (100 g each)', price: 399, mrp: 458, discount: 13, image: fertilizers },
    { id: 3, title: 'Fertilizer Sprayer (20L each)', price: 2499, mrp: 687, discount: 15, image: hardware },
  ];

  return (
    <div className="bg-gray-50 py-4 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm p-4">
            <div className="relative mb-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-60 object-cover rounded-lg" 
              />
              <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 text-xs rounded-full">
                {product.discount}% OFF
              </div>
            </div>

            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>

            <div className="mb-4">
              <p className="text-sm text-gray-500">M.R.P: <span className="line-through">Rs. {product.mrp}</span></p>
              <p className="text-lg font-bold text-green-600">Rs. {product.price}</p>
              <p className="text-xs text-gray-500">(incl. of all taxes)</p>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Quantity:</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDecrement}
                  className="w-8 h-8 flex items-center justify-center border rounded-full"
                >
                  -
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button
                  onClick={handleIncrement}
                  className="w-8 h-8 flex items-center justify-center border rounded-full"
                >
                  +
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button className="bg-white border-2 border-blue-900 text-blue-900 py-2 rounded-md hover:bg-blue-50 text-sm">
                Add to cart
              </button>
              <button className="bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 text-sm">
                BUY IT NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
