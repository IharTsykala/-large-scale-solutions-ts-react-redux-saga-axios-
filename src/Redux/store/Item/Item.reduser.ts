import {ItemInterface} from "../../InterfacesEntity/Item.interface"
import {DescriptionItemInterface} from "../../InterfacesEntity/DescriptionItem.interface"
import { ActionTypes } from "./Item.actions"
import { Action } from "../../interfacesAction/action.interface"

export interface State {
	listItems: [ItemInterface]
	removedListItems: [ItemInterface]
	descriptionItem: DescriptionItemInterface
	basePath: string
}

const initialState: State = {
  listItems: [{} as ItemInterface],
  removedListItems: [{} as ItemInterface],
  descriptionItem: {} as DescriptionItemInterface,
  basePath: '',
}

export const itemReducer = (
  state: State = initialState,
  action: Action<[{}]>
) => {
  switch (action.type) {
  case ActionTypes.SET_LIST_ITEMS_IN_STORE:
    return {
      ...state,
      listItems: action.payload
    }
  case ActionTypes.SET_STATUS_FOR_ITEM_IN_STORE:
  {let newListItems = state.listItems.map(item=> {
    // @ts-ignore
    if(item.id === action.payload) {
      	if(!item.removed) item.removed = true
      else item.removed = false
    }
    return item
  })
  return {
    ...state,
    listItems: newListItems
  }}
  case ActionTypes.SET_REMOVE_DATA_FOR_ITEM:
  { let newListItems = state.listItems.map(item=> {
    // @ts-ignore
    if(item.id === action.payload.itemId) {
      // @ts-ignore
      item.recoveredData = action.payload!.data
    }
    return item
  })
  return {
    ...state,
    listItems: newListItems
  }}
  case ActionTypes.SET_RECOVER_DATA_FOR_ITEM:
  { let newListItems = state.listItems.map(item=> {
    // @ts-ignore
    if(item.id === action.payload.itemId) {
      // @ts-ignore
      item.recoveredData = action.payload!.data
    }
    return item
  })
  return {
    ...state,
    listItems: newListItems
  }}
  case ActionTypes.SET_BASE_PATH_IN_STORE:
		  return {
		    ...state,
      basePath: action.payload
		  }
  case ActionTypes.SET_DESCRIPTION_CURRENT_ITEM_IN_STORE:
		  return {
		    ...state,
      descriptionItem: action.payload
		  }
  default:
    return state
  }
}
