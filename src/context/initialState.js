import { fetchCart, fetchUser } from "../utils/fetchLocalStorageData";

// instead of this state been null fetch data from localstorage which is a conditional statement
const  userInfo = fetchUser()
const  cartInfo = fetchCart()

export const initialState ={
    user: userInfo,
    foodItems :null,
    cartShow:false,
    cartItems: cartInfo
    
    /**made changes on this line */
};