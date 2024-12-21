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
                try {
                    const user = JSON.stringify(state);
                    localStorage.setItem("user", user);
                    console.log("State saved to local storage");
                } catch (error) {
                    console.error("Error saving state to local storage:", error);
                }

            }
        },

     
     
      
    },  
} )


export const {Favi} = FaviSlice.actions;

export default FaviSlice.reducer;

