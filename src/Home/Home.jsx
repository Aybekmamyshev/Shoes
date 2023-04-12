import React, {useEffect} from 'react';
import Card from "./Card/Card";
import "./home.scss"
import {useDispatch,useSelector} from "react-redux";
import {productFetch} from "../redux/redusers/products";
import Loader from "./Loader/Loader";
import {useGetProductQuery} from "../redux/redusers/productApi";

const Home = () => {
    const dispatch = useDispatch()
    // const {data,status} = useSelector((store)=> store.product)
    const {data,isLoading,error} = useGetProductQuery()


    useEffect(() => {
         dispatch(productFetch())
    },[])
    return (
        <div className={'home'}>
            <div className="container">
                {
                    // status === 'loading' ? <Loader/> : status === 'error' ? <>Error</> :

                    isLoading ? <>...Loading </> : error ? <>error</> :
                        data.map((item) => (
                        <Card item={item}/>
                    ))
                }
             </div>
        </div>
    );
};

export default Home;