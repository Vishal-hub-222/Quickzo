import React,{createContext, useState} from "react"; 
import all_product from "../components/Assets/all_product";
import { Product } from "../pages/Product";

export const ShopContext= createContext(null);
const getDefaultCart=()=>{
    let cart={};
    for(let index=0; index<all_product.length+1;index++)
    {
        cart[index]=0;
    }
    return cart;
}
const ShopContextProvider = (props)=>{

const [cardItems,setCartIems]=useState(getDefaultCart());
const addToCart=(itemId)=>{
    setCartIems((prev)=>({...prev ,[itemId]:prev[itemId]+1}));
    console.log(cardItems)
}
const removefromCart=(itemId)=>{
    setCartIems((prev)=>({...prev ,[itemId]:prev[itemId]-1}));
}

const getTotalCartAmount=()=>{
    let totalAmount=0;
    for(const item in cardItems)
    {
        if(cardItems[item]>0)
        {
            let itemInfo=all_product.find((product)=>product.id===Number(item))
            totalAmount+=itemInfo.new_price*cardItems[item];

        }
     
    }  
     return totalAmount;
}
const getTotalcartItem=()=>{
    let sum=0;
    for(const i in cardItems)
    {
          sum+=cardItems[i]
    }
    return sum;
}

const contextvalue = {all_product,cardItems,addToCart,removefromCart,getTotalCartAmount,getTotalcartItem};

return(
    <ShopContext.Provider value={contextvalue}>
        {props.children}
    </ShopContext.Provider>
)
}
export default ShopContextProvider;