import { CardItem } from "../../InterfacesEntity/CardItem.interface"
import { ActionTypes } from "./CardItem.actions"
import { Action } from "../../interfacesAction/action.interface"

export interface State {
	cardItem: CardItem
}

const initialState: State = {
  cardItem: [{} as CardItem],
}

export const cardItemReducer = (
  state: State = initialState,
  action: Action<[{}]>
) => {
  switch (action.type) {
  // case ActionTypes.SET_LIST_ALBUMS_WITH_PHOTOS:
  //   return {
  //     ...state,
  //     albumsForUserOwnerPage: action.payload
  //   }
  default:
    return state
  }
}
