import React from 'react';
import { ListMinus } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className='text-xl font-semibold'>Excuseme</a>
        </div>
        <nav className="flex items-center gap-8">
          <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
          <a href="/" className="text-gray-700 hover:text-gray-900">Support</a>
          <a href="/" className="text-gray-700 hover:text-gray-900">My Account</a>
          <a href="/" className="text-gray-700 hover:text-gray-900">
            <ListMinus size={20} />
          </a>
        </nav>
      </div>
    </header>
  );
};