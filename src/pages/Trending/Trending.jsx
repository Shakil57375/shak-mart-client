import ProductCard from "../../components/ProductCard/ProductCard";
import  products  from "../../database/data.json";
const Trending = () => {
  console.log(products);
  return (
    <div>
      <p className="text-center text-4xl font-bold my-4">Trending Products</p>
      {
        products.map(product =>(
          <ProductCard key={product.id} product = {product} />
        ))
      }
    </div>
  );
};

export default Trending;
