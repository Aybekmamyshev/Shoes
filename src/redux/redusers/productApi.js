import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery : fetchBaseQuery({baseUrl:"http://localhost:3003"}),
    endpoints:(builder) =>({
        getProduct: builder.query({
             query:() => "products"
        }),
    })
})

 export const {useGetProductQuery} = productApi