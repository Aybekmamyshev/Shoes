import React, {useEffect} from 'react';
import Row from "./Row/Row";
import "./cart.scss"
import Product from "./Product/Product";
import Total from "./Toatal/Total";
import {useDispatch, useSelector} from "react-redux";
import { FiArrowLeft } from "react-icons/fi";
import {Link} from "react-router-dom";
import {getTotal} from "../redux/redusers/cartSlice";
const Cart = () => {
    const dispatch = useDispatch()
    const {data} = useSelector((store) => store.cart)
    // useEffect(() => {
    //     dispatch(getTotal())
    // },[data])

    return (
        <div className={'cart'}>
            <div className="container">
                {
                    data.length  ?
                        <>
                        <h2 className="cart__title">Shopping Cart</h2>

                        <Product/>


                        {
                            data.map((item) => (
                                <Row item={item}/>
                            ))

                        }

                   <Total/>

                    </> :

                        <Link to={'/'} className={'cart__shop'}>
                            <FiArrowLeft/>
                            <p className={'cart__back'}>Please go to the Shop</p>

                        </Link>
                }



            </div>
        </div>
    );
};

export default Cart;