import { createSlice } from "@reduxjs/toolkit";


export const ViewSlice = createSlice({
    name: "Watch",
    initialState: {
        View:[],
     
      
    },
    
    reducers:{
        View :(state,action)=>{



            const   Views =state.View.find((item)=>item.
            idMeal
 
             === action.payload.
             idMeal

             )
            console.log(Views);
            if (Views && Views !== "") {
                state.View = [action.payload ];
              } else {

                state.View.shift(action.payload);
                state.View.push(action.payload);
              }
        },

     
     
      
    },  
} )


export const {View} = ViewSlice.actions;

export default ViewSlice.reducer;

