import { DescriptionItem } from "../../InterfacesEntity/DescriptionItem.interface"
import { ActionTypes } from "./DescriptionItem.actions"
import { Action } from "../../interfacesAction/action.interface"

export interface State {
	descriptionItem: DescriptionItem
}

const initialState: State = {
  descriptionItem: [{} as DescriptionItem],
}

export const descriptionItemReducer = (
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
