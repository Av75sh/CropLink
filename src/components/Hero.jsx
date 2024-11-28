import { useTheme } from '../contexts/ThemeContext'
import farmer from '../assets/farmer7.png'
import leaf from '../assets/leaf2.png'

function Hero() {
  const { darkMode } = useTheme()
  return (
    <div className="relative min-h-screen pt-8 pb-8 overflow-hidden"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[calc(100vh-8rem)]"> 
          <div className="space-y-8">
            <div className="relative">
              <img 
                src={leaf}
                alt="Leaf" 
                className="absolute -top-12 -left-8 w-16 animate-float"
              />
              <h1 className="text-6xl font-serif font-bold text-green-800 leading-tight">
                Make a fresh<br />Start With Us
              </h1>
            </div>
            
            <p className="text-gray-600 text-lg max-w-md">
              We quickly connect our farmer to the technology of the world and help them deliver high-quality and fresh products to everyone. 
            </p>

            <div className="flex space-x-4">
              <button className="px-8 py-3 bg-yellow-400 rounded-full font-medium hover:bg-yellow-500 transition-colors">
                Join now
              </button>
              <button className="px-8 py-3 border-2 border-gray-300 rounded-full font-medium hover:border-gray-400 transition-colors">
                Write to us
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-yellow-400 rounded-full opacity-50"></div>
            <div className="relative z-10">
              <img src={farmer} alt="Fresh Fruits" className="w-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 mb-4 text-center"> 
        
      </div>
    </div>
  );
}

export default Hero;
