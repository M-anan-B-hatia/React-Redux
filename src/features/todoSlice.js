import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        incrementReducer: state => {
            state.value += 1
        },
        decrementReducer: state =>{
            state.value -= 1
        },
        incrementByAmtReducer: (state, action) => {
            state.value += action.payload
        },
        resetReducer: state => {
            state.value = 0
        }
    }
})


export const {incrementByAmtReducer, incrementReducer, decrementReducer, resetReducer} = counterSlice.actions

export default counterSlice.reducer