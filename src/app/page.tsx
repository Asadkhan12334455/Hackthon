import Hero from "./components/hero";
import Furniture from "./components/furniture";
import Inspiration from "./components/inspiration";
import Product from "./components/product";
import Rank from "./components/rank";
function homepage() {
  return (
    <div>
      <Hero />
       <Rank />
      <Product />
      <Inspiration />
      <Furniture /> 
    </div>
  );
}
export default homepage;
