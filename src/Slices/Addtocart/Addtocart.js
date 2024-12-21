import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: "Cart",
    initialState: {
        cartitems:[],
     
      
    },
    
    reducers:{
        Addtocart :(state,action)=>{



            const   IsExies =state.cartitems.find((item)=>item.
            idCategory 
             === action.payload.
             idCategory
             )
            console.log(IsExies);
            if (IsExies) {
                IsExies.quanitity +=1
                
            }else{
                state.cartitems.push({...action.payload,quanitity:1})
                console.log(action,"action");
            }
        },

        Plus:(state,action)=>{
            const IsExies =state.cartitems.find((item)=>item.idCategory === action.payload.idCategory)
            if (IsExies) {
                IsExies.quanitity +=1
            }
        },
        minus:(state,action)=>{
            const IsExies =state.cartitems.find((item)=>item.idCategory === action.payload.idCategory)
            if (IsExies && IsExies.quanitity> 1) {
                IsExies.quanitity -=1
            } else if(IsExies && IsExies.quanitity===1){
        state.cartitems= state.cartitems.filter((item) => item.idCategory !== action.payload.idCategory)
            }
        },
        Delete:(state,action)=>{
            const IsExies =state.cartitems.find((item)=>item.idCategory === action.payload.idCategory)
            if (IsExies ) {
                state.cartitems= state.cartitems.filter((item) => item.idCategory !== action.payload.idCategory)
            } 
        
            
        }

    },  
} )


export const {Addtocart,Plus,minus,Delete} = counterSlice.actions;

export default counterSlice.reducer;

