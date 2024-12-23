import { createSlice } from "@reduxjs/toolkit";


export const twoSlice = createSlice({
    name: "Carttwo",
    initialState: {
        Cartitem:[],
     
      
    },
    
             
     
    reducers: {
        Addtocarttwo: (state, action) => {
            console.log(action,"ayaz");
            
          const user = JSON.parse(localStorage.getItem("User"));
          const IsExiese = state.Cartitem.find((item) => item.idDrink === action.payload.idDrink);
      
          if (IsExiese && user) {
            IsExiese.quanitity += 1;
          } else if (!IsExiese && user) {
            state.Cartitem.push({ ...action.payload, quanitity: 1 });
          } 
        
      },

        Plus2:(state,action)=>{
            const IsExiese =state.Cartitem.find((item)=>item.idDrink === action.payload.idDrink)
            if (IsExiese) {
                IsExiese.quanitity +=1
            }
        },
        minus2:(state,action)=>{
            const IsExiese =state.Cartitem.find((item)=>item.idDrink === action.payload.idDrink)
            if (IsExiese && IsExiese.quanitity> 1) {
                IsExiese.quanitity -=1
            } else if(IsExiese && IsExiese.quanitity===1){
        state.Cartitem= state.Cartitem.filter((item) => item.idMeal !== action.payload.idDrink)
            }
        },
        Delete2:(state,action)=>{
            const IsExies =state.Cartitem.find((item)=>item.idDrink === action.payload.idMeal)
            if (IsExies ) {
                state.Cartitem= state.Cartitem.filter((item) => item.idDrink !== action.payload.idDrink)
            } 
        
            
        }

    },  
} )


export const {Addtocarttwo,Plus2,minus2,Delete2} = twoSlice.actions;

export default twoSlice.reducer;

