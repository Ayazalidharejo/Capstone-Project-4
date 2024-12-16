import Cartimage from "../Slices/Imagevaluve"
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore ({
    reducer :{ 
        counter: Cartimage,
       
    }
})