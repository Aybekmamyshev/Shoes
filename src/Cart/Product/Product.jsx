import React from 'react';
import "./product.scss"
const Product = () => {
    return (
            <div className="product__block">
                <p className="product__title product__title_1">product</p>
                <p className="product__title product__title_2">price</p>
                <p className="product__title product__title_3">quantity</p>
                <p className="product__title product__title_4">total</p>
            </div>

    );
};

export default Product;