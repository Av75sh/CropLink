function ProductCard({ icon, title, description }) {
  return (
    <div className="flex items-start space-x-4">
    
      <img src={icon} alt={title} className="w-16 h-16 object-cover rounded-full" />
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export default ProductCard;
