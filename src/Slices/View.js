import { createSlice } from "@reduxjs/toolkit";


export const FaviSlice = createSlice({
    name: "Watch",
    initialState: {
        View:[],
     
      
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

     
     
      
    },  
} )


export const {View} = FaviSlice.actions;

export default FaviSlice.reducer;

