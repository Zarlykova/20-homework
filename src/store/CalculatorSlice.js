import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 count: 0,
 currentCount: 0,
 prevCount: null
}

export const CalculatorSlice = createSlice({
 name: 'calculator',
 initialState,

 reducers: {
addCount(state, action) {
state.count = Number(state.count) + Number(action.payload);
},
subtructCount(state, action) {
state.count = Number(state.count) - Number(action.payload);
},
multiplyCount(state, action) {
state.count = Number(state.count) * Number(action.payload);
},
divideCount(state, action) {
state.count = Number(state.count) / Number(action.payload);
},
resetCount(state){
state.count = 0
}
}
})

export const calculatorAction = CalculatorSlice.actions