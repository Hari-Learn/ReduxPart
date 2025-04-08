import { configureStore } from "@reduxjs/toolkit";

import counterSlicer from "./counterSlicer";

const storeBox = configureStore({
    reducer:{
        reducerKey:counterSlicer
    }
    
})

export default storeBox