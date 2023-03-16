import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { CartReducer, FilterReducer } from "./Reducers";
import newProducts from "../Products";

const cart = createContext();

const Context = ({ children }) => {
  const products = newProducts;
  const [state, dispatch] = useReducer(CartReducer, {
    products: products,
    cart: [],
  });
  const [productState, productDispatch] = useReducer(FilterReducer, {
    byStock: false,
    byDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(cart);
};
