import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: "Cart",
    initialState: {
        cartitems:[],
     
      
    },
    
             
     
    reducers: {
        Addtocart: (state, action) => {
          console.log(action, "action");
    
          const IsExies = state.cartitems.find((item) => item.idMeal === action.payload.idMeal);
    
          if (IsExies) {
            IsExies.quantity += 1;  // Corrected the typo here
          } else {
            state.cartitems.push({ ...action.payload, quantity: 1,Price:550 });  // Set initial quantity to 3
          }
        },
    
        Plus: (state, action) => {
          const IsExies = state.cartitems.find((item) => item.idMeal === action.payload.idMeal);
          if (IsExies) {
            IsExies.quantity += 1;  // Corrected the typo from 'quanitity' to 'quantity'
          }
        },
    
        Minus: (state, action) => {
          const IsExies = state.cartitems.find((item) => item.idMeal === action.payload.idMeal);
          if (IsExies && IsExies.quantity > 1) {
            IsExies.quantity -= 1;  // Corrected the typo from 'quanitity' to 'quantity'
          } else if (IsExies && IsExies.quantity === 1) {
            // Remove the item if quantity reaches 1 and the user decrements it further
            state.cartitems = state.cartitems.filter((item) => item.idMeal !== action.payload.idMeal);
          }
        },
    
        Delete: (state, action) => {
          const IsExies = state.cartitems.find((item) => item.idMeal === action.payload.idMeal);
          if (IsExies) {
            // Remove the item completely from the cart
            state.cartitems = state.cartitems.filter((item) => item.idMeal !== action.payload.idMeal);
          }
        }
      }  
} )


export const {Addtocart,Plus,Minus,Delete} = counterSlice.actions;

export default counterSlice.reducer;

