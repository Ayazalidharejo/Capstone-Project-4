import counterReducer from "../Slices/Imagevaluve"
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore ({
    reducer :{ 
        location: counterReducer,
       
    }
})