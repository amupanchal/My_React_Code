import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductLIst from "./components/ProductList";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";

function App() {
  const products = [
    {
      price: 99999,
      name: "IPhone max 10",
      quntity: 0,
    },
    {
      price: 9999,
      name: "Redmi max 10",
      quntity: 0,
    },
    {
      price: 15000,
      name: "Sumsung max 10",
      quntity: 0,
    },
  ];
  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  let incrementQutity = (index) => {
    let newProduct = [...productList];
    let newTotalAmt = totalAmount;
    newProduct[index].quntity++;
    newTotalAmt += newProduct[index].price;
    setTotalAmount(newTotalAmt);
    setProductList(newProduct);
  };

  let decrementQuntity = (index) => {
    let newProduct = [...productList];
    let newTotalAmt = totalAmount;
    if (newProduct[index].quntity > 0) {
      newProduct[index].quntity--;
      newTotalAmt -= newProduct[index].price;
    }
    setTotalAmount(newTotalAmt);
    setProductList(newProduct);
  };

  let resetQuantity = () => {
    let newProduct = [...productList];
    newProduct.map((products) => {
      products.quntity = 0;
    });
    setProductList(newProduct);
    setTotalAmount(0);
  };

  let removeItem = (index) => {
    let newProduct = [...productList];
    let newTotalAmt = totalAmount;
    newTotalAmt -= newProduct[index].quntity * newProduct[index].price;
    newProduct.splice(index, 1);
    setProductList(newProduct);
    setTotalAmount(newTotalAmt);
  };

  const addItem = (name, price) => {
    let newProduct = [...productList];
    newProduct.push({
      price: price,
      name: name,
      quntity: 0,
    });
    setProductList(newProduct);
  };
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem} />
        <ProductLIst
          productList={productList}
          incrementQutity={incrementQutity}
          decrementQuntity={decrementQuntity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
