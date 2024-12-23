import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: "Cart",
    initialState: {
        cartitems:[],
     
      
    },
    
             
     
    reducers: {
        Addtocart: (state, action) => {
          const user = JSON.parse(localStorage.getItem("User"));
          const IsExies = state.cartitems.find((item) => item.idMeal === action.payload.idMeal);
      
          if (IsExies && user) {
            IsExies.quanitity += 1;
          } else if (!IsExies && user) {
            state.cartitems.push({ ...action.payload, quanitity: 1 });
          } 
        
      },

        Plus:(state,action)=>{
            const IsExies =state.cartitems.find((item)=>item.idMeal === action.payload.idMeal)
            if (IsExies) {
                IsExies.quanitity +=1
            }
        },
        minus:(state,action)=>{
            const IsExies =state.cartitems.find((item)=>item.idMeal === action.payload.idMeal)
            if (IsExies && IsExies.quanitity> 1) {
                IsExies.quanitity -=1
            } else if(IsExies && IsExies.quanitity===1){
        state.cartitems= state.cartitems.filter((item) => item.idMeal !== action.payload.idMeal)
            }
        },
        Delete:(state,action)=>{
            const IsExies =state.cartitems.find((item)=>item.idMeal === action.payload.idMeal)
            if (IsExies ) {
                state.cartitems= state.cartitems.filter((item) => item.idMeal !== action.payload.idMeal)
            } 
        
            
        }

    },  
} )


export const {Addtocart,Plus,minus,Delete} = counterSlice.actions;

export default counterSlice.reducer;

