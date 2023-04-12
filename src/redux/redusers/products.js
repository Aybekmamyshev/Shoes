import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const productFetch = createAsyncThunk(
    'product/productFetch',

    async (_,{rejectWithValue}) => {
        try {
            const res = await axios.get('http://localhost:3003/poducts');
            if (res.statusText !== "OK"){
                throw new Error("Ошибка")
            }
                return res.data

        }
        catch (err) {
            return rejectWithValue("Ошибка")
        }

    }
)


const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        status: '',
        error: ''
    },
    reducers: {},
    extraReducers: {
        [productFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [productFetch.fulfilled]: (state, action) => {
            state.status = 'success'
            state.data = action.payload
        },
        [productFetch.rejected]: (state,action) => {
            state.status = 'error'
            state.error = action.payload
        },
    }
})

export const {} = productSlice.actions
export default productSlice.reducer