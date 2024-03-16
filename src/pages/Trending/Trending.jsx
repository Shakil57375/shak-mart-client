import { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import allProducts from "../../database/data.json";
const Trending = () => {
  const [products, setProducts] = useState(allProducts);
  const handleFav = (id) => {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          return { ...product, isFav: !product.isFav };
        } else {
          return product;
        }
      })
    );
  };
  return (
    <div>
      <p className="text-center text-4xl font-bold my-4 ">Trending Products</p>
      <div className="grid grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onFav={handleFav} />
        ))}
      </div>
    </div>
  );
};

export default Trending;
