import { useState } from 'react';
import { FaUser, FaCog, FaComments, FaVideo, FaPalette, FaBell } from 'react-icons/fa';

function Sidebar({ activeSection, onSectionChange }) {
  const menuItems = [
    { id: 'profile', icon: FaUser, label: 'Profile' },
    { id: 'account', icon: FaCog, label: 'Account' },
    { id: 'chat', icon: FaComments, label: 'Chat' },
    { id: 'voice', icon: FaVideo, label: 'Voice & video' },
    { id: 'appearance', icon: FaPalette, label: 'Appearance' },
    { id: 'notification', icon: FaBell, label: 'Notification' }
  ];

  return (
    <div className="w-64 bg-gray-100 h-screen p-4">
      <h2 className="text-xl font-bold mb-6 flex items-center">
        <FaCog className="mr-2" />
        Settings
      </h2>
      <nav>
        {menuItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onSectionChange(id)}
            className={`w-full text-left p-3 rounded-lg mb-2 flex items-center ${
              activeSection === id ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'
            }`}
          >
            <Icon className="mr-3" />
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;