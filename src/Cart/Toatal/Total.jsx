import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {FiArrowLeft} from "react-icons/fi";
import "./total.scss"
import {clearTotal} from "../../redux/redusers/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import {getTotal} from "../../redux/redusers/cartSlice";
import store from "../../redux/store";
import {get} from "axios";
const Total = ({item}) => {
    const {total,data} = useSelector((store) => store.cart)
    const dispatch = useDispatch()


    return (
            <div className="total__last">
                <button onClick={() => dispatch(clearTotal(item))} className={'total__clear'}>Clear</button>
                <div className="total__right">
                    <div className="total__wrapp">
                        <h5 className="total__subtotal">Subtotal</h5>
                        <span className="row__num">$ {total}</span>
                    </div>
                    <p className="total__text">Taxes and shipping calculated at checked</p>
                    <button className={'total__check'}>Check out</button>
                    <Link to={'/'} className="total__home">
                        <FiArrowLeft color={"gray"}/>
                        <p className="total__back">Continue Shopping</p>
                    </Link>
                </div>
            </div>


    );
};

export default Total;