'use client';

import React, { useState } from 'react';
import { ShoppingCart, X, Plus, Minus, Clock, Coins } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  hours: number;
  avatar: string;
}

interface Agent {
  id: number;
  name: string;
  price: string;
  avatar?: string;
}

export const Cart = React.memo(function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (agent: any) => {
    const pricePerHour = parseInt(agent.price.replace(/[^\d]/g, ''));
    const existingItem = cartItems.find(item => item.id === agent.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === agent.id 
          ? { ...item, hours: item.hours + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, {
        id: agent.id,
        name: agent.name,
        price: pricePerHour,
        hours: 1,
        avatar: agent.avatar
      }]);
    }
    setIsOpen(true);
  };

  const updateHours = (id: number, hours: number) => {
    if (hours <= 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, hours } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalCost = cartItems.reduce((sum, item) => sum + (item.price * item.hours), 0);
  const totalHours = cartItems.reduce((sum, item) => sum + item.hours, 0);

  // Make addToCart available globally with security wrapper
  React.useEffect(() => {
    const secureAddToCart = (agent: any) => {
      // Validate agent object structure
      if (!agent || typeof agent !== 'object' || !agent.id || !agent.name || !agent.price) {
        console.error('Invalid agent object provided to addToCart');
        return;
      }
      
      // Sanitize input
      const sanitizedAgent = {
        id: Number(agent.id),
        name: String(agent.name).substring(0, 100),
        price: String(agent.price),
        avatar: String(agent.avatar || '🤖').substring(0, 10)
      };
      
      addToCart(sanitizedAgent);
    };
    
    (window as any).addToCart = secureAddToCart;
    return () => {
      if ((window as any).addToCart === secureAddToCart) {
        delete (window as any).addToCart;
      }
    };
  }, [addToCart]);

  return (
    <>
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-primary-500 hover:bg-primary-600 text-white p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-50"
      >
        <div className="relative">
          <ShoppingCart className="w-6 h-6" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </div>
      </button>

      {/* Cart Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 rounded-xl max-w-md w-full max-h-[80vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Shopping Cart</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="p-6 overflow-y-auto max-h-96">
              {cartItems.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingCart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                      <div className="text-2xl">{item.avatar}</div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 dark:text-white">{item.name}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.price} AgentCoin/hr</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateHours(item.id, item.hours - 1)}
                          className="p-1 rounded bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{item.hours}h</span>
                        <button
                          onClick={() => updateHours(item.id, item.hours + 1)}
                          className="p-1 rounded bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{totalHours} hours</span>
                    </div>
                    <div className="flex items-center space-x-1 text-lg font-bold text-gray-900 dark:text-white">
                      <Coins className="w-5 h-5 text-yellow-500" />
                      <span>{totalCost} AgentCoin</span>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-medium transition-colors">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </>
  );
}