import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: "Cart",
    initialState: {
        cartitems:[],
     
      
    },
    
    reducers:{
        Addtocart :(state,action)=>{

            state.cartitems.push({...action.payload,quantity:1})
            state.name = action.payload;
            console.log(action,"action");



        }
    },  
} )


export const {Addtocart} = counterSlice.actions;

export default counterSlice.reducer;

