import React from "react";
import Counter from "./Counter";
import { MyProduct } from "./MyProduct";
import { useState } from "react";

function Product() {
  let title = "Learn How To Create React JS";
  let showList = true;
  const [products, setProducts] = useState([
    {
      id: 1,
      label: "IPhone 13",
      price: 3000,
    },
    {
      id: 2,
      label: "Nokia",
      price: 100,
    },
    {
      id: 3,
      label: "Samsung",
      price: 1500,
    },
  ]);
  const deleteProduct = (id) => {
    let myList = products.filter((product) => product.id !== id);
    setProducts((prev) => {
      console.log(prev);
      return myList;
    });
  };
  return (
    <>
      <h1>{title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta vero
        eos nobis nemo ab nam recusandae tempora, tenetur facilis reiciendis!
      </p>
      <Counter />
      {showList && (
        <div>
          {products.map((product, i) => (
            <div key={i}>
              <MyProduct id={product.id} onDeleteProduct={deleteProduct}>
                <div className="card-body">
                  <p>Lorem ipsum dolor sit.</p>
                  <h4 className="card-title">{product.label}</h4>
                  <p className="card-text">
                    <button className="btn btn-danger">{product.price}</button>
                  </p>
                </div>
              </MyProduct>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Product;
