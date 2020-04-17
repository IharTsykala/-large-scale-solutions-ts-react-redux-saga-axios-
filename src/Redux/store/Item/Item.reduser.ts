import {ItemInterface} from "../../InterfacesEntity/Item.interface"
import {DescriptionItemInterface} from "../../InterfacesEntity/DescriptionItem.interface"
import { ActionTypes } from "./Item.actions"
import { Action } from "../../interfacesAction/action.interface"

export interface State {
	listItems: [ItemInterface]
	removedListItems: []
	descriptionItem: DescriptionItemInterface
	basePath: string
}

const initialState: State = {
  listItems: [{} as ItemInterface],
  removedListItems: [],
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
  case ActionTypes.SET_STATUS_FOR_ITEM_IN_LIST_ITEMS:
  {let newListItems = state.listItems.map(item=> {
    // @ts-ignore
    if(item.id === action.payload) item.removed = true
    return item
  })
  return {
    ...state,
    listItems: newListItems
  }}
  case ActionTypes.SET_STATUS_FOR_ITEM_IN_REMOVED_LIST_ITEMS:
  {let newListItems = state.removedListItems.map(item=> {
    // @ts-ignore
    if(item.id === action.payload) item.removed = false
    return item
  })
  return {
    ...state,
    removedListItems: newListItems
  }}
  case ActionTypes.SET_REMOVE_DATA_FOR_ITEM:
  { let newListItems = state.listItems.map(item=> {
    // @ts-ignore
    if(item.id === action.payload.itemId) {
      // @ts-ignore
      item.removedData = action.payload!.data
    }
    return item
  })
  return {
    ...state,
    listItems: newListItems
  }}
  case ActionTypes.SET_RECOVER_DATA_FOR_ITEM:
  { let newListItems = state.removedListItems.map(item=> {
    // @ts-ignore
    // console.log(action.payload!.data)
    // @ts-ignore
    if(item.id === action.payload.itemId) {
      // @ts-ignore
    	console.log(action.payload!.data)
      // @ts-ignore
      item.recoveredData = action.payload!.data
    }
    return item
  })
  return {
    ...state,
    listItems: newListItems
  }}
  case ActionTypes.REMOVE_ITEM_FROM_LIST_ITEMS:
  {
    // @ts-ignore
    let newListItems = state.listItems.filter(item=>item.id !== action.payload)
    return {
      ...state,
      listItems: newListItems
    }}
  	case ActionTypes.REMOVE_ITEM_FROM_REMOVED_LIST_ITEMS:
  {
    // @ts-ignore
    let newListItems = state.removedListItems.filter(item=>item.id !== action.payload)
    return {
      ...state,
      removedListItems: newListItems
    }}
  case ActionTypes.CONCAT_ITEM_TO_LIST_ITEMS:
  {
    // @ts-ignore
    let newListItems = state.listItems.concat(action.payload).sort(
      (a: ItemInterface, b: ItemInterface) =>{
        if(a.name && b.name) return  a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
        return 0
      }
    )
    return {
      ...state,
      listItems: newListItems
    }}
  case ActionTypes.CONCAT_ITEM_TO_REMOVED_LIST_ITEMS:
  {
    // @ts-ignore
    let newListItems = state.removedListItems.concat(action.payload).sort(
      (a: ItemInterface, b: ItemInterface) =>{
      	if(a.name && b.name) return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
        return 0
      }
    )
    return {
      ...state,
      removedListItems: newListItems
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
