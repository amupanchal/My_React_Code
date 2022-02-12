import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  return props.productList.length  > 0 ? (
    props.productList.map((product, i) => {
      return (
        <Product
          product={product}
          key={i}
          incrementQutity={props.incrementQutity}
          decrementQuntity={props.decrementQuntity}
          removeItem={props.removeItem}
          index={i}
        />
      );
    })
  ) : (
    <h1>No product exits in card</h1>
  );
}
