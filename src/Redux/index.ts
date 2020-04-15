import { combineReducers } from "redux"
import { cardItemReducer } from "./store/CardItem/CardItem.reduser"
import { descriptionItemReducer } from "./store/DescriptionItem/DescriptionItem.reduser"

export default combineReducers({
  cardItem: cardItemReducer,
  descriptionItem: descriptionItemReducer,
})
