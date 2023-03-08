import { combineReducers, createStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./authSlice";
import { CalculatorSlice } from "./CalculatorSlice";

const rootReducers = combineReducers({
 calculator: CalculatorSlice.reducer,
 auth: AuthSlice.reducer,
})

export const store = createStore(rootReducers)