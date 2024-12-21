import counterReducer from "../Slices/Imagevaluve"
import { configureStore } from "@reduxjs/toolkit";
import Addtocart from "../Slices/Addtocart/Addtocart"
import Favirate from "../Slices/Favirate"

export const store = configureStore ({
    reducer :{ 
        location: counterReducer,
        Cart:Addtocart,
        Favirate:Favirate,
    }
})