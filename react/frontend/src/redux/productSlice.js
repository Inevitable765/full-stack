import {createAsyncThunk,createSlice, isRejectedWithValue}from '@reduxjs/toolkit'

import axios from 'axios'

const initialState={
    product:[]
}

export const fecthproduct =createAsyncThunk("fetch/product",async()=>{
    try{
        const res = await axios.get('http://localhost:3000/api/getproducts');
        return res.data;

    }
    catch(error){
        return rejectedWithValue(error);
    }
});

const productSlice=createSlice({
    name:"product",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchproduct.state.loading=true)
    }
}).addcase(fecthproduct.fulfilled,(state,action)=>{
    console.log(action.payload)
})