import counterReducer from "../Slices/Imagevaluve"
import { configureStore } from "@reduxjs/toolkit";
import Addtocart from "../Slices/Addtocart/Addtocart"

export const store = configureStore ({
    reducer :{ 
        location: counterReducer,
        Cart:Addtocart,
    }
})