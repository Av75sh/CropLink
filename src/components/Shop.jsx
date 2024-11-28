import { categories } from './data';

function Data() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-12">Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category) => (
          <div
            key={category.title}
            className="flex flex-col items-center group cursor-pointer"
          >
           
            <div className="w-40 h-40 rounded-full flex items-center justify-center p-2 mb-4 transition-transform duration-300 group-hover:scale-110">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-contain" 
              />
            </div>
            <h3 className="text-center font-medium text-gray-800 group-hover:text-blue-600">
              {category.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Data;
