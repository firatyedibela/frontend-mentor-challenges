import React from 'react';
import './product.scss';
import cartSvg from '../../assets/images/icon-cart.svg';

function Product(props) {
  return (
    <article className="product-card">
      <div className="product-card__img-half">
        <picture>
          <source srcSet={props.imgDesktop} media="(min-width: 768px)" />
          <img
            className="product-card__img"
            src={props.imgMobile}
            alt="Perfume product image"
          />
        </picture>
      </div>
      <div className="product-card__text-half">
        <p className="product-card__ribbon">{props.type}</p>
        <h2 className="product-card__title">{props.name}</h2>
        <p className="product-card__description">{props.description}</p>
        <p className="product-card__prices">
          <span className="product-card__price">${props.price}</span>
          <s>${props.oldPrice}</s>
        </p>
        <button type="button" className="product-card__btn">
          <img src={cartSvg} alt="" />
          <span>Add to cart</span>
        </button>
      </div>
    </article>
  );
}

export default Product;
