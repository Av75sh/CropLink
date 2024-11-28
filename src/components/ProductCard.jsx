function ProductCard({ name, price, image, description }) {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full h-48 object-cover" src={image} alt={name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{description}</p>
          <p className="text-green-600 font-bold mt-2">${price}</p>
        </div>
      </div>
    );
  }
  
  export default ProductCard;