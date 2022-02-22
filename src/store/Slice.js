import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getDataItem = createAsyncThunk(
    'catalogItems/getDataItem',
    async ()=>{
    return await axios.get('fakeDataItem.json').then((res)=>res.data)
})



export const catalogSlice = createSlice({
    name: 'catalogItems',
    initialState: {
        loading: '',
        dataProducts: [],
        error: ''
    },
    reducers: {
        get() { }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(
            getDataItem.fulfilled,
             (state,action)=>{
                 state.dataProducts.push(...action.payload);
                 state.loading='ok';
            }
             )
        .addCase(
            getDataItem.pending, (state)=>{
                state.loading='loading';
            }
        )    

        
    }
})

export const { get } = catalogSlice.actions;



export default catalogSlice.reducer