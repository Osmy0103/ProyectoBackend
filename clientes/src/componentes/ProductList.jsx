import React, { useEffect, useState } from "react";
import { Pagination } from "./Pagination";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

const totalProducts = products.length

  const [productsPerPage, setProductsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * productsPerPage
  const firsIndex = lastIndex - productsPerPage

  const productList = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const products = await data.json();
    setProducts(products);
  };
  useEffect(() => {
    productList();
  }, []);

  return (
    <>
      <div className="products">
        {products.map((product) => (
          <div className="card-product" key={product.id}>
            <figure className="imagendeproducto">
              <img className="im" src={product.image} alt={product.title} />
            </figure>

            <div className="info-product">
              <h3>{product.title}</h3>
              <p className="price">${product.price}</p>
              <button>Añadir al carrito</button>
            </div>
          </div>
        )).slice (firsIndex, lastIndex)}
      </div>
      <Pagination
      
      productsPerPage = {productsPerPage}
      currentPage ={currentPage}
      setCurrentPage ={setCurrentPage}
      totalProducts ={totalProducts}
      
      
      />
    </>
  );
};
