import ProductCard from './ProductCard2';
import p5 from '../assets/p2-5.png';
import p4 from '../assets/p2-4.png';
import p2 from '../assets/p2-2.png';
import p3 from '../assets/p2-3.png';
import p1 from '../assets/p2-1.png';

import p10 from '../assets/p2-10.png';
import p9 from '../assets/p2-9.png';
import p8 from '../assets/p2-8.png';
import p7 from '../assets/p2-7.png';
import p6 from '../assets/p2-6.png';



const todayOffers = [
  {
    discount: 33,
    image: p1,
    name: "Red Jewel Cabbage",
    brand: "Sakata",
    currentPrice: 431,
    originalPrice: 645,
    savings: 214,
    defaultSize: "250ml",
  },
  {
    discount: 35,
    image: p2,
    name: "Double Yield Enhancer",
    brand: "Godrej Agrowet",
    currentPrice: 399,
    originalPrice: 615,
    savings: 216,
    defaultSize: "500ml",
  },
  {
    discount: 17,
    image: p3,
    name: "Vesnit Complete",
    brand: "D - BASF",
    currentPrice: 1820,
    originalPrice: 2198,
    savings: 378,
    defaultSize: "250ml",
  },
  {
    discount: 20,
    image: p4,
    name: "Farmer Safety Shoes",
    brand: "Dr Enterprises",
    currentPrice: 1599,
    originalPrice: 1999,
    savings: 400,
    defaultSize: "11UK / OR7",
  },
  {
    discount: 37,
    image: p5,
    name: "T -621 Cabbage F1",
    brand: "Takii",
    currentPrice: 210,
    originalPrice: 335,
    savings: 125,
    defaultSize: "500ml",
  },
];

const bestSellers = [
  {
    discount: 62,
    image: p6,
    name: "No Virus Bio Viricide",
    brand: "Geolife Agritech",
    currentPrice: 319,
    originalPrice: 850,
    savings: 531,
    defaultSize: "500ml",
  },
  {
    discount: 39,
    image: p7,
    name: "Growth Promoter",
    brand: "D - BASF",
    currentPrice: 228,
    originalPrice: 470,
    savings: 182,
    defaultSize: "250ml",
  },
  {
    discount: 32,
    image: p8,
    name: "Sahoo Tomato Seeds",
    brand: "Dr Enterprises",
    currentPrice: 983,
    originalPrice: 1450,
    savings: 467,
    defaultSize: "11UK / OR7", 
  },
  {
    discount: 27,
    image: p9,
    name: "Chick Feeder",
    brand: "Meenakshi Agro farms",
    currentPrice: 2200,
    originalPrice: 3000,
    savings: 800,
    defaultSize: "250ml",
  },
  {
    discount: 30,
    image: p10,
    name: "Farmson Chilli Seeds",
    brand: "Farmson Biotech",
    currentPrice: 438,
    originalPrice: 630,
    savings: 192,
    defaultSize: "250ml", 
  },
];

const ProductGrid2 = () => {
  return (
    <>
     
     <div className="bg-[#20C563] py-8 bg-opacity-70">
        <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-medium">Today's Offers</h2>
          <a href="#" className="text-white hover:underline">View All</a>
        </div>
        

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {todayOffers.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        </div>
      </div>

     
      <div className="bg-[#20C563] py-8 bg-opacity-70">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-medium">Best Sellers</h2>
            <a href="#" className="text-white hover:underline">View All</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {bestSellers.map((product, index) => (
              <ProductCard key={`best-seller-${index}`} {...product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductGrid2;
