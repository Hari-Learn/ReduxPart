import { createSlice } from "@reduxjs/toolkit";

const counterSlicer = createSlice({
    name:"reducerKey",
    initialState : {current_state : 0},
    reducers : {
        increment : (state,action) =>{
            state.current_state += action.payload
        },
        decrement : (state,action) =>{
            state.current_state -= action.payload
        }
    }
})

export const{ increment, decrement} = counterSlicer.actions
export default counterSlicer.reducer