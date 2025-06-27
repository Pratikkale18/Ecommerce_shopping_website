import React, { useEffect, useState } from "react";
import Spinner from '../components/Spinner';
import Product from '../components/Product';
import { products as productData } from '../data';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    setLoading(true);
    // Simulating API delay
    setTimeout(() => {
      setProducts(productData);
      setFiltered(productData);
      setLoading(false);
    }, 500);
  }, []);

  const handleFilter = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setFiltered(products);
    } else {
      const filteredItems = products.filter((p) =>
        p.category.toLowerCase().includes(category.toLowerCase())
      );
      setFiltered(filteredItems);
    }
  };

  return (
    <div className="min-h-screen px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {["all", "men", "women", "electronics", "jewelery"].map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilter(cat)}
            className={`px-5 py-2 rounded-full border text-sm font-medium transition-all ${
              activeCategory === cat
                ? "bg-green-600 text-white"
                : "bg-white border-gray-300 text-gray-700 hover:bg-green-100"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {loading ? (
        <Spinner />
      ) : filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filtered.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No products found.</p>
      )}
    </div>
  );
};

export default Home;
