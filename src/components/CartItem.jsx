import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../components/context/CartContext';


function CartItem({ id, name, price, quantity, size, image }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-4 p-4 border-b">
      
      <div className="w-35 h-40 flex-shrink-0">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover rounded-md"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1518977676601-b53f82aba655';
            e.target.onerror = null;
          }}
        />
      </div>

     
      <div className="flex-1">
        <h3 className="font-medium">{name}</h3>
        <p className="text-base text-gray-500">Size: {size}</p>
        <p className="text-blue-900 font-bold text-lg">₹{price}</p>
      </div>
      
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => updateQuantity(id, quantity - 1)}
            className="p-1 rounded-full hover:bg-gray-100"
            disabled={quantity <= 1}
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-8 text-center">{quantity}</span>
          <button
            onClick={() => updateQuantity(id, quantity + 1)}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        
        <button
          onClick={() => removeFromCart(id)}
          className="text-red-500 hover:text-red-600"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;