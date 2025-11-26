import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const foodsStore = createSlice({
    name: 'foods',
    initialState: {
        foodList: [],
        activeIndex: 0,
        cartList: [],
    },
    reducers: {
        setFoodList: (state, action) => {
            state.foodList = action.payload
        },
        setActiveIndex: (state, action) => {
            state.activeIndex = action.payload
        },
        addToCart: (state, action) => {
            const item = state.cartList.find(item => item.id === action.payload.id)
            if(item){
                item.count++
            }else{
            state.cartList.push(action.payload)
            }
        }
    }
})
const { setFoodList,setActiveIndex, addToCart } = foodsStore.actions

const fetchFoodList =()=>{
    return async(dispatch)=>{
       const res=await axios.get('http://localhost:3004/takeaway')
       dispatch(setFoodList(res.data))
    }
}
export { fetchFoodList, setActiveIndex, addToCart }
const reducer =foodsStore.reducer
export default reducer
