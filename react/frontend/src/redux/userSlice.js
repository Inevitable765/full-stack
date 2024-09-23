//signup 
import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk
 } from "@reduxjs/toolkit"
import axios from "axios"
import{toast}from "sonner"
export const Register = createAsyncThunk('/user/register', async(data,{rejectWithValue})=>{
    try {
      const res = axios.post('http://localhost:3000/api/register',data)
      console.log(res.data)
      return res.data
  }
     catch (error) {
        rejectWithValue(error)
    }

} )


export const userLogin = createAsyncThunk('/user/login', async(data,{rejectWithValue})=>{
    try {
      const res = axios.post('http://localhost:3000/api/login',data)
      console.log(res.data)
      return res.data
  }
     catch (error) {
        rejectWithValue(error)
        console.log(rejectWithValue(error))
        return rejectWithValue(error)
    }
      
} )

const initialState = {
loading : false ,
error : null ,
token : null ,
name : null ,
role : null
}

const userSlice = createSlice({
    name : "user",
    initialState,
    extraReducers : (builder) => {
    builder.addCase(Register.pending, (state)=>{
    state.loading = true ;
    state.error = null
 }).addCase(Register.fulfilled , (state)=>{
    state.loading = false ;
    state.error = null
    toast.success('account created successfully')
 }).addCase(Register.rejected,(state,action)=>{
    state.loading = false ;
    state.error = action.payload
 }).addCase(userLogin.pending, (state)=>{
    state.loading = true
 }).addCase(userLogin.fulfilled,(state,action)=>{
    console.log(action.payload)
    state.loading = false
    toast.success('login successfull')
 }).addCase(userLogin.rejected,(state,action)=>{
    console.log(action.payload)
    state.loading = false,
    state.error = action.payload
 })
    }
})

export default userSlice.reducer

