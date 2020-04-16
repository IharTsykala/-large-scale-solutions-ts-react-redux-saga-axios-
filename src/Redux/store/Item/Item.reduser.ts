import { Item } from "../../InterfacesEntity/Item.interface"
import { DescriptionItem } from "../../InterfacesEntity/DescriptionItem.interface"
import { ActionTypes } from "./Item.actions"
import { Action } from "../../interfacesAction/action.interface"

export interface State {
	listItems: [Item]
	descriptionItem: DescriptionItem
	basePath: string
}

const initialState: State = {
  listItems: [{} as Item],
  descriptionItem: [{} as DescriptionItem],
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
