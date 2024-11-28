import React from 'react';
import { useCart } from '../components/context/CartContext';
import CartItem from './CartItem';

function Cart() {
  const { cartItems } = useCart();  

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-500">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Shopping Cart ({cartItems.length})</h2>
      </div>
      
      <div className="divide-y">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      
      <div className="p-4 bg-gray-50">
        <div className="flex justify-between mb-4">
          <span className="font-medium">Total:</span>
          <span className="font-bold text-lg">₹{total.toFixed(2)}</span>
        </div>
        
        <button className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
