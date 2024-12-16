import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Restorentspage = () => {
    const [product, setproduct]=useState([])
console.log(product);

    useEffect(()=>{
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then((response)=>setproduct(response.data.meals))
        .catch((error)=>console.log(error))
    },[])
    return (
        <div>
       
       {product?.map((item) => {
  return (
    <div key={item.idMeal}>
      <img src={item?.strMealThumb} alt="" />
    </div>
  );
})}
         
        </div>
      );
    };
     export default Restorentspage ;