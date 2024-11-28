import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
    
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="text-green-600 text-4xl mb-4">🌱</div>
        <h2 className="text-4xl font-bold mb-6">Become a Part of Our Growing Community!</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          We CropLink are present 24/7 for our farmers. Our aim is to provide every essential items, required to them 
         for thier support. Join us in our mission to help the farmers adn thier families.
         "The best time to plant the tree was 10 years back, and the best time is now". 
        </p>
        
        <button
      className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 cursor-pointer"
      onClick={() => navigate("/home")}
    >
      Get Started
    </button>

      </div>

    
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           
            <div>
              <div className="flex items-center mb-6">
                <span className="text-green-600 text-2xl font-bold">CropLink</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Model Town, Punjab, India,<br />
                House Name: Avinash Singh
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                +91 7528060418
              </p>
            </div>

            
            <div>
              <h3 className="text-lg font-semibold mb-6">Company Profile</h3>
              <ul className="space-y-4">
                <li><button className="text-gray-600 dark:text-gray-400 hover:text-green-600 cursor-pointer">About</button></li>
                <li><button className="text-gray-600 dark:text-gray-400 hover:text-green-600 cursor-pointer">Help Center</button></li>
                <li><button className="text-gray-600 dark:text-gray-400 hover:text-green-600 cursor-pointer">Career</button></li>
                <li><button className="text-gray-600 dark:text-gray-400 hover:text-green-600 cursor-pointer">Plans & Pricing</button></li>
                <li><button className="text-gray-600 dark:text-gray-400 hover:text-green-600 cursor-pointer">Contact</button></li>
              </ul>
            </div>

            
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><button className="text-gray-600 dark:text-gray-400 hover:text-green-600 cursor-pointer">CropLink</button></li>
                <li><button className="text-gray-600 dark:text-gray-400 hover:text-green-600 cursor-pointer">Browse CropLink</button></li>
                <li><button className="text-gray-600 dark:text-gray-400 hover:text-green-600 cursor-pointer">Registrations</button></li>
              </ul>
            </div>

            
            <div>
              <h3 className="text-lg font-semibold mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-green-600 hover:text-white cursor-pointer"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-green-600 hover:text-white cursor-pointer"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-green-600 hover:text-white cursor-pointer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-green-600 hover:text-white cursor-pointer"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <button className="text-gray-600 dark:text-gray-400 hover:text-green-600 cursor-pointer">Terms And Condition</button>
              <span className="text-gray-400">|</span>
              <button className="text-gray-600 dark:text-gray-400 hover:text-green-600 cursor-pointer">Privacy Policy</button>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              © 2024 CropLink Company Limited
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
