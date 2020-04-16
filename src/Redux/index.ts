import { combineReducers } from "redux"
import { itemReducer } from "./store/Item/Item.reduser"

export default combineReducers({
  item: itemReducer,
})
