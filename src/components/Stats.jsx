function Stats() {
  const stats = [
    {
      value: "95%",
      label: "Happy Customers",
      description: "Our dedication ensures that almost all of our clients leave satisfied with our service."
    },
    {
      value: "100+",
      label: "Farmers Empowered",
      description: "We work closely with farmers to boost their productivity and livelihoods."
    },
    {
      value: "5000+",
      label: "Community Members",
      description: "Join our growing community of clients who trust us for quality and reliability."
    },
    {
      value: "100%",
      label: "Organic Freshness",
      description: "Committed to delivering farm-fresh, organically grown produce every time."
    }
  ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-6  px-4 md:px-8 lg:px-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-2xl dark:hover:shadow-2xl transition-shadow duration-300 ease-in-out"
          >
            <div className="text-green-600 text-4xl font-bold mb-2">{stat.value}</div>
            <h3 className="text-xl font-semibold mb-3">{stat.label}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.description}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Stats;
  