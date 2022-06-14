import React, { useState } from "react";
import "../../css/Products/Products.css";
import Modal from "react-modal";
function Products(props) {
  const [product, setProduct] = useState("");

  const openModal = (product) => {
    setProduct(product);
  };
  return (
    <div className="products">
      {props.products.map((product) => (
        <div className="product-item" key={product.id}>
          <a href="#" onClick={() => openModal(product)}>
            <img src={product.imageUrl} alt={product.title} />
          </a>
          <div className="product-desc">
            <p>{product.title}</p>
            <span>{product.price}</span>
          </div>
          <button>Add To Cart</button>
        </div>
      ))}

      <Modal isOpen={product}>
        <div className="prroduct-info">
          <img src={product.imageUrl} alt={product.title} />
          <p>{product.title}</p>
          <p>{product.desc}</p>
        </div>
      </Modal>
    </div>
  );
}

export default Products;
