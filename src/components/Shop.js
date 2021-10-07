import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
const Shop = () => {
  const dispatch = useDispatch();

  const actions = bindActionCreators(actionCreators, dispatch);

  const { withdrawMoney, depositMoney } = actions;

  return (
    <div className="container">
      <button className="btn btn-primary" onClick={() => withdrawMoney(100)}>
        -
      </button>

      <p>Add this item to cart</p>
      <button className="btn btn-primary" onClick={() => depositMoney(100)}>
        +
      </button>
    </div>
  );
};

export default Shop;
