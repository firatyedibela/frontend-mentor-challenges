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
          <source />
          <img src="productDesktop" alt="Perfume product image" />
        </picture>
      </section>
      <section className="product-info">
        <div className="info-container">
          <p className="type">{props.type.toUpperCase()}</p>
          <h1 className="name">{props.name}</h1>
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
