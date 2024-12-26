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
              IsExies.quantity += 1;
            } 
      
            else {
              state.cartitems.push({ ...action.payload, quantity: 3 });
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

