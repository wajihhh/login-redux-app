import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users : [],
    currentUser : null,
    isLoggedIn : false,
}
const authSlice = createSlice({

    name : "auth", 
    initialState,

    reducers: {
        signupUser: (state, action)=>{
            state.users.push(action.payload)
        },

        loginUser: (state, action)=>{
            state.currentUser = action.payload
            state.isLoggedIn = true
        },
        logoutUser: (state, action)=>{
            state.currentUser = null
            state.isLoggedIn = false
        }

            
    },
   
        

})


export const{
    loginUser,
    signupUser,
    logoutUser
} = authSlice.actions

export default authSlice.reducer