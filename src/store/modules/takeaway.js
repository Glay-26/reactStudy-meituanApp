import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const foodsStore = createSlice({
    name: 'foods',
    initialState: {
        foodList: []
    },
    reducers: {
        setFoodList: (state, action) => {
            state.foodList = action.payload
        }
    }
})
const { setFoodList } = foodsStore.actions

const fetchFoodList =()=>{
    return async(dispatch)=>{
       const res=await axios.get('http://localhost:3004/takeaway')
       dispatch(setFoodList(res.data))
    }
}
export { fetchFoodList }
const reducer =foodsStore.reducer
export default reducer
