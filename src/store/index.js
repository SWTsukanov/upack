import { configureStore } from "@reduxjs/toolkit";
import { catalogSlice } from "./Slice";

export default configureStore({
    name:'data',
    reducer:{catalogSlice}
})