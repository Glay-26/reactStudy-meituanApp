// 编写store
import {createSlice} from "@reduxjs/toolkit"
import axios from "axios"

const foodStore = createSlice({
    name: "food",
    initialState: {
        // 商品列表
        foodList: [],
        // 菜单激活下标值
        activeIndex: 0
    },
    reducers: {
        // 设置商品列表
        setFoodList(state, action) {
            state.foodList = action.payload
        },
        // 设置菜单激活下标值
        setActiveIndex(state, action) {
            state.activeIndex = action.payload
        }
    }
})

// 异步获取部分
const {setFoodList, setActiveIndex} = foodStore.actions
const fetchFoodList = () => {
    return async (dispatch) => {
        const res = await axios.get("http://localhost:3004/takeaway")
        dispatch(setFoodList(res.data))
    }
}
export { fetchFoodList,setActiveIndex}

const reducer = foodStore.reducer
export default reducer