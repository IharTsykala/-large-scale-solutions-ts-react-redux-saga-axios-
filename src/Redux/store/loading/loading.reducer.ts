import { ActionTypes } from "./loading.actions"
import { Action } from "../../interfacesAction/action.interface"

export interface State {
	listItemsLoadingState: string
	descriptionItemLoadingState: string
}

const initialState: State = {
  listItemsLoadingState: "loaded",
  descriptionItemLoadingState: "loaded",
}

export const loadingStateReducer = (
  state: State = initialState,
  action: Action<String>
) => {
  switch (action.type) {
  case ActionTypes.SET_LIST_ITEMS_LOADING_STATE:
    return {
      ...state,
      listItemsLoadingState: action.payload
    }
  case ActionTypes.SET_DESCRIPTION_ITEM_LOADING_STATE:
    return {
      ...state,
      descriptionItemLoadingState: action.payload
    }
  default:
    return state
  }
}
