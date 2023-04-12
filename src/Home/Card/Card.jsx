import React from 'react';
import "./card.scss"
import {useDispatch, useSelector} from "react-redux";
import {getCart} from "../../redux/redusers/cartSlice";
const Card = ({item}) => {
    const dispatch = useDispatch()
    return (
        <div className={'card'}>
                <h3 className="card__name">{item.title}</h3>
                 <div className="card__pic">
                     <img src={item.image} alt="" className="card__img"/>
                </div>
                <div className="card__wrapper">
                    <p className="card__subtitle">text</p>
                    <p className="card__price">${item.price}</p>
                </div>
                <button onClick={() => dispatch(getCart(item))} className={'card__btn'}>Add to Cart</button>

        </div>
    );
};

export default Card;