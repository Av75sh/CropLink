import { useState } from "react";
import { HiOutlineMenu, HiX, HiMoon, HiSun, HiShoppingCart } from "react-icons/hi";
import { useTheme } from "../contexts/ThemeContext";
import { useNavigate, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useCart } from '../components/context/CartContext';


function Navbar({ toggleLogin }) {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoanMenuOpen, setIsLoanMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about-us", label: "About Us" },
    { path: "/our-services", label: "Our Services" },
    { path: "/shop", label: "Shop" }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsLoanMenuOpen(false);
    setIsOpen(false);
  };

  return (
    <nav className="bg-cream-50 dark:bg-gray-900 shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <Link to="/" className="flex-shrink-0">
            <span className="text-green-600 dark:text-green-400 text-2xl font-bold flex items-center">
              🌾 CropLink
            </span>
          </Link>

          
          <div className="hidden md:flex items-center justify-center space-x-8 px-12">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                >
                  {item.label}
                </button>
              ))}

              
              <div
                className="relative"
                onMouseEnter={() => setIsLoanMenuOpen(true)}
                onMouseLeave={() => setIsLoanMenuOpen(false)}
              >
                <button className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">
                  Loan
                </button>
                {isLoanMenuOpen && (
                  <div className="absolute mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50">
                    <button
                      onClick={() => handleNavigation("/apply-loan")}
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
                    >
                      Apply for Loan
                    </button>
                  </div>
                )}
              </div>
            </div>

           
            <div className="flex items-center space-x-7 ml-auto">
              {isAuthenticated ? (
                <>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {user.name}
                  </span>
                  <button
                    className="bg-white dark:bg-gray-800 text-green-600 dark:text-green-400 border-2 border-green-600 dark:border-green-400 px-6 py-2 rounded-full hover:bg-green-600 hover:text-white dark:hover:bg-green-400 dark:hover:text-gray-900 transition-colors"
                    onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <button
                  className="bg-white dark:bg-gray-800 text-green-600 dark:text-green-400 border-2 border-green-600 dark:border-green-400 px-6 py-2 rounded-full hover:bg-green-600 hover:text-white dark:hover:bg-green-400 dark:hover:text-gray-900 transition-colors"
                  onClick={() => loginWithRedirect()}
                >
                  Log In
                </button>
              )}

             
              <Link to="/cart" className="relative">
                <HiShoppingCart className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </Link>

              
              <button
                onClick={toggleDarkMode}
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
              >
                {darkMode ? <HiSun className="w-6 h-6" /> : <HiMoon className="w-6 h-6" />}
              </button>
            </div>
          </div>

          
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-700 dark:text-gray-300"
            >
              {darkMode ? <HiSun className="w-6 h-6" /> : <HiMoon className="w-6 h-6" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <HiX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-cream-50 dark:bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 w-full text-left"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavigation("/apply-loan")}
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 w-full text-left"
            >
              Loan
            </button>
            <Link
              to="/cart"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 w-full text-left"
            >
              Cart
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;