import { createSlice } from "@reduxjs/toolkit";


export const FaviSlice = createSlice({
    name: "Favirate",
    initialState: {
        Favitaes:[],
     
      
    },
    
    reducers:{
        Favi :(state,action)=>{



            const   have =state.Favitaes.find((item)=>item.
            idMeal
 
             === action.payload.
             idMeal

             )
            console.log(have);
            if (have) {
              
                
            }else{
                state.Favitaes.push({...action.payload,quatity:1})
                console.log(action,"action");
               
            }
        },
        Delete: (state, action) => {
            const IsExies = state.Favitaes.find((item) => item.idMeal === action.payload.idMeal);
            if (IsExies) {
              // Remove the item completely from the cart
              state.Favitaes = state.Favitaes.filter((item) => item.idMeal !== action.payload.idMeal);
            }
          }

     
     
      
    },  
} )


export const {Favi,Delete} = FaviSlice.actions;

export default FaviSlice.reducer;

