import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CartState } from "./Context/Context.js";
import Rating from "./Rating.js";
const Filters = () => {
  const [rate, setRate] = useState(3);
  const {
    productState: { sort, byStock, byDelivery, byRating, searchQuery },
    productDispatch,
  } = CartState();
  console.log(sort, byStock, byDelivery, byRating, searchQuery);
  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          type="radio"
          name="group1"
          id={`inline-1`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Decending"
          type="radio"
          name="group1"
          id={`inline-2`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include out of stock"
          type="checkbox"
          name="group1"
          id={`inline-3`}
          style={{ cursor: "pointer" }}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_STOCK",
            })
          }
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast delivery only"
          type="checkbox"
          name="group1"
          id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_DELIVERY",
            })
          }
          checked={byDelivery}
        />
      </span>
      <span style={{ paddingRight: 10 }}>
        <Rating
          rating={byRating}
          onClick={(i) =>
            productDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button
        variant="light"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
