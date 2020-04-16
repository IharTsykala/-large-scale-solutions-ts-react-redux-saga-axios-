import { Action } from "../../interfacesAction/action.interface"
import { Item } from "../../InterfacesEntity/Item.interface"
import { DescriptionItem } from "../../InterfacesEntity/DescriptionItem.interface"

export const ActionTypes = {
  GET_LIST_ITEMS_FROM_DB: "[item] get list items from DB ",
  SET_LIST_ITEMS_IN_STORE: "[item] set list items in store ",
  SET_BASE_PATH_IN_STORE: "[path] set base path in store",
  GET_DESCRIPTION_CURRENT_ITEM_FROM_DB:
    "[description] get description current item from DB ",
  SET_DESCRIPTION_CURRENT_ITEM_IN_STORE:
    "[description] set description current item in store ",

  GET_FAILURE: "[getFailure] Get failure",
}

export const getListItemsFromDB = (): Action<{}> => ({
  type: ActionTypes.GET_LIST_ITEMS_FROM_DB,
})

export const setListItemsInStore = (listItems: [Item]): Action<[Item]> => ({
  type: ActionTypes.SET_LIST_ITEMS_IN_STORE,
  payload: listItems,
})

export const setBasePathInStore = (basePath: string): Action<string> => ({
  type: ActionTypes.SET_BASE_PATH_IN_STORE,
  payload: basePath,
})

export const getDescriptionCurrentItemFromDB = (
  basePath: string,
  userLink: string
): Action<any> => ({
  type: ActionTypes.GET_DESCRIPTION_CURRENT_ITEM_FROM_DB,
  payload: { basePath, userLink },
})

export const setDescriptionCurrentItemInStore = (
  descriptionItem: DescriptionItem
): Action<DescriptionItem> => ({
  type: ActionTypes.SET_DESCRIPTION_CURRENT_ITEM_IN_STORE,
  payload: descriptionItem,
})

export const getFailureAction = (error?: any): Action<any> => ({
  type: ActionTypes.GET_FAILURE,
  payload: error,
})
