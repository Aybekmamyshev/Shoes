import React from 'react';
import {FiArrowLeft} from "react-icons/fi";
import "./row.scss"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import store from "../../redux/store";
import Total from "../Toatal/Total";
import {addPlus} from "../../redux/redusers/cartSlice";
import {removeItem} from "../../redux/redusers/cartSlice";
import {clearMinus} from "../../redux/redusers/cartSlice";
const Row = ({item}) => {
    const {price} = useSelector((store) => store.cart)
    const dispatch = useDispatch()
     return (
        <>
                    <div className={'row'}>
                        <div className="row__box">
                            <div className="row__inner">
                                <div className="row__img-block">
                                    <img src={item.image} className={'row__image'} alt=""/>
                                </div>
                                <div className="row__content">
                                    <h2 className="row__subtitle">{item.title}</h2>
                                    <button onClick={() => dispatch(removeItem(item.id))} className={'row__btn'}>Remove</button>
                                </div>
                            </div>
                            <h3 className="row__money">${item.price}</h3>
                            <div className="row__wrapper">
                                <button disabled={item.count === 0 ? true : ''} onClick={() => dispatch(clearMinus(item))} className={'row__add'}>-</button>
                                <span className={'row__count'}>{item.count}</span>
                                <button onClick={() => dispatch(addPlus(item))} className={'row__add'}>+</button>
                            </div>
                            <p className="row__dollar">${Math.trunc(price)}</p>


                        </div>
                    </div>

        </>

    );
};

export default Row;