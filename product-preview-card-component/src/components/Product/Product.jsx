import React from 'react';
import './product.scss';
import cartSvg from '../../assets/images/icon-cart.svg';

function Product(props) {
  return (
    <article>
      <section className="image-container">
        <picture>
          <source srcSet={props.imgMobile} media="(max-width: 767px)" />
          <source srcSet={props.imgDesktop} media="(min-width: 768px)" />
          <img src="productDesktop" alt="Perfume product image" />
        </picture>
      </section>
      <section className="product-info">
        <div className="info-container">
          <h1 className="type">{props.type.toUpperCase()}</h1>
          <h2 className="name">{props.name}</h2>
          <p className="description">{props.description}</p>
          <div className="prices">
            <span className="price-new">${props.price}</span>
            <span className="price-old">${props.oldPrice}</span>
          </div>
          <button>
            <img src={cartSvg} alt="Cart logo" />
            <span>Add to cart</span>
          </button>
        </div>
      </section>
    </article>
  );
}

export default Product;
