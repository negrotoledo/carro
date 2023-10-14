import React from "react";
import Categories from "./Categories";
import Product from "./Product";
import products from "./ProductsData";

import "./css/home.css";


const Home = () => {
  const newProducts = products.filter((product) => product.category === "Nuevos" || product.category === "Mas Vendido");
  <Categories />

  return (
    <div>
      <h2>Productos Nuevos</h2>
      <div className="product-container">
        {newProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}


      </div>
    </div>
  );
};

export default Home;
