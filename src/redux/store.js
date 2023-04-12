import {configureStore} from "@reduxjs/toolkit";
import product from "./redusers/products";
import {productApi} from "./redusers/productApi";
import  cart  from "./redusers/cartSlice"
import {getTotal} from "./redusers/cartSlice";
const store = configureStore({
    reducer: {
        product,
        cart,
      [productApi.reducerPath] : productApi.reducer,
    },
    middleware : (getDefaultMiddleware) =>  getDefaultMiddleware().concat(productApi.middleware)
})

// store.dispatch(getTotal())

export  default  store