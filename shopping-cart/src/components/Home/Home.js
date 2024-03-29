import { CartState } from "../Context/Context";
import Filters from "../Filters";
import SingleProducts from "../SingleProducts";
import "./../../components/style.css";
const Home = () => {
  const {
    state: { products },
    productState: { sort, byStock, byDelivery, byRating, searchQuery },
  } = CartState();
  const transformProducts = () => {
    let sortedProducts = products;
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }
    if (byDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.title.toLowerCase().includes(searchQuery)
      );
    }
    return sortedProducts;
  };
  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transformProducts().map((prod) => {
          return <SingleProducts prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
