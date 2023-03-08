import { createSlice } from "@reduxjs/toolkit";

const initialState = {
email: "",
password: "",
isAuthorized: false
}

export const AuthSlice = createSlice({
 name: 'auth',
 initialState, 
 reducers: {
  login(state, action) {
   state.email = action.payload;
   state.isAuthorized = true
  }
 }
})
export const authActions = AuthSlice.actions
