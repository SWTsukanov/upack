import { createSlice } from "@reduxjs/toolkit";


export const catalogSlice = createSlice({
    name: 'catalogItems',
    initialState: {
        loading: false,
        dataProducts: [],
        error: ''
    },
    reducers: {
        get() { }
    }
})

export const { get } = catalogSlice.actions;
export default catalogSlice.reducer