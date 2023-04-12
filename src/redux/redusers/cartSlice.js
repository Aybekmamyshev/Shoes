import {createSlice} from "@reduxjs/toolkit";
import {json} from "react-router-dom";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [],
        count: localStorage.getItem("count") ? JSON.parse(localStorage.getItem("count")) : 0,
        total: 0,
        price: 0
    },
    reducers: {
        getCart : (state,action)=> {
            state.data = state.data.findIndex((item) => item.id === action.payload.id) > -1 ? [...state.data]  : [...state.data, {...action.payload, count : 1, money : 0}]
            state.count = state.data.reduce((acc,rec) => {
                return acc + rec.count
            },0)
            state.total = state.data.reduce((acc,rec) => {
                return rec.price * rec.count + acc
            },0)
            state.price = state.price + +action.payload.price
            localStorage.setItem("data", JSON.stringify(state.data))
            localStorage.setItem("count", JSON.stringify(state.count))
        },
        removeItem : (state, action) => {
             state.data = state.data.filter((item) => item.id !== action.payload)
             state.count = state.count - 1
            localStorage.setItem("data",JSON.stringify(state.data))
            localStorage.setItem("count",JSON.stringify(state.count))

        },
        clearTotal : (state, action) => {
            state.data = []
            state.count = 0
            localStorage.setItem("data",JSON.stringify(state.data))
            localStorage.setItem("count",JSON.stringify(state.count))
        },
        addPlus :(state, action) => {
           state.data = state.data.map((item) => {
                if (item.id === action.payload.id){
                    return {...item,count:item.count + 1,money: item.money + 1}
                }else {
                    return item
                }
            })
            state.price = state.data.reduce((acc,rec) => {
                   return rec.count * rec.price + acc
            },0)


            state.count = state.data.reduce((acc,rec) => {
                return rec.count + acc
            },0)
            localStorage.setItem("count",JSON.stringify(state.count))


            state.total = state.data.reduce((acc,rec) => {
                return rec.price * rec.count + acc
            },0)


            // const itemCount = state.data.findIndex((item) => item.id === action.payload.id )
            // if (state.data[itemCount].count > 1){
            //   return   state.data[itemCount].count += 1
            // }
        },
        clearMinus : (state, action) => {
            state.data = state.data.map((item) => {
                if (item.id === action.payload.id){
                    return {...item,count: item.count - 1}
                }
                return item
            })
            state.count = state.data.reduce((acc,rec) => {
                return rec.count + acc
            },0)

            state.price = state.price - action.payload.price

            // state.price = state.data.reduce((acc,rec) => {
            //     if (rec.id === action.payload.id){
            //         return state.price - rec.price + acc
            //     }
            //
            // },0)

            state.total = state.total - action.payload.price

            // state.total = state.data.reduce((acc,rec) => {
            //        return state.total - rec.price
            // },0)
        },
        getTotal : (state) => {
            let total = 0
            state.data = state.data.forEach((item) => {
                total += item.count * item.price
            })

            state.total = total
          // let {total} =  state.data.reduce((acc,rec)=> {
          //     const {price,count} = rec
          //     const  itemTotal = price * count
          //     acc.total  += itemTotal
          // }, {
          //     total: 0
          // })
          //   state.total = total
        }
    }
})


export const  {getCart,clearTotal,removeItem,addPlus,clearMinus,getTotal} = cartSlice.actions
export default cartSlice.reducer